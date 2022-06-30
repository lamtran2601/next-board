import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
// Custom components
import Info from 'components/card/Info';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { useRouter } from 'next/router';
import React from 'react';
import {
  MdAddTask,
  MdBarChart,
} from 'react-icons/md';
import { RiGitMergeLine } from 'react-icons/ri';
import WeekActivity from './components/WeekActivity';
import WeeklyRevenue from './components/WeeklyRevenue';
import tableData from './variables/tableData.json';

export default function StaffDetails() {
  const router = useRouter();
  const { name } = router.query;

  // eslint-disable-next-line import/no-dynamic-require
  const profile = tableData.find((item: any) => item.name === name);
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '20px' }}>
      <SimpleGrid
        columns={{
          base: 1, md: 2,
        }}
        gap="20px"
        mb="20px"
      >
        <SimpleGrid
          columns={{
            base: 1, md: 2,
          }}
          gap="20px"
        >
          <Info
            name={profile?.name}
            author={profile?.info.split('\n')[1]}
            image={profile?.avatar}
          />
          <SimpleGrid
            columns={{
              base: 1, md: 1, lg: 1,
            }}
            gap="20px"
          >
            <MiniStatistics
              startContent={(
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
                />
          )}
              name="Commits"
              value="1040"
            />
            <MiniStatistics growth="+23%" name="Line of Code" value="5074" />
            <MiniStatistics
              startContent={(
                <IconBox
                  w="56px"
                  h="56px"
                  bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
                />
          )}
              name="Tasks"
              value="154"
            />
            <MiniStatistics
              startContent={(
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon w="32px" h="32px" as={RiGitMergeLine} color={brandColor} />
              }
                />
          )}
              name="Pull Request"
              value="105"
            />
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid columns={1} gap="20px">
          <WeekActivity />
          <WeeklyRevenue />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
