import {Character,Team} from '../src/index.js'

describe("generator", () => {
    test('generator', () => {
        
        const bob = new Character('Bob','Bob',0,0,0)
        const ivan = new Character('Ivan','Ivan',0,0,0)
        const petr = new Character('Petr','Petr',0,0,0)

        const team = [bob,ivan,petr];

        const generator = new Team().generator(team)
       

        expect( generator.next()).toEqual({value:'Bob',done:false});
        expect( generator.next()).toEqual({value:'Ivan',done:false});
        expect( generator.next()).toEqual({value:'Petr',done:false});
        expect( generator.next()).toEqual({value:undefined,done:true});
    })
    test('throws', () => {
        const generatorError = new Team().generator()
        expect(() => {
            generatorError.next();
        }).toThrow();
      });
})