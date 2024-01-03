const { isValidBrackets } = require(".");

test("Valid brackets sequence 1", () => {
  expect(isValidBrackets("(){}[]")).toBe(true);
});

test("Valid brackets sequence 2", () => {
  expect(isValidBrackets("[{()}](){}")).toBe(true);
});

test("Invalid brackets sequence 1", () => {
  expect(isValidBrackets("[]{()")).toBe(false);
});

test("Invalid brackets sequence 2", () => {
  expect(isValidBrackets("[{)]")).toBe(false);
});

test("Brackets sequence with no matching", () => {
  expect(isValidBrackets("({[)]}")).toBe(false);
});

test("Brackets sequence with only opening brackets", () => {
  expect(isValidBrackets("({[")).toBe(false);
});

test("Brackets sequence with only closing brackets", () => {
  expect(isValidBrackets(")}]")).toBe(false);
});

test("Mixed valid brackets sequence", () => {
  expect(isValidBrackets("[{()}]([]){{}}")).toBe(true);
});
