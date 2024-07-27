const DigitalEvidenceContract = artifacts.require("DigitalEvidenceContract")

contract("DigitalEvidenceContract", () => {
    
    before (async() => {
        this.deContract = await DigitalEvidenceContract.deployed()
    })
//--describir que va hacer la funcion - test
    it('Deployed successfully', async() => {
        const address = this.deContract.address

        assert.notEqual(address,null) //no es igual
        assert.notEqual(address,undefined) 
        assert.notEqual(address,0x0) 
        assert.notEqual(address,"") 
    })

    it('get Digital Evidence CoC List successfully', async() =>{
        const deCounter = await this.deContract.nextId();
        const record = await this.deContract.recordsEvidence(deCounter - 1);
        console.log(record.id.toNumber());
        
        assert.equal(record.id.toNumber(), deCounter-1);
    })

    it("created Evidence successfully", async() => {
        const response = await this.deContract.createEvidence("Estudiante","Codigo", 777, 
            "Luis", "Ortega", 333,"p@p.co", "01/01/3000")
        const recordEvent = response.logs[0].args;
        const deCounter = await this.deContract.nextId();

        assert.equal(deCounter,2);
        assert.equal(recordEvent.id.toNumber(),2);
        assert.equal(recordEvent.identification.toNumber(),777);
    })  

    it("change Status Evidence", async() => {
        const response = await this.deContract.changeStatus(1);
        const statusEvent = response.logs[0].args;
        const evidence = await this.deContract.recordsEvidence(1);

        //console.log(evidence.verified);
        //console.log(statusEvent.verified);
        assert.equal(evidence.verified,true);
        assert.equal(statusEvent.id,1);
        assert.equal(statusEvent.verified,true);      
    }) 
})