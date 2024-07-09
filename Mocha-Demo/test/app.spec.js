const {add, sub, mul, div} = require('../src/app')
//const expect = require('chai').expect;

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

//1.BDD Describe and it
// describe('AddSuite', ()=>{
//     it('add(6,3) should return 9', ()=>{
//         expect(add(6,3)).to.be.equal(9);
//     })
// })
// describe('SubSuite', ()=>{
//     it('sub(6,3) should return 3', ()=>{
//         expect(sub(6,3)).to.be.equal(3);
//     })
// })
// describe('MulSuite', ()=>{
//     it('mul(6,3) should return 18', ()=>{
//         expect(mul(6,3)).to.be.equal(18);
//     })
// })
// describe('DivSuite', ()=>{
//     it('div(6,3) should return 2', ()=>{
//         expect(div(6,3)).to.be.equal(2);
//     })
// })
// context('DivSuite1', ()=>{
//     specify('div(6,3) should return 2', ()=>{
//         expect(div(6,3)).to.be.equal(2);
//     })
// })


//2.TDD - 'suite' and 'test'
const {suite, test,setup,teardown,suiteSetup,suiteTeardown} = require ('mocha')

suite('TDDSuite', ()=>{
    
    suiteSetup( ()=>{
        console.log('one suitesetup');
    });
    suiteTeardown( ()=>{
        console.log('one suiteTeardown');
    });
    setup( ()=>{
        console.log('one Setup');
    });
    teardown( ()=>{
        console.log('one teardown');
    });
    test('add(6,3) should return 9', ()=>{
        console.log('one test');
    });

})


