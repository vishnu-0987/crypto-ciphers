import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>ROT5 Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The ROT5 Cipher is a simple numeric substitution cipher where each digit
        in a given text is replaced with a digit that is 5 positions ahead in
        the sequence (wrapping around after 9). It operates on numeric digits
        (0-9) and leaves non-numeric characters unchanged.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: 12345.</Text>
      <Text>For ROT5, each numeric digit is shifted by 5 positions.</Text>
      <Text>Encoding with ROT5 shifts digits forward in the sequence.</Text>
      <Text>Decoding with ROT5 is the reverse process.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
 
        <Image src="https://rot47.net/_images/rot5.jpg" width={300} />
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
        Wikipedia: ROT5 Cipher
      </Link>
      <Link
        href="https://example.com/rot5-reference"
        target="_blank"
      >
        https://example.com/rot5-reference
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };