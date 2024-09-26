const {arr3, arr4} = require('./testData')
const MyCalendar = function () {
    this.intervals = new Set();
};


MyCalendar.prototype.book = function (start, end) {
    for (const [beg, fin] of this.intervals) {
        if (
            (beg <= start && fin > start) ||
            (beg < end && fin >= end) ||
            (beg >= start && fin <= end) ||
            (beg <= start && fin >= end)) {
            return false;
        }
    }
    this.intervals.add([start, end]);
    return true;
};


// MyCalendar.prototype.book3 = function (start, end) {
//     const probSet = new Set();
//     for (let i = start, j = end - 1; j >= i; i++, j--) {
//         if (this.booked.has(i) || this.booked.has(j)) return false;
//         probSet.add(i);
//         probSet.add(j);
//     }
//     for (const elem of probSet) {
//         this.booked.add(elem);
//     }
//     return true;
// };
// MyCalendar.prototype.book2 = function (start, end) {
//     if (this.booked.has(start) || this.booked.has(end - 1)) return false;
//     for (let i = start; i < end; i++) {
//         if (this.booked.has(i)) {
//             for (let j = start; j < i; j++) {
//                 this.booked.delete(j);
//             }
//             return false;
//         }
//         this.booked.add(i);
//         // probSet.push(i);
//     }
//     // for (let i = 0; i < probSet.length; i++) {
//     //     this.booked.add(probSet[i]);
//     // }
//     return true;
// };

const cal = new MyCalendar();

// cal.book(1, 6);
// cal.book(8, 90);
// console.log(cal.booked);

const results = [];
for (const [start, end] of arr3) {
    results.push(cal.book(start, end));
}
console.log(results);

console.log(cal.intervals)

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */