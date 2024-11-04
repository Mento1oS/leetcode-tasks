/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function (s, goal) {

    if (s.length !== goal.length) return false;

    for (let i = 0; i < goal.length; i++) {
        let word = '';
        for (let j = 0; j < goal.length; j++) {
            const letter = s[(i + j) % goal.length];
            word+=letter;
        }
        if(word===goal) return true;
    }

    return false;
};

const easyRotateString = (s, goal)=>{
    if (s.length !== goal.length) return false;

    const newStr = s+s;

    return newStr.includes(goal);
}