function moneyToNumber(numberText) {
  const text = numberText.split(" ")[1].replace(",", ".");
  return parseFloat(text);
}

function numberToMoney(number) {
  const formated = number.toFixed(2);
  const formatedText = formated.replace(".", ",");
  return `R$ ${formatedText}`;
}

export { numberToMoney, moneyToNumber };