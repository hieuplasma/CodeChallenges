// Link challenges: https://www.hackerrank.com/challenges/picking-numbers/problem?isFullScreen=true


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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let max = 0;
    let sorted = a.sort(function (a, b) { return a - b })

    for (let i = 0; i < sorted.length; i++) {
        let current = 1;
        let j = i + 1;
        while (sorted[j] - sorted[i] <= 1 && j < sorted.length) {
            current++;
            j++;
        }
        if (current > max) max = current
    }

    return max
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
