const form = document.getElementById('loanForm');
const loanRequestsDiv = document.getElementById('loanRequests');
const scoreOutput = document.getElementById('scoreOutput');

let loanRequests = [];

function generateCreditScore() {
  return Math.floor(Math.random() * 100) + 1;
}

function renderLoans() {
  loanRequestsDiv.innerHTML = '';
  if (loanRequests.length === 0) {
    loanRequestsDiv.innerHTML = '<p>No loan requests yet.</p>';
    return;
  }

  loanRequests.forEach(loan => {
    const div = document.createElement('div');
    div.className = 'loan-card';
    div.innerHTML = `
      <strong>Wallet:</strong> ${loan.wallet}<br/>
      <strong>Amount:</strong> ${loan.amount} USDC<br/>
      <strong>Score:</strong> ${loan.score}<br/>
      <strong>Reason:</strong> ${loan.reason || 'N/A'}<br/>
    `;
    loanRequestsDiv.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const wallet = document.getElementById('wallet').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const score = generateCreditScore();

  const loan = { wallet, amount, reason, score };
  loanRequests.unshift(loan);

  scoreOutput.innerText = `Your decentralized credit score is: ${score}`;
  form.reset();
  renderLoans();
});
