# Decentralized Peer-to-Peer Lending & Borrowing Platform

A blockchain-based **peer-to-peer lending and borrowing system** that eliminates the need for intermediaries.  
Users can securely lend or borrow digital assets, while an **on-chain credit scoring system** ensures fair and transparent evaluation of borrower reliability.

This project was built as a **Web3 Build-A-thon hackathon prototype** to demonstrate how decentralized finance (DeFi) can make lending more secure, data-driven, and accessible.

---

## Features

- **MetaMask Authentication**  
  Seamless wallet-based login using MetaMask for secure decentralized access.

- **Lending & Borrowing**  
  Users can post loan requests or fund others’ loans using smart contracts on Ethereum.

- **On-Chain Credit Scoring**  
  A FICO-style system that scores users based on:
  - Repayment history  
  - Total amount repaid  
  - Number of defaults  
  - Credit history length  

- **Secure Smart Contracts**  
  All loan operations (creation, funding, repayment) are handled via Ethereum smart contracts, ensuring transparency and immutability.

- **Responsive Frontend**  
  Clean, user-friendly HTML/CSS/JS interface compatible with desktop and mobile devices.

---

##  Smart Contract Overview

### `P2PLending.sol`
Located in the `contracts/` folder, this Solidity smart contract manages all lending operations on-chain.

#### Key Functions:
| Function | Description |
|-----------|--------------|
| `askLoan(uint256 amount, uint256 interest, uint256 duration)` | Allows a borrower to request a new loan |
| `fund(uint256 loanId)` | Enables a lender to fund a specific loan request |
| `repay(uint256 loanId)` | Lets a borrower repay their funded loan with interest |
| `checkLoanStatus(uint256 loanId)` | Allows lenders to check if a borrower defaulted |
| `getCreditScore(address user)` | Returns the calculated on-chain credit score |

#### Events:
- `LoanCreated` – emitted when a borrower posts a new loan  
- `LoanFunded` – emitted when a loan is funded  
- `LoanPaidBack` – emitted when a loan is successfully repaid  
- `CreditScoreUpdated` – emitted when a borrower’s credit score changes  

#### Credit Scoring Formula:
The contract dynamically updates credit scores between **300–850**, considering:
- On-time repayments  
- Total amount repaid  
- Credit history length  
- Default ratio  

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Blockchain Interaction** | Web3.js / Ethers.js |
| **Smart Contract** | Solidity (Ethereum Testnet) |
| **Wallet Integration** | MetaMask |

---


---

##  MetaMask Integration

This dApp connects directly to the user’s **MetaMask wallet** for blockchain authentication and transaction signing.

### How to Connect:
1. Install the [MetaMask extension](https://metamask.io/download.html)  
2. Switch to the **Ethereum Sepolia Test Network** (or local Hardhat network)  
3. Open `index.html` in your browser  
4. When prompted, click “Connect Wallet”  
5. Once connected, you can lend, borrow, or view your credit score directly on-chain

---

##  Deployment

### To Deploy the Smart Contract:
1. Go to [Remix IDE](https://remix.ethereum.org)  
2. Create `P2PLending.sol` and paste the contract code  
3. Compile with **Solidity 0.8.19**  
4. Deploy using **Injected Provider (MetaMask)**  
5. Copy the **deployed contract address**  
6. Add it to your `scripts/contract.js` file in the frontend
