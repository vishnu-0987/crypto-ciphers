// import { Typography, Image, Flex } from "antd";

// const { Title, Text, Link } = Typography;

// const Header = () => {
//   return <Title>Nihilist Substitution Cipher</Title>;
// };

// const Description = () => {
//   return (
//     <div>
//       <Text>
//         The Nihilist Substitution Cipher is a polyalphabetic cipher similar to the
//         Polybius square. It encrypts pairs of letters into numbers and then uses
//         these numbers to generate the ciphertext. It provides more security than
//         simple substitution ciphers by replacing plaintext letters with pairs of
//         numbers.
//       </Text>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <Flex vertical={true}>
//       <Text>Write down the plaintext message: HELLO WORLD.</Text>
//       <Text>Choose a keyword (key): CIPHER.</Text>
//       <Text>
//         Create a Polybius square using the keyword and the remaining letters of
//         the alphabet.
//       </Text>
//       <Text>Example Polybius square:</Text>
//       <Image src="https://i.pinimg.com/736x/94/ba/9d/94ba9d2ec86d4047ff20bda7d11e32dd.jpg" width={300} />
//       <Text>
//         Convert each plaintext letter pair into its corresponding number pair
//         using the Polybius square.
//       </Text>
//       <Text>Example:</Text>
//       <Text>- Plaintext: HE</Text>
//       <Text>- Encrypted: 23 11</Text>
//       <Text>Combine all number pairs to form the ciphertext.</Text>
//       <Text>Encrypted message: 23114717201104</Text>
//     </Flex>
//   );
// };

// const References = () => {
//   return (
//     <Flex vertical={true}>
//       <Link
//         href="https://en.wikipedia.org/wiki/Nihilist_cipher"
//         target="_blank"
//       >
//         Wikipedia - Nihilist Cipher
//       </Link>
//       <Link href="https://www.cryptologie.net/en/chiffrement/nihilist-cipher.html" target="_blank">
//         cryptologie.net - Nihilist Cipher
//       </Link>
//     </Flex>
//   );
// };

// export { Header, Description, Example, References };
import React from 'react';
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Nihilist Substitution Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Nihilist Substitution Cipher is a polyalphabetic cipher that combines elements of the Polybius square and a keyword. Each letter of the plaintext message is substituted with a pair of digits derived from the row and column numbers of the letter in a 5x5 Polybius square. This cipher was historically used for secure communication.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Example with keyword: ATTACK</Text>
      <Text>Plaintext: PRACHI</Text>
      <Text>Step-by-step process:</Text>
      <Text>1. Generate the key square:</Text>
      <Text>
        <pre>
        {`A T C K B
U D E F G
H I L M N
O P Q R S
V W X Y Z`}
        </pre>
      </Text>
      <Text>2. Convert plaintext to numeric values:</Text>
      <Text>- P maps to row 4, column 2 → 42</Text>
      <Text>- R maps to row 4, column 4 → 44</Text>
      <Text>- A maps to row 1, column 1 → 11</Text>
      <Text>- C maps to row 1, column 3 → 13</Text>
      <Text>- H maps to row 3, column 1 → 31</Text>
      <Text>- I maps to row 3, column 2 → 32</Text>
      <Text>Therefore, the numeric key for PRACHI is: 42 44 11 13 31 32</Text>
      <Text>3. Encrypted message: 42 44 11 13 31 32</Text>
      <Text>4. Decryption process:</Text>
      <Text>- 42 maps to row 4, column 2 → P</Text>
      <Text>- 44 maps to row 4, column 4 → R</Text>
      <Text>- 11 maps to row 1, column 1 → A</Text>
      <Text>- 13 maps to row 1, column 3 → C</Text>
      <Text>- 31 maps to row 3, column 1 → H</Text>
      <Text>- 32 maps to row 3, column 2 → I</Text>
      <Text>Therefore, the plaintext for 42 44 11 13 31 32 is: PRACHI</Text>
    </Flex>
  );
};
const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Nihilist_cipher" target="_blank">
        Wikipedia - Nihilist Cipher
      </Link>
      <Link href="https://crypto.interactive-maths.com/nihilist-cipher.html" target="_blank">
        Interactive Maths - Nihilist Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };

const NihilistCipherOverview = () => {
  return (
    <div>
      <Header />
      <Description />
      <Example />
      <References />
    </div>
  );
};

export default NihilistCipherOverview;
