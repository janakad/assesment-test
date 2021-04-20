/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

export function getLastNumbers(payload, lastElement) {
    const flatArray = []

    let result = true

    while (result) {
        if (payload.data) {
            flatArray.push(payload.data)
        }
        if (!payload.next) {
            result = false
            break
        }
        payload = payload.next

    }


    if (flatArray.length < lastElement) {
        return flatArray
    } else {
        return flatArray.slice(flatArray.length - lastElement, flatArray.length)
    }
}
