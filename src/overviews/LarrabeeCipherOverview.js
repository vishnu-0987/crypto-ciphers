import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Larabee Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Larabee Cipher is a substitution cipher that uses a keyword to shift
        letters of the plaintext message. It operates by adding the positions of
        the letters of the keyword to the corresponding positions of the
        plaintext message, modulo 26. This method effectively scrambles the
        message according to the keyword, offering a simple form of encryption.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Choose a keyword (key): SECRET.</Text>
      <Text>
        Create a repeated keyword until it matches the plaintext message length:
        SECRET.
      </Text>
      <Text>
        For each letter in the plaintext message, find its corresponding letter
        in the keyword. Use this letter's position in the alphabet (0-based
        indexing) as the shift value for the Larabee Cipher.
      </Text>
      <Text>Encrypt the plaintext letter using the Larabee Cipher with the derived shift value.</Text>
      <Text>Example:</Text>
      <Text>- Plaintext: H (position 7)</Text>
      <Text>- Keyword: S (position 18)</Text>
      <Text>
        - Shift value: 7 (plaintext letter position) + 18 (keyword letter
        position) = 25
      </Text>
      <Text>- Encrypted: X (H shifted by 25 positions)</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://example.com/larabee_cipher_example.jpg" />
        <Image
          src="https://example.com/larabee_cipher_example.jpg"
          width={300}
        />
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: XEQTYPH.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Substitution_cipher#Larabee_cipher"
        target="_blank"
      >
        Wikipedia - Larabee Cipher
      </Link>
      <Link
        href="https://www.example.com/larabee-cipher-explained"
        target="_blank"
      >
        Example.com - Larabee Cipher Explained
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
