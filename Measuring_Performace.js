function sumUp(n) {
    let result = 0;
    for(let i = 1; i <=n; i++) {
        result = result + i;
    }
    return result;
}

console.log(sumUp(3));
console.log(sumUp(4));

// start = performance.now();
// console.log(start);

start = performance.now();
sumUp(5); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.11800003051757812

start = performance.now();
sumUp(10); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.01699995994567871

start = performance.now();
sumUp(1000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.05760002136230469

start = performance.now();
sumUp(10000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.34529995918273926

start = performance.now();
sumUp(100000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 3.4619998931884766

start = performance.now();
sumUp(1000000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 3.005699872970581


start = performance.now();
sumUp(10000000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); //-> 11.885900020599365

start = performance.now();
sumUp(100000000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); //-> 117.43280005455017