import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Null Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        A Null Cipher is a form of steganography where the plaintext message is
        hidden within a larger text, which appears to be innocent or unrelated.
        The true message can be extracted by selecting certain characters from
        the larger text, often using a predefined pattern or key.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: MEET AT NOON.</Text>
      <Text>Embed each letter in a cover message:</Text>
      <Text>
        For example, "My Eagles Eat Tacos At Night On October Nights."
      </Text>
      <Text>
        The first letter of each word in the cover message spells out the
        plaintext message: MEET AT NOON.
      </Text>
      <Text>Encrypt the entire message by embedding the letters.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://media.geeksforgeeks.org/wp-content/uploads/Null-Cipher.png" width={500} />
      </Flex>
      <Text>
        Following this process, the encrypted message might look like: "My
        Eagles Eat Tacos At Night On October Nights."
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Null_cipher"
        target="_blank"
      >
        Wikipedia - Null Cipher
      </Link>
      <Link
        href="https://www.explainxkcd.com/wiki/index.php/Null_Cipher"
        target="_blank"
      >
        Explain XKCD - Null Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
