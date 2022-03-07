import Sum from "../src/Sum";

test("should sum two numbers", () => {
  const sum = new Sum();
  expect(sum.run(2, 3)).toBe(5);
});
