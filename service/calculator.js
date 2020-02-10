
const multiples = [15, 5, 3]
const words = ['fizzbuzz', 'buzz', 'fizz']
const NO_MATCH = 'nomatch'
const INTEGER = 'integer'
const isMultipleOf = (value, multiple) => value % multiple == 0
const getWord = (value) => {
    if (isNaN(value)) throw new Error(`Invalid number provided ${value}`)
    if (('' + value).includes('3')) return 'lucky'
    const word = multiples.map((mul, i) => isMultipleOf(value, mul) ? words[i] : NO_MATCH).filter(w => w != NO_MATCH)
    return !word || word.length == 0 ? value : word[0]
}
const summarize = (results) => {
    return results.reduce((acc, curr) => {
        const label = isNaN(curr) ? curr : INTEGER
        if (!acc[label]) {
            acc[label] = 0
        }
        acc[label] += 1
        return acc
    }, {})
}
module.exports = { getWord, summarize }
