// test("", () => {});
import {  Magician, Daemon } from "../math";

test("Attack without stoned", () => {
  const magician = new Magician(100);

  const daemon = new Daemon(100);

  expect(magician.getAttack(1)).toBe(100);
  expect(magician.getAttack(2)).toBe(90);
  expect(magician.getAttack(3)).toBe(80);
  expect(magician.getAttack(4)).toBe(70);
  expect(magician.getAttack(5)).toBe(60);

  expect(daemon.getAttack(1)).toBe(100);
  expect(daemon.getAttack(2)).toBe(90);
  expect(daemon.getAttack(3)).toBe(80);
  expect(daemon.getAttack(4)).toBe(70);
  expect(daemon.getAttack(5)).toBe(60);
});
test('Attack with distance greater than 5', () => {
    const magician = new Magician(100);
    const daemon = new Daemon(100);

    magician.stoned = true;
    daemon.stoned = true;

    expect(magician.getAttack(10)).toBe(0);  
    expect(daemon.getAttack(10)).toBe(0);
});
