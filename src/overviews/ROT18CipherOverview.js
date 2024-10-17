import React from "react";
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>ROT18 Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The ROT18 cipher is a simple substitution cipher similar to ROT13,
        where each letter in the plaintext is shifted by 18 places. It is its
        own inverse, meaning applying ROT18 to an encrypted message will decrypt
        it.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>
        Encrypt the message "HELLO" using ROT18:
      </Text>
      <Text>
        - H (shifted by 18) = Z
      </Text>
      <Text>
        - E (shifted by 18) = B
      </Text>
      <Text>
        - L (shifted by 18) = T
      </Text>
      <Text>
        - O (shifted by 18) = A
      </Text>
      <Text>
        Encrypted message: "ZBTTA"
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://example.com/rot18" target="_blank">
        More about ROT18
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
