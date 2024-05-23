/** @format */

"use strict";
/** @format */

// var timeLimit = function (fn, t) {
//   let flag = true;
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       flag = false;
//       console.log("inTimeout", flag);
//       resolve();
//     }, t);
//   });
//   return async function (...args) {
//     console.log("in main func", flag);
//     if (flag) {
//       return await fn(...args);
//     } else {
//       throw new Error("Time Limit Exceeded");
//     }
//   };
// };

// const timedDelayed = timeLimit(fn, 50);

// setTimeout(()=>timedDelayed(100), 0);

// const asyncFunc = async () => {
//   setTimeout(() => {
//     console.log("lol man, that's so simple");
//   }, 1000);
// };
// asyncFunc();
// setTimeout(() => {
//   console.log("I am so fast");
// }, 500);

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};

const timeLimit = function (fn, t) {
  return async function (...args) {
    let timeout;
    return Promise.race([
      new Promise((resolve, reject) => {
        timeout = setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      }),
      new Promise(async (resolve, reject) => {
        const result = await fn(...args).catch((err) => {
          reject(err);
        });
        resolve(result);
      }),
    ])
      .then((value) => {
        clearTimeout(timeout);
        return value;
      })
      .catch((error) => {
        throw error;
      });
  };
};

// const timeLimit = function (fn, t) {
//   return async function (...args) {
//     return Promise.race([
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject("Time Limit Exceeded");
//         }, t);
//       }),
//       new Promise(async (resolve, reject) => {
//         const result = await fn(...args).catch((err) => {
//           reject(err);
//         });
//         resolve(result);
//       }),
//     ])
//       .then((value) => {
//         return value;
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// };

const timedFunc = timeLimit(fn, 1000);

new Promise(async (resolve, reject) => {
  const localRes = await timedFunc(4);
  console.log(localRes);
});
