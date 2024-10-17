// export { Header, Description, Example, References };
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Rail Fence Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Rail Fence Cipher is a transposition cipher that rearranges the
        plaintext characters by writing them in a zigzag pattern across multiple
        "rails" or rows of an imaginary fence. It encrypts by arranging
        characters in a zigzag pattern and decrypts by reading them in rows.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO WORLD.</Text>
      <Text>For Rail Fence Cipher, the text is written in a zigzag pattern.</Text>
      <Text>Encoding involves filling rows and reading columns.</Text>
      <Text>Decoding reconstructs the original message from the rows.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
       
        <Image src="https://www.includehelp.com/cryptography/Images/rail-fence-cipher-5.jpg" width={300} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Rail_fence_cipher"
        target="_blank"
      >
        Wikipedia: Rail Fence Cipher
      </Link>
      <Link
        href="https://example.com/rail-fence-reference"
        target="_blank"
      >
        https://example.com/rail-fence-reference
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };