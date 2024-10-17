import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Hill Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      Hill cipher is a polygraphic substitution cipher based on linear algebra.Each letter is represented by a number modulo 26. Often the simple scheme A = 0, B = 1, …, Z = 25 is used, but this is not an essential feature of the cipher. To encrypt a message, each block of n letters (considered as an n-component vector) is multiplied by an invertible n × n matrix, against modulus 26. To decrypt the message, each block is multiplied by the inverse of the matrix used for encryption.
      The matrix used for encryption is the cipher key, and it should be chosen randomly from the set of invertible n*n matrices (modulo 26).
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the Plaintext message:ACT .</Text>
      <Text>write the Key:GYBNQKURP</Text>
      <Text>For this example, we'll use a nxn matrix eg: [[3, 3], [2, 5]].</Text>
      <Text>
         Plaintext  : Plaintext: GFG
         Key: HILLMAGIC 
         EncryptED : Ciphertext: SWK
      </Text>
      
      <Text>
        Multiply each pair of numbers by the key matrix to get the encoded pairs.
      </Text>
      <Text>
        After the matrix multiplication and modulo operation, we get the encoded message,i.e
        Encrypted:POH </Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzIZUWAJMB0ahAxY4ItpgZ3PC1dqJaQZ3X9g&s" />
        {/* <Image
          src="https://example.com/hill_cipher_example2.jpg"
          width={300}
        /> */}
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Hill_cipher"
        target="_blank"
      >
        https://en.wikipedia.org/wiki/Hill_cipher
      </Link>
      <Link
        href="https://crypto.interactive-maths.com/hill-cipher.html"
        target="_blank"
      >
        https://crypto.interactive-maths.com/hill-cipher.html
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };