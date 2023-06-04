
export class Character {
    constructor(name, health, level, attack, defence) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

export class Team {
    *generator(obj) {
        try {
            for (let name in obj) {
                yield obj[name].name
            }
        } catch  {
            throw new Error()
        }
    }
}
