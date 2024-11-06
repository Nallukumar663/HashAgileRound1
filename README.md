TypeScript Compilation
This project uses TypeScript. To compile the TypeScript files into JavaScript, follow the steps below:

1. Install TypeScript (if not already installed globally)
If you don't have TypeScript installed globally, you can install it by running:

bash
Copy code
npm install -g typescript
2. Compile the TypeScript files
To compile the TypeScript files into JavaScript, run:

bash
Copy code
tsc
This will generate .js files from the TypeScript files in your project. The generated JavaScript files will appear in the same directory as the original TypeScript files (unless otherwise specified in the tsconfig.json file).

3. Run the JavaScript file
After the TypeScript files are compiled, you can run the generated JavaScript files using Node.js:

bash
Copy code
node <compiled-file>.js

Code Explanation :
    Problem Statement :
        The statement is to find the majority element in an given array of size n, the majority element means which has >= n/2 number of occurences
    Solution 1 :
        Brute Force Approach : TIME : O(n), SPACE : O(n) 
          The brute force approach is to use hash map and count the number of occurences and check its frequency is >= n/2
        Best Approach TIME : O(n), SPACE : O(1) 
          Boyer-Moore Voting Algorithm:
              This algorithm works by maintaining a candidate element and a count that tracks how likely that candidate is to be the majority element. 
              The core idea is that the majority element, if it exists, will always outnumber all other elements combined, 
              so it will eventually become the dominant candidate as you process the array.
