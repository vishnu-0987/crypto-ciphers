import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Julius Caesar Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Julius Caesar Cipher, named after Julius Caesar, is a type of
        substitution cipher where each letter in the plaintext is shifted a
        certain number of places down or up the alphabet.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Choose a shift value.</Text>
      <Text>In this case, we will use a shift of 3.</Text>
      <Text>
        Replace each letter in the plaintext message with the letter that is
        three positions to the right in the alphabet.
      </Text>
      <Text>H becomes K (shift 3 from H).</Text>
      <Text>E becomes H (shift 3 from E).</Text>
      <Text>L becomes O (shift 3 from L).</Text>
      <Text>L becomes O (shift 3 from L).</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://www.ciphermachinesandcryptology.com/img/crypto/codewheel.jpg" />
        <Image
          src="https://th.bing.com/th/id/OIP.NQLhEI5GesrCuZVX0YlC-QAAAA?rs=1&pid=ImgDetMain"
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
        href="https://www.geeksforgeeks.org/caesar-cipher-in-cryptography//"
        target="_blank"
      >
      GeeksforGeeks - Julius Cipher
      </Link>
      
    </Flex>
  );
};

export { Header, Description, Example, References };
