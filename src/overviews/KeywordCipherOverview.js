import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Keyword Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Keyword Cipher is a substitution cipher where each letter of the
        plaintext is mapped to a different letter based on a keyword. It's a
        form of polyalphabetic substitution cipher.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: THE QUICK BROWN FOX.</Text>
      <Text>Choose a keyword, for example, "KEYWORD".</Text>
      <Text>Remove duplicate letters and arrange them alphabetically:</Text>
      <Text>Keyword "KEYWORD" -- Remove duplicates -- "DEKORWY".</Text>
      <Text>
        Create a cipher alphabet by mapping each letter of the alphabet to the
        corresponding letter in the keyword (after removing duplicates).
      </Text>
      <Text>
        Encrypt the plaintext by substituting each letter with its corresponding
        letter in the cipher alphabet.
      </Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://th.bing.com/th/id/OIP.gYvZOYbrrBWP9OBYrJY4RwAAAA?rs=1&pid=ImgDetMain" width={500} />
      </Flex>
      <Text>
        The encrypted message might look like: "DEK RWY BNMZV PLAWX WJDGE".
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link href="https://en.wikipedia.org/wiki/Keyword_cipher" target="_blank">
        Wikipedia - Keyword Cipher
      </Link>
      <Link href="https://www.geeksforgeeks.org/keyword-cipher/" target="_blank">
        GeeksforGeeks - Keyword Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
