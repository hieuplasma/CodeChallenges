// Link challenges: https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    let countSurplus = []
    for (let i = 0; i < k; i++) {
        countSurplus[i] = 0
    }
    
    for (let i = 0; i < s.length; i++) {
        countSurplus[s[i]%k]++
    }

    let result;

    if (countSurplus[0] > 0) result = 1
    else result = 0

    if (k % 2 == 0) result++

    for (let i = 1; i < k / 2; i++) {
        if (countSurplus[i] >= countSurplus[k - i]) result = result + countSurplus[i]
        else result = result + countSurplus[k - i]
    }

    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
