import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Hex Code Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Hex Code Cipher is a simple method of encoding a message by converting each character to its hexadecimal representation. Each character in the text is replaced by its corresponding hex code, making it a type of substitution cipher.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Convert each character to its hexadecimal code.</Text>
      <Text>H becomes 48 (hex code for H).</Text>
      <Text>E becomes 45 (hex code for E).</Text>
      <Text>L becomes 4C (hex code for L).</Text>
      <Text>L becomes 4C (hex code for L).</Text>
      <Text>O becomes 4F (hex code for O).</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
       
        <Image
          src="https://thumbs.dreamstime.com/b/green-hexadecimal-code-running-up-computer-screen-65345387.jpg"
          width={300}
        />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Hexadecimal"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Hexadecimal
      </Link>
      <Link
        href="https://www.geeksforgeeks.org/hexadecimal-number-system/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/hexadecimal-number-system/
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
