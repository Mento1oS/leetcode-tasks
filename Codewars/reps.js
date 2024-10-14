function duplicateCount(text){
    const map =  new Map();
    let reps = 0;
    for(let i = 0; i<text.length; i++){
        const letter = isNaN(Number(text[i])) ? text[i].toLowerCase() : text[i];
        if(map.get(letter)===1){
            reps++;
            map.set(letter, 2);
        }else if(!map.get(letter)){
            map.set(letter, 1);
        }
    }
    return reps;
}

console.log(duplicateCount("Indivisibility"))