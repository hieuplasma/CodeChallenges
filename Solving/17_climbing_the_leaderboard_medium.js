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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function binarySearch(key, ar, start, end) {

    if (key >= ar[start]) return start

    if (key <= ar[end]) return end

    if (end - start == 0 || end - start == 1) return start

    let middle = Math.floor((start + end) / 2);

    if (ar[middle] == key) return middle

    if (key > ar[middle]) {
        return binarySearch(key, ar, start, middle)
    }
    if (key < ar[middle]) {
        return binarySearch(key, ar, middle, end)
    }


}

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let result = []
    let newRanked = []
    newRanked[0] = ranked[0]
    for (let i = 0; i < ranked.length; i++) {
        if (newRanked[newRanked.length - 1] != ranked[i]) newRanked.push(ranked[i])
    }

    for (let i = 0; i < player.length; i++) {
        let key = player[i]

        let position = binarySearch(key, newRanked, 0, newRanked.length - 1)

        if (position == 0) {
            if (newRanked[position] < key) position = position
            if (newRanked[position] == key) position = position
            if (newRanked[position] > key) position = position + 1
        }
        else {
            if (newRanked[position] < key) position = position - 1
            if (newRanked[position] == key) position = position
            if (newRanked[position] > key) position = position + 1
        }


        result.push(position + 1)
    }

    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

