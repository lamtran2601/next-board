import {
  Flex,
  Table,
  Progress,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import Card from 'components/card/Card';

export default function LanguageTable(props) {
  const {
    columnsData, tableData, onCellClick,
  } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 15;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      mb="20px"
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="24px"
          fontWeight="700"
          lineHeight="100%"
        >
          Language
        </Text>
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={`Thead-tr-${index}`}>
              {headerGroup.headers.map((column, i) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={`th-${index}-${i}`}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: '10px', lg: '12px' }}
                    color="gray.400"
                  >
                    {column.render('Header')}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={`Tbody-tr-${index}`}>
                {row.cells.map((cell, i) => {
                  const getData = () => {
                    switch (cell.column.Header) {
                      case 'AVATAR':
                        return <Image src={cell.value} alt="avatar" width="80px" height="80px" objectFit="cover" borderRadius={10} />;
                      case 'Language':
                        return cell.value.split('\n').map((value, j) => (
                          <Text
                            color={textColor}
                            fontSize={j === 0 ? 'large' : 'small'}
                            fontWeight="bold"
                            opacity={j === 0 ? 1 : 0.5}
                            textOverflow="ellipsis"
                          >
                            {value}
                          </Text>
                        ));
                      case 'Level':
                      case 'HARD WORKING':
                      case 'RELIABILITY':
                        return (
                          <Flex align="center">
                            <Progress
                              variant="table"
                              colorScheme="brandScheme"
                              h="8px"
                              w="108px"
                              value={cell.value}
                            />
                          </Flex>
                        );
                      default:
                        return cell.value;
                    }
                  };
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={`Td-${index}-${i}`}
                      fontSize={{ sm: '24px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      height="50px"
                      borderColor="transparent"
                      onClick={() => onCellClick(cell.value, row.original)}
                    >
                      {getData()}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
