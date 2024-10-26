import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Masonic Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Masonic cipher, also known as the Freemason's cipher, Pigpen cipher,
        or Rosicrucian cipher, is a geometric simple substitution cipher which
        exchanges letters for symbols which are fragments of a grid. The system
        is a simple substitution of symbols for letters, and is easy to learn
        and use. It was used historically by the Freemasons in the 18th century
        to keep their records private.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the Plaintext message: HELLO.</Text>
      <Text>
        Using the Masonic cipher, each letter is substituted with a symbol:
      </Text>
      <Text>H: ⊓, E: ⊏, L: ⊏, L: ⊏, O: ⌜</Text>
      <Text>Encrypted message: ⊓⊏⊏⊏⌜</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://pbs.twimg.com/media/EnCJAp1VkAAf6EK.png" />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link href="https://en.wikipedia.org/wiki/Pigpen_cipher" target="_blank">
        https://en.wikipedia.org/wiki/Pigpen_cipher
      </Link>
      <Link
        href="https://crypto.interactive-maths.com/pigpen-cipher.html"
        target="_blank"
      >
        https://crypto.interactive-maths.com/pigpen-cipher.html
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
