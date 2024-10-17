import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Dagger Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
      A dagger, obelisk, or obelus † is a typographical mark that usually indicates a footnote if an asterisk has already been used. The symbol is also used to indicate death (of people) or extinction (of species or languages).
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      {/* <Text>Choose a keyword (key): SECRET.</Text> */}
      <Text>
        {/* Create a keystream by repeating the keyword until it matches the
        plaintext message length. In this case, the keystream becomes:
        SECRETSECRE */}
                † (dagger symbol) - Represents uppercase letters (A-Z)
                 ‡ (double dagger symbol) - Represents lowercase letters (a-z)
                   Space ( ) - Remains a space
      </Text>
      <Text>
                  Dagger (†)
                  Double dagger (‡)
                   Here are some additional methods for inserting these symbols depending on your platform:
      </Text>
      <Text>Encrypt the plaintext letter using the dagger Cipher with the
        derived 'A': '†', 'B': '‡', 'C': '†', 'D': '‡', 'E': '†', 'F': '‡', 'G': '†', 'H': '‡',
        'I': '†', 'J': '‡', 'K': '†', 'L': '‡', 'M': '†', 'N': '‡', 'O': '†', 'P': '‡',
        'Q': '†', 'R': '‡', 'S': '†', 'T': '‡', 'U': '†', 'V': '‡', 'W': '†', 'X': '‡',
        'Y': '†', 'Z': '‡', 'a': '†', 'b': '‡', 'c': '†', 'd': '‡', 'e': '†', 'f': '‡',
        'g': '†', 'h': '‡', 'i': '†', 'j': '‡', 'k': '†', 'l': '‡', 'm': '†', 'n': '‡',
        'o': '†', 'p': '‡', 'q': '†', 'r': '‡', 's': '†', 't': '‡', 'u': '†', 'v': '‡',
        'w': '†', 'x': '‡', 'y': '†', 'z': '‡', ' ': ' ',.
      </Text>
      <Text>Example:</Text>
      <Text>- Plaintext: hEllO</Text>
      <Text>- EncryptED:‡†‡‡†</Text>
     
     
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
      {/* https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg */}
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Fs-dagger.jpg/450px-Fs-dagger.jpg"/>
        <Image src="https://media.istockphoto.com/id/1436110432/vector/medieval-black-sword-knight-knife-blade-silhouette-logo-design-vector.jpg?s=612x612&w=0&k=20&c=KrLptlSMYyHtaJ7fxq_C96lyOEsY5MBPVX6qjof3s4I=" width={300} />
      </Flex>
      <Text>
        Following this process for the entire message, the encrypted message
        becomes: ‡†‡‡†
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Dagger"
        target="_blank"
      >
        Wikipedia - Dagger Cipher
      </Link>
      <Link href="https://www.cryptologie.net/en/chiffrement/daggers-cipher.html" target="_blank">
        cryptologie.net - Dagger Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };