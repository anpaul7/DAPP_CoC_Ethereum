App = {

    //funtion init
    init: () =>{
        console.log("DAPP CoC Digital Evidence Udenar");
        App.loadEthereum();
    },

    loadEthereum: async() => {
        
        if (window.ethereum) {
            App.web3Provider = window.ethereum;
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Red Ethereum loaded");
        }else{
            console.log("No Red Ethereum is installed");
        }
    }
}

App.init()