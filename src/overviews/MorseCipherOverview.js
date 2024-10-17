import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Morse Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Morse Cipher is a substitution cipher where each letter of the
        plaintext is replaced by a series of dots and dashes (Morse code).
        Spaces are used to separate letters and slashes separate words.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>Convert each letter to its Morse code equivalent:</Text>
      <Text>- H: ....</Text>
      <Text>- E: .</Text>
      <Text>- L: .-..</Text>
      <Text>- O: ---</Text>
      <Text>- Space: /</Text>
      <Text>- W: .--</Text>
      <Text>- O: ---</Text>
      <Text>- R: .-.</Text>
      <Text>- L: .-..</Text>
      <Text>- D: -..</Text>
      <Text>Combine Morse codes into a single message:</Text>
      <Text>.... . .-.. .-.. --- / .-- --- .-. .-.. -..</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://th.bing.com/th/id/OIP.jlk1dFqGHoysGrvYIpV0dAHaE7?rs=1&pid=ImgDetMain" />
        <Image src="https://th.bing.com/th/id/OIP.bv9hGoA3MwKiyt6Q_NCXfQAAAA?rs=1&pid=ImgDetMain" width={300} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Morse_code"
        target="_blank"
      >
        Wikipedia - Morse Code
      </Link>
      <Link href="https://www.example.com/morse-cipher-explained" target="_blank">
        Example.com - Morse Cipher Explained
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
