function prefill(n, v) {
    const arr = [];
    const num = Number(n);
    if(isNaN(num)) throw new TypeError(n,' is invalid');
    for(let i = 0; i< Number(n) ;i++){
        arr.push(v);
    }
    return arr;
}

console.log(prefill('xyz', '656'))