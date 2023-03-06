import React from 'react';

import {Transaction} from "../Components/Transaction/Transaction";
import {Status} from "../Enum/Status";


export const TransactionsMock: Transaction[] = [
  new Transaction(
      'b66c3886-4349-4c78-b4c5-b6e508e700ea',
      '7f453892-dd1e-4bff-87c5-6a30ad509982',
      100,
      100,
      new Date(2023,3,3,18,2,1,1),
      "123e4567-e89b-42d3-a456-556642440000",
      Status.PENDING
  ),
  new Transaction(
      'b66c3886-4349-4c78-b4c5-b6e508e700ea',
      '7f453892-dd1e-4bff-87c5-6a30ad509983',
      123,
      122,
      new Date(2023,3,4,12,3,1,1),
      "123e4567-e89b-42d3-a456-556642440001",
      Status.PENDING
  ),
];
