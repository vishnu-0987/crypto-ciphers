import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Nihilist Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Nihilist Cipher is a polyalphabetic substitution cipher that extends
        the concept of the Polybius square by using a keyword-generated square
        and numerals for encryption. It operates by converting plaintext into
        pairs of coordinates on the key square, then encoding them into numbers.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Choose a keyword (key): CRYPTO.</Text>
      <Text>
        Generate a key square based on the keyword, ensuring no repetitions and
        treating 'J' as 'I'. For example, with keyword CRYPTO, the square might
        look like this:
        <br />
        C R Y P T
        <br />
        O A B D E
        <br />
        F G H I K
        <br />
        L M N Q S
        <br />
        U V W X Z
      </Text>
      <Text>
        Convert each letter of the plaintext to its corresponding coordinates on
        the key square. For example, 'H' becomes (3, 3).
      </Text>
      <Text>
        Encrypt each pair of coordinates by converting them to their respective
        numbers. For (3, 3), the corresponding number might be 33.
      </Text>
      <Text>
        Example:
        <br />
        - Plaintext: H (coordinates 3, 3)
        <br />
        - Encrypted: 33 (H encrypted to 33)
      </Text>
      <Flex
        wrap="wrap"
        justify="center"
        gap={10}
        style={{ margin: 20 }}
      >
        <Image src="https://example.com/nihilist-cipher-image1.jpg" />
        <Image src="https://example.com/nihilist-cipher-image2.jpg" width={300} />
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        might become: 3313311333 1221 3334 1121.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link href="https://en.wikipedia.org/wiki/Nihilist_cipher" target="_blank">
        Wikipedia - Nihilist Cipher
      </Link>
      <Link href="https://www.cryptool.org/en/cto-highlights/nihilist" target="_blank">
        CryptoTool - Nihilist Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
