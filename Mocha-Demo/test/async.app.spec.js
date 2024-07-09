//const expect = require('chai').expect
const axios = require('axios') // Required For API Testing

let expect;
(async ()=>{
    const chai = await import('chai'); // importing chai explicitly
    expect = chai.expect;
})();

describe('async test suite',()=>{
    it('promised based way',function(){

            return axios.get('https://reqres.in/api/users?page=2').then(res =>{
                expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres.in')
                expect(res.data.data[1].id).to.be.equal(8)
            })


    })



    it('Done based way',(done)=>{
        axios.get('https://reqres.in/api/users?page=2').then(res =>{
            expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')
            done()
        }).catch(err =>{
            done(err)
        })
  })
    it('Aysnc await based way',async ()=>{
        const res = await axios.get('https://reqres.in/api/users?page=2')
        expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')


        


    })

})
