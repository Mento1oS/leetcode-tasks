const {arr3, arr4} = require('./testData');

const MyCalendarTwo = function () {
    this.eventLine = [];
};

MyCalendarTwo.prototype.book = function (start, end) {
    let sum = 0;
    if (this.eventLine[start] === undefined) this.eventLine[start] = 0;
    if (this.eventLine[end] === undefined) this.eventLine[end] = 0;
    this.eventLine[start]++;
    this.eventLine[end]--;
    for (const item in this.eventLine) {
        sum += this.eventLine[item];
        if (sum > 2) {
            this.eventLine[start]--;
            this.eventLine[end]++;
            return false
        }
    }
    return true;
};

const cal = new MyCalendarTwo();

// cal.book(1, 6);
// cal.book(8, 90);


const arr5 = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]];

const arr6 = [];

const results = [];
for (const [start, end] of arr5) {
    results.push(cal.book(start, end));
}
console.log(results);
console.log(cal.eventLine);