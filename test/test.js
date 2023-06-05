import {Character,Team,canIterate} from '../src/index.js'

describe("generator", () => {
    test('generator', () => {
        
        const bob = new Character('Bob','Bob',0,0,0)
        const ivan = new Character('Ivan','Ivan',0,0,0)
        const petr = new Character('Petr','Petr',0,0,0)

        const team = [bob,ivan,petr];

        const generator = new Team().generator(team)
        const generatorError = new Team().generator(1)

        expect( generator.next()).toEqual({value:'Bob',done:false});
        expect( generator.next()).toEqual({value:'Ivan',done:false});
        expect( generator.next()).toEqual({value:'Petr',done:false});
        expect( generator.next()).toEqual({value:undefined,done:true});
    })
    test('throws', () => {
       
        expect(() => {
            generatorError.next();
        }).toThrow();
      });
})

describe("isItarable", () => {
    test('isItarable', () => {

        expect( canIterate(new Map())).toEqual(true);
        expect(canIterate(new Set())).toEqual(true);
        expect( canIterate(null)).toEqual(false);
        expect( canIterate(10)).toEqual(false);
        expect( canIterate("Netology")).toEqual(true);
    })
})