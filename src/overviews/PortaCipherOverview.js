import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Porta Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Porta Cipher is a polyalphabetic substitution cipher that uses two keyword alphabets to encrypt and decrypt messages. It is similar to the Vigenère cipher but uses a different method to generate the key stream.
      </Text>
      <Text>
        Encryption involves using two keywords (primary and secondary), converting each character to a numerical value, and applying a modular addition to shift characters in the alphabet.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>
        Example of using Porta Cipher:
      </Text>
      <Text>
        Primary Key: "KEY"
      </Text>
      <Text>
        Secondary Key: "WORD"
      </Text>
      <Text>
        Message: "HELLO"
      </Text>
      <Text>
        Encrypted message: "RIJVS"
      </Text>
      <Text>
        Decryption reverses the process using the same keys to recover the original message.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Porta_cipher" target="_blank">
        Wikipedia - Porta Cipher
      </Link>
      <Link href="https://crypto.interactive-maths.com/porta-cipher.html" target="_blank">
        Interactive Maths - Porta Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
