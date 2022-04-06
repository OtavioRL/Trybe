const sum = require("./sum");

describe("Testes da função sum", () => {
  test("Retorna 9 ao receber os parametros 4 & 5??", () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Retorna 0 ao receber os parametros 0 & 0??', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('Retorna um erro ao receber uma string', () => {
    expect(() => {sum(4, "5")}).toThrow(new Error('parameters must be numbers'));
  });
});
