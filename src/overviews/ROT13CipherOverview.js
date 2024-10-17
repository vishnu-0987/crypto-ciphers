import React from "react";
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>ROT13 Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The ROT13 cipher is a simple substitution cipher where each letter in
        the plaintext is shifted by 13 places. It is its own inverse, meaning
        applying ROT13 to an encrypted message will decrypt it.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>
        Encrypt the message "HELLO" using ROT13:
      </Text>
      <Text>
        - H (shifted by 13) = U
      </Text>
      <Text>
        - E (shifted by 13) = R
      </Text>
      <Text>
        - L (shifted by 13) = Y
      </Text>
      <Text>
        - O (shifted by 13) = B
      </Text>
      <Text>
        Encrypted message: "URYYB"
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/ROT13" target="_blank">
        Wikipedia - ROT13
      </Link>
      <Link
        href="https://www.rot13.com/"
        target="_blank"
      >
        ROT13.com - ROT13 Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
