/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
const smallestChair = function (times, targetFriend) {
    const targetTime = times[targetFriend];
    const sortedTimes = [...times].sort((a, b) => a[0] - b[0]);
    const timeArray = new Array(times.length).fill(0);
    for (let i = 0; i < times.length; i++) {
        const [arrTime, depTime] = sortedTimes[i];
        for (let j = 0; j < timeArray.length; j++) {
            if (timeArray[j] <= arrTime) {
                timeArray[j] = depTime;
                if (targetTime[0] === arrTime && targetTime[1] === depTime) return j;
                break;
            }
        }
    }
};

console.log(smallestChair([[3,10],[1,5],[2,6]], 0))