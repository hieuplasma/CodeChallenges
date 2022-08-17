// Link challenges: https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true


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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let types = [0, 0, 0, 0, 0, 0,];
    let maxType = 0;
    let maxTypeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        types[arr[i]]++
    }

    for (let i = 1; i < types.length; i++) {
        if (types[i] > maxTypeCount) {
            maxTypeCount = types[i];
            maxType = i
        }
    }

    return maxType
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
