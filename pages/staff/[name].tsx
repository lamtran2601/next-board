import {
  Box, Icon, SimpleGrid, useColorModeValue,
} from '@chakra-ui/react';
// Assets
// Custom components
import Info from 'components/card/Info';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import LanguageTable from 'components/LanguageTable';
import { useRouter } from 'next/router';
import React from 'react';
import { MdAddTask, MdBarChart, MdCode } from 'react-icons/md';
import { RiGitMergeLine } from 'react-icons/ri';
import Banner from './components/Banner';
import GeneralInformation from './components/GeneralInformation';
import WeekActivity from './components/WeekActivity';
import { columnsLanguage } from './variables/columnsData';
import detailsData from './variables/detailsData.json';

export default function StaffDetails() {
  const router = useRouter();
  const { name } = router.query;

  const profile = detailsData.find((item: any) => item.name === name);
  const { programLanguages = {} } = profile || {};
  const languageData = Object.keys(programLanguages).map((key) => ({ language: key, skill: (programLanguages as any)[key] }));

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '20px' }}>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        gap="20px"
        mb="20px"
      >
        <Banner
          gridArea="1 / 1 / 2 / 2"
          banner="/img/auth/banner.png"
          {...profile}
        />
        <GeneralInformation
          gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }}
          pe="20px"
          profile={profile}
        />
        <LanguageTable
          columnsData={columnsLanguage}
          tableData={languageData}
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 2,
          lg: 3,
          '2xl': 6,
        }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={(
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={(
                <Icon
                  w="32px"
                  h="32px"
                  as={MdBarChart}
                  color={brandColor}
                />
                  )}
            />
              )}
          name="Commits"
          value="1040"
        />
        <MiniStatistics
          growth="+23%"
          name="Line of Code"
          value="5074"
          startContent={(
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="28px" h="28px" as={MdCode} color="white" />}
            />
              )}
        />
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
              icon={(
                <Icon
                  w="32px"
                  h="32px"
                  as={RiGitMergeLine}
                  color={brandColor}
                />
                  )}
            />
              )}
          name="Pull Request"
          value="105"
        />
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        gap="20px"
        mb="20px"
      >
        <WeekActivity />
      </SimpleGrid>
    </Box>
  );
}
