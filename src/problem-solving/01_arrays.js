/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
/**
 *
 * @param arr
 * @returns {number}
 */
export function sum(arr) {
    let sum = 0;

    for (let i of arr) {
        sum += i
    }

    return sum
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @returns {*[]}
 */
export function concat(a, b, c) {
    const concatArray = [];

    for (let i of a) {
        concatArray.push(i)
    }

    for (let j of b) {
        concatArray.push(j)
    }

    for (let k of c) {
        concatArray.push(k)
    }

    return concatArray

}

/**
 *
 * @param arr
 * @param occurrence
 * @returns {number}
 */
export function count(arr, occurrence) {
    let count = 0;

    for (let i of arr) {
        if (i === occurrence) {
            count++
        }
    }

    return count
}

/**
 *
 * @param arr
 * @returns {*[]}
 */
export function duplicates(arr) {
    const duplicates = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                let flag = true
                for (let duplicate of duplicates) {
                    if (duplicate === arr[i]) {
                        flag = false
                    }
                }
                if (flag) {
                    duplicates.push(arr[i])
                }
            }
        }
    }
    return duplicates
}

/**
 *
 * @param arr
 * @returns {*[]}
 */
export function square(arr) {
    const squareArray = []
    for (let i of arr) {
        squareArray.push(i * i)
    }
    return squareArray
}
