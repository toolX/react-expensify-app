// GET_TOTAL_EXPENSES
export default (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, current) => sum + current, 0);
};
