const calculate = () => {
  let p = parseFloat(document.getElementById("principal").value);
  let r = parseFloat(document.getElementById("rate").value);
  let t = parseFloat(document.getElementById("time").value);
  let simpleInterest = (p * r * t) / 100;
  let amount = p + simpleInterest;

  let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};