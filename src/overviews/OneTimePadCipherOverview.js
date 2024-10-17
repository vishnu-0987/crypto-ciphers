// import React from "react";
// import { Typography, Flex, Image } from "antd";

// const { Title, Text, Link } = Typography;

// const Header = () => {
//   return <Title>One-Time Pad Cipher</Title>;
// };

// const Description = () => {
//   return (
//     <div>
//       <Text>
//         The One-Time Pad (OTP) cipher is an encryption technique that cannot be cracked if the key is truly random, at least as long as the message itself, never reused in whole or part, and kept completely secret. In this cipher, each character of the plaintext is combined with a character from a random key using the XOR operation.
//       </Text>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <Flex direction="column">
//       <Text>Encrypt the message "HELLO" with a random key "XMCKL".</Text>
//       <Text>Convert each character to its ASCII value and XOR with the key:</Text>
//       <Text>- H (72) XOR X (88) = 16</Text>
//       <Text>- E (69) XOR M (77) = 8</Text>
//       <Text>- L (76) XOR C (67) = 15</Text>
//       <Text>- L (76) XOR K (75) = 7</Text>
//       <Text>- O (79) XOR L (76) = 3</Text>
//       <Text>Encrypted message: "\u0010\u0008\u000F\u0007\u0003"</Text>
//       <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
//         <Image src="https://upload.wikimedia.org/wikipedia/commons/8/85/One-time_pad.svg" width={500} />
//       </Flex>
//     </Flex>
//   );
// };

// const References = () => {
//   return (
//     <Flex direction="column">
//       <Link href="https://en.wikipedia.org/wiki/One-time_pad" target="_blank">
//         Wikipedia - One-Time Pad
//       </Link>
//       <Link href="https://www.nsa.gov/Portals/70/documents/news-features/declassified-documents/tech-journals/one-time-pad.pdf" target="_blank">
//         NSA - One-Time Pad
//       </Link>
//     </Flex>
//   );
// };

import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>One-Time Pad Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The One-Time Pad (OTP) cipher is an encryption technique that cannot be cracked if the key is truly random, at least as long as the message itself, never reused in whole or part, and kept completely secret. In this cipher, each character of the plaintext is combined with a character from a random key using the XOR operation.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>Encrypt the message "HELLO" with a random key "XMCKL".</Text>
      <Text>Convert each character to its ASCII value and XOR with the key:</Text>
      <Text>- H (72) XOR X (88) = 16</Text>
      <Text>- E (69) XOR M (77) = 8</Text>
      <Text>- L (76) XOR C (67) = 15</Text>
      <Text>- L (76) XOR K (75) = 7</Text>
      <Text>- O (79) XOR L (76) = 3</Text>
      <Text>Encrypted message: "\u0010\u0008\u000F\u0007\u0003"</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://image.slidesharecdn.com/3-l4-150402115216-conversion-gate01/95/one-time-pad-encryption-3-638.jpg?cb=1428012682" width={500} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/One-time_pad" target="_blank">
        Wikipedia - One-Time Pad
      </Link>
      <Link href="https://www.nsa.gov/Portals/70/documents/news-features/declassified-documents/tech-journals/one-time-pad.pdf" target="_blank">
        NSA - One-Time Pad
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };

