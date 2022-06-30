import { Box } from '@chakra-ui/react';
import StaffTable from 'components/StaffTable';
import { useRouter } from 'next/router';
import React from 'react';
import {
  columnsDataComplex,
} from './variables/columnsData';
import tableData from './variables/tableData.json';

export default function Staff() {
  const router = useRouter();
  return (
    <Box>
      <StaffTable
        columnsData={columnsDataComplex}
        tableData={tableData}
        onCellClick={(cell: any, row: any) => {
          router.push(`/staff/${row.name}`);
        }}
      />
    </Box>
  );
}
