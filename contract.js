'use strict';

import { Contract } from 'fabric-contract-api';
class CertNetContract extends Contract {

  constructor() {
    super('certnet');

  }

  // Instantiate
  async instantiate(ctx) {
    console.log('Chaincode deployed successfully')
  }

  // Create Student
  async createStudent(ctx, studentId, name, email) {
    // Composite key
    const studentKey = ctx.stub.createCompositeKey('certnet.student', [studentId])
    const newStudent = {
      docType: 'student',
      studentId,
      name,
      email,
      school: ctx.clientIdentity.getID(),
      createdAt: ctx.stub.getTxTimestamp(),
      updatedAt: ctx.stub.getTxTimestamp(),
    }
    const studentBuffer = Buffer.from(JSON.stringify(newStudent));

    await ctx.stub.putState(studentKey, studentBuffer);

    return newStudent;

  }

  // Get Student
  async getStudent(ctx, studentId) {
    const studentKey = ctx.stub.createCompositeKey('certnet.student', [studentId])
    const studentBuffer = await ctx.stub.getState(studentKey);

    if (studentBuffer) {
      return JSON.parse(studentBuffer.toString());
    }

    return `Asset with key ${studentId} does not exists on the network`;
  }

  // Issue Certificate


  // Verify Certificate
}

module.exports = CertNetContract;