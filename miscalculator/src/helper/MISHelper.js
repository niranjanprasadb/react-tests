export default class MISHelper {

  formatAge(ageLabel) {
    let NoUnderScoreAgeLabel = this.replaceUnderScore(ageLabel);
    return this.captilizeFirst(NoUnderScoreAgeLabel);

  }
  replaceUnderScore(ageLabel) {
    return ageLabel.replace('_', " ");
  }

  captilizeFirst(ageLabel) {
    return ageLabel[0].toUpperCase() + ageLabel.slice(1);
  }

  calculateSavings(incomes, expenditures){
    let sumOfIncomes = 0, sumOfExpenditures = 0;

    incomes.forEach(income => {
      sumOfIncomes = sumOfIncomes + (income.amount/12);
    })
    expenditures.forEach(expenditure => {
      sumOfExpenditures = sumOfExpenditures + expenditure.amount;
    })
    return (sumOfIncomes - sumOfExpenditures);
    }
}
