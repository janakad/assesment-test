/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what consts you need to implement.
 */


/**
 *
 * @param input
 * @returns {boolean}
 */
const containsNumber = (input) => {
    return /[0-9]/.test(input)
}

/**
 *
 * @param input
 * @returns {boolean}
 */
const containsRepeatingLetter = (input) => {
    return /([a-z A-Z])\1+/.test(input)
}

/**
 *
 * @param input
 * @returns {boolean}
 */
const endsWithVowel = (input) => {
    return /[aeiouAEIOU]$/.test(input)
}

/**
 *
 * @param input
 * @returns {string|boolean}
 */
const captureThreeNumbers = (input) => {
    const result = (input.match(/[0-9]{3}/) || [])
    if (result.length) {
        return result.join('')
    } else {
        return false
    }
}

/**
 *
 * @param input
 * @returns {boolean}
 */
const matchesPattern = (input) => {
    return /^([0-9]){3}\-([0-9]){3}\-([0-9]){4}$/.test(input)
}

/**
 *
 * @param input
 * @returns {boolean}
 */
const isUSD = (input) => {
    return /^\$(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{2})?$/.test(input)
}

export default {
    containsNumber: containsNumber,
    containsRepeatingLetter: containsRepeatingLetter,
    endsWithVowel: endsWithVowel,
    captureThreeNumbers: captureThreeNumbers,
    matchesPattern: matchesPattern,
    isUSD: isUSD,
}

