function calculateSplits(totalAmount, splitType, splits, membersCount) {
  let result = {};

  if (splitType === "EQUAL") {
    const share = Math.floor(totalAmount / membersCount);
    splits.forEach(s => {
      result[s.userId] = share;
    });
  }

  if (splitType === "EXACT") {
    let sum = 0;
    splits.forEach(s => (sum += s.value));
    if (sum !== totalAmount) {
      throw new Error("Exact split does not match total amount");
    }
    splits.forEach(s => {
      result[s.userId] = s.value;
    });
  }

  if (splitType === "PERCENTAGE") {
    let percentSum = 0;
    splits.forEach(s => (percentSum += s.value));
    if (percentSum !== 100) {
      throw new Error("Percentage split must total 100%");
    }
    splits.forEach(s => {
      result[s.userId] = Math.floor((totalAmount * s.value) / 100);
    });
  }

  return result;
}

module.exports = calculateSplits;
