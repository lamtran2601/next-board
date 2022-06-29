import React from 'react';

// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import Image from 'next/image';

export const SidebarBrand = () => {
  //   Chakra color mode
  const logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align="center" direction="column">
      <Image src="/logo.png" alt="Underdog Logo" width={300} height={120} />
      <HSeparator mb="20px" />
    </Flex>
  );
};

export default SidebarBrand;
