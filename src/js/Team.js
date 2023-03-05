export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(hero) {
    if (this.characters.has(hero)) {
      throw new Error("Такой персонаж уже есть.");
    } else {
      this.characters.add(hero);
    }
  }

  addAll(...heroes) {
    for (const person of heroes) {
      this.characters.add(person);
    }
  }

  toArray() {
    return [...this.characters];
  }

  [Symbol.iterator]() {
    const members = this.toArray();
    let i = 0;
    return {
      next() {
        if (i < members.length) {
          const memberList = members[i];
          i += 1;
          return {
            done: false,
            value: memberList,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
