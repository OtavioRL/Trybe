const {sum, myRemove} = require("./sum");

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
describe("Testes da função myRemove", () => {
  test("Retorna o array esperado após receber [1, 2, 3, 4] e 3", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test("Não retorna [1, 2, 3, 4] ao receber o mesmo", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test("Retorna o array esperado após receber [1, 2, 3, 4] e 5", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});