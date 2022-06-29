import { Box } from '@chakra-ui/react';
import React from 'react';
import StaffTable from './components/StaffTable';
import {
  columnsDataComplex,
} from './variables/columnsData';
import tableDataComplex from './variables/tableDataComplex.json';

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box>
      <StaffTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
    </Box>
  );
}
