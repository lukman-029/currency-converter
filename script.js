function convertCurrency() {
  let amount = Number(document.getElementById("amount").value);
  let currency = document.getElementById("currency").value;
  let direction = document.getElementById("direction").value;
  let result = document.getElementById("result");

  let usdRate = 1460; 
  let gbpRate = 1955; 
  let eurRate = 1696; 
  let ghsRate = 134;   

  if (amount <= 0 || isNaN(amount)) {
    result.textContent = " Please enter a valid amount.";
    return;
  }

  let converted = 0;
  let symbol = "";

  if (direction === "toNaira") {
    if (currency === "usd") {
      converted = amount * usdRate;
      symbol = "₦";
    } else if (currency === "gbp") {
      converted = amount * gbpRate;
      symbol = "₦";
    } else if (currency === "eur") {
      converted = amount * eurRate;
      symbol = "₦";
    } else if (currency === "ghs") {
      converted = amount * ghsRate;
      symbol = "₦";
    }

    result.textContent = " " + amount + " " + currency.toUpperCase() + " = " + symbol + converted.toFixed(2);
  } 
  else if (direction === "fromNaira") {
    if (currency === "usd") {
      converted = amount / usdRate;
      symbol = "$";
    } else if (currency === "gbp") {
      converted = amount / gbpRate;
      symbol = "£";
    } else if (currency === "eur") {
      converted = amount / eurRate;
      symbol = "€";
    } else if (currency === "ghs") {
      converted = amount / ghsRate;
      symbol = "₵";
    }

    result.textContent = " ₦" + amount + " = " + symbol + converted.toFixed(2) + " " + currency.toUpperCase();
  }
}
