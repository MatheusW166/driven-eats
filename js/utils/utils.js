function moneyToNumber(numberText) {
  const text = numberText.split(" ")[1].replace(",", ".");
  return parseFloat(text);
}

function numberToMoney(number, useComma = true) {
  const formated = number.toFixed(2);
  const formatedText = (useComma) ? formated.replace(".", ",") : formated;
  return `R$ ${formatedText}`;
}

export { numberToMoney, moneyToNumber };