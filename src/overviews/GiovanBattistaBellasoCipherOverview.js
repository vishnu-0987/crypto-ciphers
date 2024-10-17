import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Giovan Battista Bellaso Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Giovan Battista Bellaso Cipher is a polyalphabetic substitution cipher
        technique, similar to the Vigenère cipher, where each letter in the plaintext
        is shifted cyclically based on a keyword. This method increases security by
        varying the shift value for different positions in the plaintext message.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Choose a keyword (key): SECRET.</Text>
      <Text>
        Encrypt the message by shifting each letter of the plaintext by the
        corresponding letter in the keyword, wrapping around when necessary.
      </Text>
      <Text>Example:</Text>
      <Text>- Plaintext: H, Keyword: S</Text>
      <Text>- Shift: (S - A = 18)</Text>
      <Text>- Encrypted: X (H shifted by 18 positions)</Text>
      
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: XEMMKZVXZUA
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Giovan_Battista_Bellaso"
        target="_blank"
      >
        Wikipedia - Giovan Battista Bellaso
      </Link>
      <Link
        href="https://www.example.com/bellaso-cipher-reference.html"
        target="_blank"
      >
        Example.com - Bellaso Cipher Reference
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
