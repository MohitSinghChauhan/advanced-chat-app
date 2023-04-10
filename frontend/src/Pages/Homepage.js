import React from 'react';
import {
  Center,
  Container,
  Heading,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const Homepage = () => {
  return (
    <Container
      bgColor="white"
      mt={'100px'}
      px={'30px'}
      py="10px"
      borderRadius="30px"
    >
      <Center>
        <Heading color="black" mt="30px">
          Devil Messages
        </Heading>
      </Center>
      <Center mt="4px">
        <Text color="black">Chat to the Devil, Be ready to get Punish.</Text>
      </Center>

      <Tabs variant="soft-rounded" colorScheme="red" mt="40px">
        <TabList>
          <Tab width="50%"  _hover={{bg:'red', color:'white'}} >Login</Tab>
          <Tab width="50%"  _hover={{bg:'red', color:'white'}}>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Homepage;
