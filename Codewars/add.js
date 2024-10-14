function add(n){
    const sum = (x)=>add(x+n);
    sum.valueOf = ()=> n;
    return sum;
}