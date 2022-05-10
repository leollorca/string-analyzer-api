function analyze(string) {
  const vowelsArray = ["a", "e", "i", "o", "u", "y"];
  const stringLength = string.length;
  const wordNumber = string.split(" ").length;
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (const letter of string) {
    if (vowelsArray.includes(letter)) {
      vowelsCount++;
    } else {
      consonantsCount++;
      if (letter === " ") {
        consonantsCount--;
      }
    }
  }
  return {
    length: stringLength,
    words: wordNumber,
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
}

module.exports = analyze;
