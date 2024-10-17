import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Homophonic Substitution Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Homophonic Substitution Cipher is an encryption technique that maps 
        each plaintext letter to multiple possible ciphertext symbols. This 
        increases the complexity of the cipher, making it more resistant to 
        frequency analysis attacks compared to simple substitution ciphers.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Use a predefined mapping for each letter.</Text>
      <Text>For instance, H can be mapped to # or |-|.
        E can be mapped to 3 or €. L can be mapped to |_ or £. O can be mapped to 0 or Θ.</Text>
      <Text>
        Choose a random mapping for each letter in the plaintext message.
      </Text>
      <Text>H becomes #.</Text>
      <Text>E becomes 3.</Text>
      <Text>L becomes |_.</Text>
      <Text>L becomes £.</Text>
      <Text>O becomes 0.</Text>
      {/* Replace the Image components with actual images when available */}
      {/* <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://yourimageurl.com/homophonic_example1.jpg" />
        <Image
          src="https://yourimageurl.com/homophonic_example2.jpg"
          width={300}
        />
      </Flex> */}
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://www.geeksforgeeks.org/homophonic-substitution-cipher/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/homophonic-substitution-cipher/
      </Link>
      <Link
        href="https://en.wikipedia.org/wiki/Homophonic_substitution"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Homophonic_substitution
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
