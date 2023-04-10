import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Stack,
} from '@chakra-ui/react';
import ColoredLine from '../ColoredLine';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
      <ColoredLine />

      
      <Stack spacing="4" my="20px">

        <FormControl id="first-name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            border="1px"
            borderColor="gray.400"
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Your Email</FormLabel>
          <Input
            border="1px"
            borderColor="gray.400"
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>

          <InputGroup>
            <Input
              border="1px"
              borderColor="gray.400"
              pr="4.5rem"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button

          type="submit"
          bg="#FED7D7"
          _hover={{ bg: 'red', color: 'white' }}
          color="#9B2C2C"
        >
          Login
        </Button>

      </Stack>
    </>
  );
};

export default Login;
