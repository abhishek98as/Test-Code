function reverseWords(sentence) {
    let reversedSentence = '';
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            reversedSentence = reversedSentence + reverseWord(currentWord) + ' ';
            currentWord = '';
        } else {
            currentWord = currentWord + sentence[i];
        }
    }

    reversedSentence = reversedSentence + reverseWord(currentWord);

    return reversedSentence;
}

function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }
    return reversedWord;
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
