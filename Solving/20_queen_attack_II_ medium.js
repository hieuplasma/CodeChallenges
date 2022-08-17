// Link challenges:  https://www.hackerrank.com/challenges/queens-attack-2/problem?isFullScreen=true

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
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

function countPossibleMove(direction, n, k, r_q, c_q, obstacles) {
    let currentR = r_q;
    let currentC = c_q;
    let move = 0;
    let check = true;
    while (currentR <= n && currentC <= n && check
        && currentR >= 1 && currentC >= 1) {
        switch (direction) {
            case "UP":
                currentR++;
                break;
            case "DOWN":
                currentR--;
                break;
            case "LEFT":
                currentC--
                break;
            case "RIGHT":
                currentC++
                break;
            case "UPLEFT":
                currentR++;
                currentC--;
                break;
            case "UPRIGHT":
                currentR++;
                currentC++;
                break;
            case "DOWNLEFT":
                currentR--;
                currentC--;
                break;
            case "DOWNRIGHT":
                currentR--;
                currentC++;
                break;
            default:
            // code block
        }
        // for (let i = 0; i < obstacles.length; i++) {
        //     if (obstacles[i][0] == currentR && obstacles[i][1] == currentC) {
        //         check = false;
        //         break;
        //     }
        // }
        if (obstacles.has(currentR + "-" + currentC)) {
            check = false
        }

        if (check) {
            move++
        }
    }

    return check ? move - 1 : move
}

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    let obs = new Set()
    for (let i = 0; i < obstacles.length; i++) {
        obs.add(obstacles[i][0] + '-' + obstacles[i][1])
    }

    let up = countPossibleMove("UP", n, k, r_q, c_q, obs)
    let down = countPossibleMove("DOWN", n, k, r_q, c_q, obs)
    let left = countPossibleMove("LEFT", n, k, r_q, c_q, obs)
    let right = countPossibleMove("RIGHT", n, k, r_q, c_q, obs)
    let upLeft = countPossibleMove("UPLEFT", n, k, r_q, c_q, obs)
    let upRight = countPossibleMove("UPRIGHT", n, k, r_q, c_q, obs)
    let downLeft = countPossibleMove("DOWNLEFT", n, k, r_q, c_q, obs)
    let downRight = countPossibleMove("DOWNRIGHT", n, k, r_q, c_q, obs)

    return up + down + left + right + upLeft + upRight + downLeft + downRight
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);

    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}
