// import React from "react";
// import { Typography, Flex, Image } from "antd";

// const { Title, Text, Link } = Typography;

// const Header = () => {
//   return <Title>Octal Cipher</Title>;
// };

// const Description = () => {
//   return (
//     <div>
//       <Text>
//         The Octal Cipher is a numeral system-based cipher where each letter of
//         the plaintext is substituted with its corresponding octal (base-8)
//         representation. In this cipher, each letter is converted into a 3-digit
//         octal number, typically using ASCII values. This numeric representation
//         is then converted back to text during decryption. The Octal Cipher is
//         straightforward but not very secure, as it relies on simple
//         substitution and can be easily decoded by someone familiar with the
//         method.
//       </Text>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <Flex vertical={true}>
//       <Text>Consider the plaintext message: "HELLO".</Text>
//       <Text>Convert each letter to its ASCII value:</Text>
//       <Text>
//         - H (ASCII 72) converts to octal: 110
//       </Text>
//       <Text>
//         - E (ASCII 69) converts to octal: 105
//       </Text>
//       <Text>
//         - L (ASCII 76) converts to octal: 114
//       </Text>
//       <Text>
//         - L (ASCII 76) converts to octal: 114
//       </Text>
//       <Text>
//         - O (ASCII 79) converts to octal: 117
//       </Text>
//       <Text>
//         Combine these octal numbers: 110105114114117
//       </Text>
//       <Text>
//         The encrypted message in Octal Cipher would be: 110105114114117
//       </Text>
//     </Flex>
//   );
// };

// const References = () => {
//   return (
//         <Flex vertical={true}>
//       <Link
//         href="https://en.wikipedia.org/wiki/Octal"
//         target="_blank"
//       >
//         Wikipedia - Octal System
//       </Link>
//       <Link
//         href="https://www.tutorialspoint.com/computer_logical_organization/octal_number_system.htm"
//         target="_blank"
//       >
//         Tutorialspoint - Octal Number System
//       </Link>
//     </Flex>
//   );
// };

import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Octal Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Octal Cipher is a numeral system-based cipher where each letter of
        the plaintext is substituted with its corresponding octal (base-8)
        representation. In this cipher, each letter is converted into a 3-digit
        octal number, typically using ASCII values. This numeric representation
        is then converted back to text during decryption. The Octal Cipher is
        straightforward but not very secure, as it relies on simple
        substitution and can be easily decoded by someone familiar with the
        method.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Consider the plaintext message: "HELLO".</Text>
      <Text>Convert each letter to its ASCII value:</Text>
      <Text>
        - H (ASCII 72) converts to octal: 110
      </Text>
      <Text>
        - E (ASCII 69) converts to octal: 105
      </Text>
      <Text>
        - L (ASCII 76) converts to octal: 114
      </Text>
      <Text>
        - L (ASCII 76) converts to octal: 114
      </Text>
      <Text>
        - O (ASCII 79) converts to octal: 117
      </Text>
      <Text>
        Combine these octal numbers: 110105114114117
      </Text>
      <Text>
        The encrypted message in Octal Cipher would be: 110105114114117
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Octal"
        target="_blank"
      >
        Wikipedia - Octal System
      </Link>
      <Link
        href="https://www.tutorialspoint.com/computer_logical_organization/octal_number_system.htm"
        target="_blank"
      >
        Tutorialspoint - Octal Number System
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
