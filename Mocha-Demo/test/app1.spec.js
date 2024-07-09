const {areaofcircle} = require('../src/app1')

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

//1.BDD Describe and it
describe('AreaofcircleSuite', ()=>{
    it('areaofcircle(5) should return 78.53981633974483', ()=>{
        expect(areaofcircle(5)).to.be.equal(78.53981633974483);
    })
})