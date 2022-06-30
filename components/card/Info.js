// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card.js';
// Assets
import React from 'react';

export default function Info(props) {
  const {
    avatar, name, info, skill, hardWorking, workingTime, description = '',
  } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  return (
    <Card p="20px">
      <SimpleGrid columns={2} gap={4}>
        <Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
          <Image
            src={avatar}
            w={{ base: '100%', '3xl': '100%' }}
            h={{ base: '100%', '3xl': '100%' }}
            borderRadius="20px"
          />
        </Box>
        <Box columnGap={5}>
          <Text
            color={textColor}
            fontWeight="bold"
          >
            {name}
          </Text>
          {' '}
          <Text
            color="secondaryGray.600"
            fontWeight="400"
          >
            {info}
          </Text>
          <Text
            color="secondaryGray.600"
            fontWeight="400"
          >
            {workingTime}
          </Text>
          {description.split('\n').map((e) => (
            <Text
              color="secondaryGray.600"
              fontWeight="400"
            >
              {e}
            </Text>
          ))}
        </Box>
      </SimpleGrid>
    </Card>
  );
}
