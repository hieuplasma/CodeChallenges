// Link challenges: https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    let maxa = a[0];
    let minb = b[0];
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > maxa) {
            maxa = a[i]
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (b[i] < minb) {
            minb = b[i]
        }
    }

    if (maxa > minb) return 0;

    for (let i = maxa; i < minb + 1; i++) {
        let check = true

        for (let j = 0; j < a.length; j++) {
            if (i % a[j] != 0) {
                check = false;
                // return 0;
            }
        }

        // if (!check) return 0;

        for (let j = 0; j < b.length; j++) {
            if (b[j] % i != 0) {
                check = false;
                // return 0;
            }
        }

        if (check) count++;
    }

    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
