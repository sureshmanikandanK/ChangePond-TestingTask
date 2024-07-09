
//const expect = require ('chai').expect

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();



describe('Hookssuite 1', ()=>{
    before(()=>{
        console.log('before')
    });

    after(()=>{
        console.log('after')
    });
    beforeEach(()=>{
        console.log('beforeEach')
    });
    afterEach(()=>{
        console.log('afterEach')
    });




})