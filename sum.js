const validatePassword = (word) => {
    const regex = /^(?!.*([a-zA-Z0-9])\1{3})(?=.*[A-Z])[a-zA-Z0-9]{10}$/g;
    const reg = regex.test(word);
    const numbers = word.match(/\d+/g).join('').split('');
    const arr = numbers.map(str => parseInt(str, 10));

    const hasConsecutiveNumbers = (arr) => {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const diff = max - min;

        return diff === arr.length - 1;
    }

    if (!hasConsecutiveNumbers(arr) && reg | reg) {
        return true;
    }

    return false;
}

console.log(validatePassword("BBBBcc1111"))

module.exports = { validatePassword };


