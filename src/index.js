
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
        } catch (err) {
            throw new Error(err)
        }
    }
}


export function canIterate (arg){
    if (arg == null) {
     return false;
   }
   return typeof arg[Symbol.iterator] === 'function';
 }