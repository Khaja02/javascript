function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
}
const user_input = prompt('Enter the Sentence')
const inputSentence = user_input==''?"This is a sunny day":user_input;
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed sentence:", reversedSentence);
