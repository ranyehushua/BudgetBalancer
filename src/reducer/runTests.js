import {testIncome} from './income';
import {testExpense} from './expense';
import {testUser} from './user';

const runTests = () => {
  testIncome();
  testExpense();
  testUser();
}

export default runTests;
