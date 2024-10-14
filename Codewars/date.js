function determineTime(durations) {
    let sumTime = [0, 0, 0];
    for (let i = 0; i < durations.length; i++) {
        const [hours, minutes, seconds] = durations[i].split(':').map(Number);
        sumTime[2] += seconds;
        if (sumTime[2] > 60) {
            sumTime[1] += 1;
            sumTime[2] -= 60;
        }
        sumTime[1] += minutes;
        if (sumTime[1] > 60) {
            sumTime[0] += 1;
            sumTime[1] -= 60;
        }
        sumTime[0] += hours;
        if (sumTime[0] > 24 || (sumTime[0] >= 24 && (sumTime[1] || sumTime[2]))) return false
    }
    return true
}

console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"]));