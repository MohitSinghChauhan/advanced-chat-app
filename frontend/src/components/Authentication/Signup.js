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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState('');

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

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

        <FormControl id="confirm-password" isRequired>
          <FormLabel>Confirm Password</FormLabel>

          <InputGroup>
            <Input
              border="1px"
              borderColor="gray.400"
              pr="4.5rem"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Enter password again"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowConfirmPassword}>
                {showConfirmPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="image">
          <FormLabel>Upload Your Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            p={1}
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </FormControl>

        <Button
          type="submit"
          bg="#FED7D7"
          _hover={{ bg: 'red', color: 'white' }}
          color="#9B2C2C"
        >
          Sign Up
        </Button>
      </Stack>
    </>
  );
};

export default Signup;
