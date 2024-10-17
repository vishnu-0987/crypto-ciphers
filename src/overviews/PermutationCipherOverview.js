import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Permutation Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Permutation Cipher is a transposition cipher that uses a key to rearrange the characters in the plaintext. Each character in the key represents a column index, and the columns are rearranged based on the alphabetical order of the key.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>Encrypt the message "HELLO" with the key "KEY".</Text>
      <Text>Fill the grid column-wise according to the key:</Text>
      <Text>
        <pre>
          K E Y<br />
          1 2 3<br />
          H E L<br />
          L O _
        </pre>
      </Text>
      <Text>Read off the columns in the order determined by the sorted key: "EHKOL".</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://www.researchgate.net/profile/Albert-Carlson/publication/349064680/figure/fig5/AS:988004936069121@1612570141272/Permutation-Cipher.jpg" width={500} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Permutation_cipher" target="_blank">
        Wikipedia - Permutation Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
