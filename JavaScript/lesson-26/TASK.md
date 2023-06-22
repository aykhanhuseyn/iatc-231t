# JavaScript Tasks on Array

1. Check if input is array or not

   ```javascript
   let variable1 = [];
   let variable2 = { length: 1 };
   let variable3 = new Array(1);
   ```

2. Clone Array

   ```javascript
   let array1 = [1, 2, 3];
   let array2 = copy(array1);
   array1 === array2; // false
   array1[0] === array2[0]; // true

   function copy(array) {
    // your code here...
   }
   ```

3. Deep clone array using recursive function

   ```javascript
   let array1 = [{ name: 'John' }];
   let array2 = copy(array1);
   array1 === array2; // false
   array1[0] === array2[0]; // false

   function deepCopy(array) {
    // your code here...
   }
   ```

4. Sort given number array like max, min, max, min...

   ```javascript
   let array = [1, -4, 5, 6, -2, 0];
   sorted = [6, -4, 5, -2, 1, 0];
   ```

5. Create a function to create array from given parameters

   ```javascript
   function range(start, stop, step) {
    // your code here...
   }

   // default start is 1
   // default stop is 10
   // default step is 1

   range(7); // [7, 8, 9]
   range(2020, 2023); // [2020, 2021, 2022]
   ```

6. Create a function to calculate sum of all numbers in a given array or parameters list

   ````javascript
    sum([1, 2, 3]); // 6
    sum([1, 2, 3, 'hello', true]); // 6
    sum(1, 2, 3); // 6
    ```

   ````

7. Create a function called `random` to get random integer between `min` and `max`

   ```javascript
   random(7); // 99
   random(1, 5); // 4
   random(1, 5); // 2
   random(1, 5); // 1
   random(-Infinity, Infinity); // 1_312_221_741

   // min is default -2_147_483_648
   // max is default 2_147_483_647
   ```

8. Create a function called `round`

   ```javascript
   round(2.1425); // 2.14
   round(2.1425, 3); // 2.143

   // default precision is 2
   ```

9. Create a function called `arithmeticMean`

   ```javascript
   arithmeticMean([1, 2, 3, 4, 5]); // 3
   arithmeticMean([1, 5]); // 3
   arithmeticMean([3, 3, 3, 3]); // 3
   ```

10. Create a function called `geometricMean`, which calculates arithmetic mean, and returns rounded value

    ```javascript
    geometricMean([1, 2, 3, 4, 5]); // 2.61
    geometricMean([1, 5]); // 2.24
    geometricMean([5, 5, 5]); // 5
    ```

11. Create a function called `unique`

    ```javascript
    unique([1, 1, 1, 5]); // [1, 5]
    unique([5, 5, 5]); // [5]
    unique([1]); // [1]
    ```

12. Create a function called `naturalSum`, it should be recursive function

    ```javascript
    naturalSum(3); // 1 + 2 + 3 => 6
    naturalSum(6); // 1 + ... + 6 => 21
    naturalSum(9); // 1 + ... + 9 => 45
    ```

13. Make a function called `flat` to falt array of any nested arrays

    ```javascript
    flat([1, 2, [3, 4]]); // [1, 2, 3, 4]
    flat([1, 2, [3, 4, [5, 6]]]); // [1, 2, 3, 4, 5, 6]
    flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ```

14. Extend previous function to accept nesting level

    ```javascript
    flat([1, 2, [3, 4, [5, 6]]], 1); // [1, 2, 3, 4, [5, 6]]
    flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], 2); // [1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]]
    ```

15. Make a function called `collectString` to collect all strings from nested keys

    ```javascript
    function collectStrings(deepObject) {
    // Your code here...
    }
    const obj = {
     stuff: "foo",
     data: {
      val: {
       thing: {
        info: "bar",
        moreInfo: {
         evenMoreInfo: {
          weMadeIt: "baz"
         },
        },
       },
      },
     },
    };
    collectStrings(obj); // ["foo", "bar", "baz"]
    ```

16. Make random password generator functions

    ```javascript
    const generator1 = passwordGenerator(['A', 'a', '9', '@', ' '], ['💕', '💣']);
    generator1(5); // "@Za9💕"
    generator1(9); // "Cx$0 9💣kA"
    const generator2 = passwordGenerator(['9']);
    generator2(4); // "3277"
    generator2(5); // "034109"
    ```

17. Make `ceaserCipherGenerator` and `ceaserCipher` functions

    ```javascript
    const ceaserCipher = ceaserCipherGenerator('abcdefghijklmnopqrstuvwxyz');

    ceaserCipher('Hello', 4); // Olssv
    ceaserCipher('If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.', 7); // Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.
    ```

18. Make `diff` function to find difference between objects

    ```javascript
    function diff (arg1, arg2) {
    // Your code here...
    }

    diff({ name: 'Jack', age: 22 }, { name: 'John', age: 22 }); // { name: 'John' }
    diff([1, 2, 3], [1, 2, 3, 4, 5]); // [4, 5]
    diff('john', 'johnathan'); // 'athan'
    diff(5, 6); // -1
    ```

19. Find missing number in the array

    ```javascript
    const array1 = [1, 5, 4, 2];
    const array2 = [10, 3, 5, 9, 7, 1, 2, 6, 4];

    findMissing(array1); // 3
    findMissing(array2); // 8
    ```

20. Find distance, elevation and angle between given coordinates

    ```javascript
    function calculateDistance(coord1, coord2) {
    // Your code here
    }

    // Coordinates:
    const coord1 = {
    X: 5573283,
    Y: 6309750,
    Z: 191.5,
    };
    const coord2 = {
    X: 5573791,
    Y: 6323798,
    Z: 132.2,
    };

    const coord3 = {
    X: 5573283,
    Y: 6309750,
    Z: 191.5,
    };
    const coord4 = {
    X: 5573791,
    Y: 6323798,
    Z: 132.2,
    };

    calculateDistance(coord1, coord2); // { distance: 14057, elevation: -59, angle: 88 }
    calculateDistance(coord3, coord4); // { distance: 19457, elevation: 419, angle: -134 }
    ```
