import Team from "../Team";
import Character from "../Character";

test("addAll", () => {
  const pers1 = new Character("Vasya", "Bowman");
  const pers2 = new Character("Lesha", "Zombie");
  const team = new Team();
  team.addAll(pers1, pers2);
  expect(team.characters).toContain(pers1, pers2);
});

test("add", () => {
  const pers1 = new Character("Vasya", "Bowman");
  const pers2 = new Character("Lesha", "Zombie");
  const team = new Team();
  team.add(pers1);
  team.add(pers2);
  expect(team.characters).toContain(pers1, pers2);
});

test("array", () => {
  const pers1 = new Character("Vasya", "Bowman");
  const pers2 = new Character("Lesha", "Zombie");
  const team = new Team();
  team.addAll(pers1, pers2);
  expect(team.toArray()).toEqual([pers1, pers2]);
});

test("Symbol and iterators", () => {
  const pers1 = new Character("Vasya", "Zombie");
  const pers2 = new Character("Lesha", "Bowman");
  const team = new Team();
  team.addAll(pers1, pers2);
  const iteration = team[Symbol.iterator]();
  expect(iteration.next().value).toEqual(pers1);
  expect(iteration.next().value).toEqual(pers2);
  expect(iteration.next().value).toEqual(undefined);
});

test("Error test", () => {
  expect(() => {
    const pers1 = new Character("Vasya", "Zombie");
    const team = new Team();
    team.add(pers1);
    team.add(pers1);
  }).toThrow("Такой персонаж уже есть.");
});
