function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseWord(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = 'This is a sunny day';
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult);
