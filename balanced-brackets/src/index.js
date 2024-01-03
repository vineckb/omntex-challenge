module.exports = {
  isValidBrackets(input) {
    const stack = [];
    const bracketPairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (bracketPairs[char]) {
        const topElement = stack.length === 0 ? "#" : stack.pop();

        if (bracketPairs[char] !== topElement) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }

    return stack.length === 0;
  },
};
