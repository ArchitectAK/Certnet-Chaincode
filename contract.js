'use strict';

import { Contract } from 'fabric-contract-api';
class CertNetContract extends Contract {

  constructor() {
    super('certnet');

  }

  // Instantiate
  async instantiate(ctx){
    console.log('Chaincode deployed successfully')
  }

  // Create Student
  // Get Student
  // Issue Certificate
  // Verify Certificate
}

module.exports = CertNetContract;