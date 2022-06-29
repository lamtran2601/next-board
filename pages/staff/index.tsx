import { Box } from '@chakra-ui/react';
import StaffTable from 'components/StaffTable';
import React from 'react';
import {
  columnsDataComplex,
} from './variables/columnsData';
import tableDataComplex from './variables/tableDataComplex.json';

export default function Staff() {
  return (
    <Box>
      <StaffTable
        columnsData={columnsDataComplex}
        tableData={tableDataComplex}
      />
    </Box>
  );
}
