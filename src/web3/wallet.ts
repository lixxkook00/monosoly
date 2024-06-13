const Web3 = require('web3');

let web3: typeof Web3 | undefined;

export const connectWalet = async () => {
  if ((window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
    try {
        // Request account access if needed
        await (window as any).ethereum.enable();
        // Acccounts now exposed
        const accounts = await web3.eth.getAccounts();
        return accounts[0]; // return the first account
    } catch (error) {
        // User denied account access...
        console.error("User denied account access")
    }
  } else if ((window as any).web3) {
      // Legacy dapp browsers...
      web3 = new Web3((window as any).web3);
      console.log("Injected web3 detected.");
      const accounts = await web3.eth.getAccounts();
      return accounts[0]; // return the first account
  } else {
      // Non-dapp browsers...
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}