'use strict';

import { Contract } from 'fabric-contract-api';
class CertNetContract extends Contract {
  
  constructor() {
    super('certnet');

  }

}

module.exports = CertNetContract;