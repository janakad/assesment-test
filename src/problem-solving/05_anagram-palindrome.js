/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */

export function isPalindromePossible(input) {
    const characters = []
    for (let i of input) {
        if (typeof characters[i] === 'undefined') {
            characters[i] = 1
        } else {
            characters[i]++
        }
    }

    let oddCharacters = 0

    for (let j in characters) {
        if (characters[j] % 2 === 1) {
            oddCharacters++
        }
    }

    if (oddCharacters > 1) {
        return false
    }

    return true
}
