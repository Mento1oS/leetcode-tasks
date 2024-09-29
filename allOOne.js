const Node = function (key) {
    this.left = null;
    this.right = null;
    this.value = key;
}

const AllOne = function () {
    this.minKeyCnt = Infinity;
    this.minKeyValue = '';
    this.maxKeyCnt = 0;
    this.maxKeyValue = '';
    this.keyMap = new Map();
    this.cntMap = new Map();
    this.titleMap = new Map();
};

AllOne.prototype.inc = function (key) {
    //Получаем количество встреченных таких слов или undefined, если оно такое первое
    const prevCnt = this.keyMap.get(key);
    //Устанавливаем новое значение встеченных таких слов
    this.keyMap.set(key, prevCnt ? prevCnt + 1 : 1); //keyMap обработан, его можно не трогать
    //Получаем новое значение количества таких встреченных слов
    const actualCounter = this.keyMap.get(key);
    //Получаем map из нод по такому количеству встреченных слов или, если такого количества ещё не было, создаём новую map
    if (!this.cntMap.get(actualCounter)) this.cntMap.set(actualCounter, new Map());
    const cntNodeMap = this.cntMap.get(actualCounter);
    //Получем старый map с количеством на 1 меньше встреченных слов
    const prevNodeMap = this.cntMap.get(actualCounter - 1);
    //получаем титульный node на новом количестве, потребуется для привязки к другим словам
    const higherPrevTitleNode = this.titleMap.get(actualCounter);
    //получаем титульный узел на старом уровне
    const lowerTitleNode = this.titleMap.get(actualCounter - 1);
    //инициируем настоящий узел
    let currentNode;
    //если это новое слово, то создаём новый узел
    if (actualCounter === 1) {
        currentNode = new Node(key);
    } else {
        //если слово уже встречалось, берём узел из старого map
        currentNode = prevNodeMap.get(key);
        //проверяем, было ли оно там титульным
        if (currentNode.value === lowerTitleNode.value) {
            //получаем элемент справа
            const rightNode = currentNode.right;
            //правого элемента может не быть
            if (rightNode) {
                //отвязываем от него наш элемент
                rightNode.left = null;
                //устанавливаем новый титульный узел
                this.titleMap.set(actualCounter - 1, rightNode);
            }
            //если правого узла нет, то просто убираем ссылку из титульных на это количество
            else {
                this.titleMap.delete(actualCounter - 1);
            }
        }
        //узел не титульный
        else {
            //берём ссылки справа и слева
            const rightNode = currentNode.right;
            const leftNode = currentNode.left;
            //если он в середине, перезатираем на него ссылку
            if (rightNode && leftNode) {
                rightNode.left = leftNode;
                leftNode.right = rightNode
            }
            //если не в середине, то только справа с краю, затираем ссылку на него у левого элемента
            else {
                leftNode.right = null;
            }
        }
        //удаляем этот node из map по ключу
        prevNodeMap.delete(key);
    }
    //затираем ссылки на предыдущий уровень на всякий случай
    currentNode.right = null;
    currentNode.left = null;
    //добавляем в новый map наш узел по ключу
    cntNodeMap.set(key, currentNode);
    //если на новом уровне есть титульный узел
    if (higherPrevTitleNode) {
        //привязываем к нему наш узел
        higherPrevTitleNode.left = currentNode;
        //привязываем титульник к нашему узлу
        currentNode.right = higherPrevTitleNode;
    }
    //делаем наш узел титульным
    this.titleMap.set(actualCounter, currentNode);

    //проверка размерности

    //случай, если новый map < по количеству, чем минимальное количество до этого
    if (this.minKeyCnt > actualCounter) {
        this.minKeyCnt = actualCounter;
        this.minKeyValue = key;
    }

    //случай, если мы достали из map с меньшим количеством
    if (this.minKeyCnt === prevCnt) {
        //если в старом map ничего не осталось
        if (prevNodeMap.size === 0) {
            this.minKeyCnt = actualCounter;
            this.minKeyValue = key;
        }
        //если что-то осталось
        else {
            //получаем значение из титульных
            const rightNode = this.titleMap.get(prevCnt);
            //присваиваем минимальному ключу значение титульного там
            this.minKeyValue = rightNode.value;
        }
    }

    // случай, если новый map > по количеству, чем максимальное кличество до этого
    if (this.maxKeyCnt < actualCounter) {
        this.maxKeyValue = key;
        this.maxKeyCnt = actualCounter;
    }
    // console.log(this);
};

AllOne.prototype.dec = function (key) {
    //Получаем количество встреченных таких слов
    const prevCnt = this.keyMap.get(key);
    //Устанавливаем новое значение встеченных таких слов
    this.keyMap.set(key, prevCnt - 1); //keyMap обработан, его можно не трогать
    //Получаем новое значение количества таких встреченных слов
    const actualCounter = this.keyMap.get(key);
    //Получаем map из нод по такому количеству встреченных слов или, если такого количества ещё не было, создаём новую map
    if (!this.cntMap.get(actualCounter)) this.cntMap.set(actualCounter, new Map());
    const cntNodeMap = this.cntMap.get(actualCounter);
    //Получем старый map с количеством на 1 больше встреченных слов
    const prevNodeMap = this.cntMap.get(prevCnt);
    //получаем титульный node на новом количестве, потребуется для привязки к другим словам
    const lowerTitleNode = this.titleMap.get(actualCounter);
    //получаем титульный узел на старом уровне
    const higherPrevTitleNode = this.titleMap.get(prevCnt);
    //берём узел из старого map
    let currentNode = prevNodeMap.get(key);
    //проверяем, было ли оно там титульным
    if (currentNode.value === higherPrevTitleNode.value) {
        //получаем элемент справа
        const rightNode = currentNode.right;
        //правого элемента может не быть
        if (rightNode) {
            //отвязываем от него наш элемент
            rightNode.left = null;
            //устанавливаем новый титульный узел
            this.titleMap.set(prevCnt, rightNode);
        }
        //если правого узла нет, то просто убираем ссылку из титульных на это количество
        else {
            this.titleMap.delete(prevCnt);
        }
    }
    //узел не титульный
    else {
        //берём ссылки справа и слева
        const rightNode = currentNode.right;
        const leftNode = currentNode.left;
        //если он в середине, перезатираем на него ссылку
        if (rightNode && leftNode) {
            rightNode.left = leftNode;
            leftNode.right = rightNode
        }
        //если не в середине, то только справа с краю, затираем ссылку на него у левого элемента
        else {
            leftNode.right = null;
        }
    }
    //удаляем этот node из map по ключу, ссылки уже затёрты
    prevNodeMap.delete(key);

    //если элемент достиг счётчика 0
    if (actualCounter === 0) {
        //берём титульник один раз встречавшегося слова
        const oneWordTitle = this.titleMap.get(prevCnt);
        console.log(oneWordTitle);
        //берём максимальное количество встречавшихся слов
        const maxCnt = this.maxKeyCnt;
        //если больше нет слов
        if (oneWordTitle === undefined && maxCnt === 1) {
            this.minKeyCnt = Infinity;
            this.minKeyValue = '';
            this.maxKeyCnt = 0;
            this.maxKeyValue = '';
        }
        //если больше не осталось один раз встречавшихся слов
        else if (oneWordTitle === undefined) {
            //ищем самое меньшее непустое числовое множество
            for (let i = 1; i < this.maxKeyCnt + 1; i++) {
                //проверяем каждого кандидата, беря его титульник
                const newLessTitleNode = this.titleMap.get(i);
                //если титульник есть, принимаем его за наименьшее значение
                if (newLessTitleNode) {
                    this.minKeyCnt = i;
                    this.minKeyValue = newLessTitleNode.value;
                    //выходим из цикла
                    i = this.maxKeyCnt + 1;
                }
            }
        }
        //если ещё есть
        else {
            //просто ставим титульное слово на отображение на всякий случай

            const neededTitle = this.titleMap.get(prevCnt);
            this.minKeyValue = neededTitle.value;
        }

    }
    //если ещё не достиг 0
    else {
        //затираем ссылки на предыдущий уровень на всякий случай
        currentNode.right = null;
        currentNode.left = null;
        //добавляем в новый map наш узел по ключу
        cntNodeMap.set(key, currentNode);
        //если на новом уровне есть титульный узел
        if (lowerTitleNode) {
            //привязываем к нему наш узел
            lowerTitleNode.left = currentNode;
            //привязываем титульник к нашему узлу
            currentNode.right = lowerTitleNode;
        }
        //делаем наш узел титульным
        this.titleMap.set(actualCounter, currentNode);
    }

    //проверка размерности

    //случай, если новый map < по количеству, чем минимальное количество до этого
    if (this.minKeyCnt > actualCounter && actualCounter !== 0) {
        this.minKeyCnt = actualCounter;
        this.minKeyValue = key;
        console.log('тут 1');
    }

    //случай, если мы достали из map с большим количеством
    if (this.maxKeyCnt === prevCnt) {
        //если в старом map ничего не осталось
        if (prevNodeMap.size === 0) {
            this.maxKeyCnt = actualCounter;
            this.maxKeyValue = key;
        }
        //если что-то осталось
        else {
            //присваиваем минимальному ключу значение титульного там
            const neededTitle = this.titleMap.get(prevCnt);
            this.maxKeyValue = neededTitle.value;
        }
    }
};

AllOne.prototype.getMaxKey = function () {
    return this.maxKeyValue;
};

AllOne.prototype.getMinKey = function () {
    return this.minKeyValue;
};


allOne = new AllOne();
allOne.inc("hello");
console.log(allOne);
allOne.inc("world");
console.log(allOne);
allOne.inc("hello");
console.log(allOne);
allOne.dec("world");
console.log(allOne);
allOne.inc("hello");
console.log(allOne);
allOne.inc("leet");
console.log(allOne);
console.log(allOne.getMaxKey());
allOne.dec("hello");
console.log(allOne);
allOne.dec("hello");
console.log(allOne);
allOne.dec("hello");
console.log(allOne);
console.log(allOne.getMaxKey());