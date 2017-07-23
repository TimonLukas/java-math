const wordsToNumbers = require('words-to-numbers');

/**
 * Translates a word (or phrase) into a number.
 * @param {String} word The word which will be translated
 * @returns {Number} The corresponding number
 */
const parseWord = word => {
  return wordsToNumbers.wordsToNumbers(
    word,
    {fuzzy: true}
  );
};

module.exports = {
  parseWord
};