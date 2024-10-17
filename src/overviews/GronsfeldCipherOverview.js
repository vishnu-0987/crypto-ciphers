// import { Typography, Image, Flex } from "antd";

// const { Title, Text, Link } = Typography;

// const Header = () => {
//   return <Title>Gronsfeld Cipher</Title>;
// };

// const Description = () => {
//   return (
//     <div>
//       <Text>
//       Vigenere Cipher is a method of encrypting alphabetic text. It uses a simple form of polyalphabetic substitution. A polyalphabetic cipher is any cipher based on substitution, using multiple substitution alphabets.Gronsfeld Cipher is a cryptography method that works like a Vigenere Cipher. Gronsfeld Cipher uses keys from decimal numbers instead of letters, but sometimes it can uses ASCII as the key substitustion. The key will be repeated periodically with the intention that each plaintext has a key.
//       </Text>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <Flex vertical={true}>
//       <Text>Write down the plaintext message: GEEKSFORGEEKS .</Text>
//       <Text>write the Key:AYUSH .</Text>
//       <Text>
//       Output : Ciphertext :  GCYCZFMLYLEIM
//       </Text>
//       For generating key, the given keyword is repeated
//               in a circular manner until it matches the length of 
//                  the plain text.
//                  The keyword "AYUSH" generates the key "AYUSHAYUSHAYU"
//                   The plain text is then encrypted using the process 
//                         explained below.
//       <Text>
//       The first letter of the plaintext, G is paired with A, the first letter of the key. So use row G and column A of the Vigenère square, namely G. Similarly, for the second letter of the plaintext, the second letter of the key is used, the letter at row E, and column Y is C. The rest of the plaintext is enciphered in a similar fashion.
//       </Text>
//       <Text></Text>
     
//       <Text>- Encrypted: J (H shifted by 2 positions)</Text>
//       <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
//         <Image src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Vigen%C3%A8re_square_shading.png" />
       
//       </Flex>
//       <Text>
//         Following this process for the entire message, the encrypted message
//         becomes: GCYCZFMLYLEIM.
//       </Text>
//     </Flex>
//   );
// };

// const References = () => {
//   return (
//     <Flex vertical={true}>
//       <Link
//         href="https://en.wikipedia.org/wiki/Gronsfeld_cipher"
//         target="_blank"
//       >
//         Wikipedia - Gronsfeld Cipher
//       </Link>
//       <Link href="https://www.cryptomuseum.com/crypto/gronsfeld/" target="_blank">
//         Crypto Museum - Gronsfeld Cipher
//       </Link>
//     </Flex>
//   );
// };

// export { Header, Description, Example, References };

import React from 'react';
import { Typography, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Gronsfeld Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Gronsfeld Cipher is a variant of the Vigenère Cipher, using a numeric key instead of a keyword. It operates similarly by shifting each letter of the plaintext message according to the numeric values in the key. The key digits correspond to the number of shifts applied to each letter in the plaintext.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Example with key: 3142</Text>
      <Text>Plaintext: HELLO</Text>
      <Text>Step-by-step process:</Text>
      <Text>1. Convert key into a repeating sequence: 3142 → 31423142</Text>
      <Text>2. Encrypt each letter of the plaintext using its corresponding shift:</Text>
      <Text>- H shifted by 3 → K</Text>
      <Text>- E shifted by 1 → F</Text>
      <Text>- L shifted by 4 → P</Text>
      <Text>- L shifted by 2 → N</Text>
      <Text>- O shifted by 3 → R</Text>
      <Text>Therefore, the encrypted message is: KFPNR</Text>
      <Text>3. Decryption process:</Text>
      <Text>- K shifted back by 3 → H</Text>
      <Text>- F shifted back by 1 → E</Text>
      <Text>- P shifted back by 4 → L</Text>
      <Text>- N shifted back by 2 → L</Text>
      <Text>- R shifted back by 3 → O</Text>
      <Text>Therefore, the decrypted message is: HELLO</Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Gronsfeld_cipher" target="_blank">
        Wikipedia - Gronsfeld Cipher
      </Link>
      <Link href="https://www.simonsingh.net/The_Black_Chamber/gronsfeld.html" target="_blank">
        Simon Singh - Gronsfeld Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };

const GronsfeldCipherOverview = () => {
  return (
    <div>
      <Header />
      <Description />
      <Example />
      <References />
    </div>
  );
};

export default GronsfeldCipherOverview;
