import {testIncome} from './income';
import {testExpense} from './expense';
import {testUser} from './user';
import {testSavings} from './savings';

const runTests = () => {
  testIncome();
  testExpense();
  testSavings();
  testUser();
}

export default runTests;
