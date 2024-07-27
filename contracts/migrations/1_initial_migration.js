const DigitalEvidenceContract = artifacts.require("DigitalEvidenceContract");

module.exports = function (deployer){
    deployer.deploy(DigitalEvidenceContract);
};