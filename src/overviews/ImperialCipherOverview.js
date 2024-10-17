import React from 'react';
import { Typography, Image, Flex } from 'antd';

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Imperial Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Imperial Cipher is a substitution cipher where each letter of the
        plaintext is replaced with its corresponding reverse alphabetical
        letter. For example, A is replaced with Z, B with Y, and so forth.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Convert each letter using the Imperial Cipher mapping:</Text>
      <Text>H becomes S, E becomes V, L becomes O, O becomes L, etc.</Text>
      <Text>Encrypt the entire message using the Imperial Cipher mapping.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        
      </Flex>
      <Text>Following this process, the encrypted message might look like: SVOOL DLIOW.</Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link href="https://en.wikipedia.org/wiki/Substitution_cipher" target="_blank">
        Wikipedia - Substitution Cipher
      </Link>
      <Link href="https://example.com/imperial-cipher-reference" target="_blank">
        Example Reference Link
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
