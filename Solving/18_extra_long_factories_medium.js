// Link challenges: https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
    // Write your code here
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    let result = BigInt(1)
    for (let i = BigInt(n); i > 0; i --) {
        result = result * i
    }
    
    ws.write(result.toString() + '\n');

    ws.end();
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    extraLongFactorials(n);
}
