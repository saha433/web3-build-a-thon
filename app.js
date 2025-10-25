const contractAddress = "0x6eb2e02c7cf3db12edf0896426d4978de1d98b7e";
const contractABI = [
  {
    "inputs": [],
    "name": "getCreditScore",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "askLoan",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fund",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "repay",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

let signer;
let contract;

async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed!");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const userAddress = await signer.getAddress();

    document.getElementById("userAddress").innerText = `Connected: ${userAddress}`;
    document.getElementById("connectWallet").disabled = true;

    contract = new ethers.Contract(contractAddress, contractABI, signer);

     // const score = await contract.getCreditScore();
     // document.getElementById("creditScore").innerText = `Your Credit Score: ${score}`;
  } catch (err) {
    alert("Wallet connection failed: " + (err?.message || "Unknown error"));
    console.error("Detailed error:", err);
  }
}

// Check connection on page load
window.addEventListener("load", async () => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    if (accounts.length > 0) {
      signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      document.getElementById("userAddress").innerText = `Connected: ${userAddress}`;
      document.getElementById("connectWallet").disabled = true;

      contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const score = await contract.getCreditScore();
        document.getElementById("creditScore").innerText = `Your Credit Score: ${score}`;
      } catch (err) {
  console.warn("Could not fetch credit score on load:", err.message);
  console.error("Detailed error on load:", err);
}

    }
  }
});

document.getElementById("connectWallet")?.addEventListener("click", connectWallet);
