# JavaScript_Algorithms

-----
 
You got a bag that holds a maximum weight of X.
Write a program that maximizes the value of the items you put into the bag while ensuring that you don't exceed the maximum weight.

`items = [
    {id: 'a', val: 10, w: 3},
    {id: 'b', val: 6, w: 8},
    {id: 'c', val: 3, w: 3}
]
maxWeight = 8`

<!-- solution -->
bag = ['a', 'c']

- since, value: (10+3) = 13 and weight: (3+3) = 6 (<8)

- This is called as `Knapsack problem`.

- We will solve it later using the code, currently we don't have that much knowledge and experience. 😅

- Questions like this is being asked to check your problem solving skills.
- Because, as a developer you are always solving problems.

----- 

## Algorithms: 
### What is an Algorithm?
A `sequence of steps` (instructions) to solve a `clearly defined problem`.

- The same steps always lead to the same solution of a problem (given the same inputs).

- `Every program is an algorithm` or `Every program consists of many smaller algorithms`.
- As a programmer, we need to able to solve problems (efficiently).

----- 

### What is the "Best Possible Solution"??

The algorithm with the best performance, so that it takes the least amount of time.

-----
 
 ## Measuring Performace (Time Complexity - Big O)
 ```js
 function sumUp(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result = result + i;
    }
    return result;
 }
 ```
 sumUp(3) // -> 6
 sumUp(4) // -> 10

### To measure the time it takes :
- For that we can measure the time when we start and the time when we end, and simply take the difference.
```js
start = performance.now();
```
- In js (in browser) there is a `performance` object, on which we can call the `now` method and this gives us the current timestamp.
```js
start = performance.now();
sumUp(5); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.11800003051757812
```
```js
start = performance.now();
sumUp(10); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.01699995994567871
```
```js
start = performance.now();
sumUp(1000); 
end = performance.now();
timeTaken = end - start;
console.log(timeTaken); // -> 0.05760002136230469
```
- We are getting different times (which is also not in sequence (increasing or decreasing)) 😥 

- Well thats the problem with measuring time like this in hard numbers   
- If we do this, we have lot of `influencing factors` that have nothing to do with our algorithm.
- For example:
-- the computer you are running this on matters, in a new and fst device it will wxecute fastly, in an older one it will take more time.
-- And even on the new device we don't always get the same result. it depends on the how many processes are runniong in the background, etc.
- So, even for the same value, we will not consistently always get the same output.
- So measuring time like this is not a great idea.

#### General trend for specially for very large numbers :


- For small numbers it was very unreliable, but for bigger numbers we saw a linear trend.
- A bigger number leads to more loop iterations, hence time increases in a `linear way`.

-  The factor by which we increase the input (in this case `n`) is the factor by which the time the function take increases, it increases ina linear way.

- And that's how we judge performance when we talk about algorithms.

- We called this as `Time Complexity`.
- The Function here has `Linear time complexity`.

