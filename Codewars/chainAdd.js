function createMessage(str) {
    return (newString)=> {
        if (newString!==undefined){
            return str;
        }
        return createMessage( str + ' ' + newString);
    }
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")());