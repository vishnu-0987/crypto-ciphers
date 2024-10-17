import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>ROT47 Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The ROT47 Cipher is a simple text encryption technique that shifts ASCII
        printable characters by 47 positions. It's a stronger version of ROT13,
        ensuring that all printable ASCII characters are rotated.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>For ROT47, every ASCII printable character is shifted by 47 positions.</Text>
      <Text>Encoding with ROT47 shifts characters forward in the ASCII table.</Text>
      <Text>Decoding with ROT47 is the reverse process.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
               <Image src="https://rot47.net/_images/rot47.jpg" width={300} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/ROT13"
        target="_blank"
      >
        Wikipedia: ROT47 Cipher
      </Link>
      <Link
        href="https://example.com/rot47-reference"
        target="_blank"
      >
        https://example.com/rot47-reference
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };