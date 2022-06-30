// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card.js';
import React from 'react';
import Information from './Information';

// Assets
export default function GeneralInformation(props) {
  const { profile, ...rest } = props;
  const { description = '', skillSet = {} } = profile || {};
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );
  return (
    <Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Skill set
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        {description}
      </Text>
      <SimpleGrid columns="2" gap="20px">
        {Object.keys(skillSet).map((key) => (
          <Information
            boxShadow={cardShadow}
            title={key}
            value={skillSet[key].join(', ')}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
}
