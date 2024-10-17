// // import React from "react";
// // import { Typography, Image, Flex } from "antd";

// // const { Title, Text, Link } = Typography;

// // const Header = () => {
// //   return <Title>Elian Script Cipher</Title>;
// // };

// // const Description = () => {
// //   return (
// //     <div>
// //       <Text>
// //         The Elian Script Cipher is a symbolic cipher where each letter of the
// //         plaintext is represented by a unique symbol from the Elian script. It is
// //         a constructed writing system designed for both aesthetics and practical
// //         communication.
// //       </Text>
// //     </div>
// //   );
// // };

// // const Example = () => {
// //   return (
// //     <Flex vertical={true}>
// //       <Text>Write down the plaintext message: HELLO WORLD.</Text>
// //       <Text>Convert each letter to its corresponding Elian script symbol:</Text>
// //       <Text>- H becomes ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜</Text>
// //       <Text>- E becomes ⬜ ⬜⬜⬜</Text>
// //       <Text>- L becomes ⬜⬜⬜⬜</Text>
// //       <Text>- O becomes ⬜⬜</Text>
// //       <Text>- W becomes ⬜ ⬜⬜</Text>
// //       <Text>- R becomes ⬜⬜⬜⬜</Text>
// //       <Text>- D becomes ⬜ ⬜⬜⬜</Text>
// //       <Text>... and so on.</Text>
// //       <Text>Encrypt the entire message using Elian script symbols.</Text>
// //       <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
// //         <Image src="https://example.com/elian-script-example-image.jpg" />
// //         <Image src="https://example.com/elian-script-example-image.jpg" width={300} />
// //       </Flex>
// //       <Text>
// //         Following this process, the encrypted message might look like: ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜ ⬜⬜ ⬜⬜⬜⬜ ⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜ ⬜⬜⬜⬜⬜⬜⬜⬜
// //       </Text>
// //     </Flex>
// //   );
// // };

// // const References = () => {
// //   return (
// //     <Flex vertical={true}>
// //       <Link
// //         href="https://en.wikipedia.org/wiki/Elian_script"
// //         target="_blank"
// //       >
// //         Wikipedia - Elian Script
// //       </Link>
// //       <Link href="https://www.example.com/elian-script-reference.html" target="_blank">
// //         Example.com - Elian Script Reference
// //       </Link>
// //     </Flex>
// //   );
// // };

// // export { Header, Description, Example, References };
// // ElianScriptCipherOverview.js

// import React from 'react';
// import { Typography, Image, Flex } from 'antd';

// const { Title, Text, Link } = Typography;

// const Header = () => {
//   return <Title>Elian Script Overview</Title>;
// };

// const Description = () => {
//   return (
//     <div>
//       <Text>
//         Elian Script is a constructed script created by Vincent Figgins in the 
//         early 19th century. It is characterized by its unique, geometric shapes 
//         and is often used for artistic and decorative purposes rather than for 
//         practical communication. The script is based on a grid system where 
//         each letter is constructed using a series of straight lines and dots.
//       </Text>
//     </div>
//   );
// };

// const Example = () => {
//   return (
//     <Flex direction="column">
//       <Text>Write down the plaintext message: HELLO.</Text>
//       <Text>Convert each letter to its corresponding Elian Script symbol:</Text>
//       <Text>- H becomes ⵎ</Text>
//       <Text>- E becomes ߛ</Text>
//       <Text>- L becomes ᒧ</Text>
//       <Text>- O becomes ᘂ</Text>
//       <Text>... and so on.</Text>
//       <Text>Encrypt the entire message using Elian Script symbols.</Text>
//       <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
//         <Image src="https://example.com/elian-script-example-image.jpg" />
//         <Image src="https://example.com/elian-script-example-image.jpg" width={300} />
//       </Flex>
//       <Text>Following this process, the encrypted message might look like: ⵎߛᒧᒧᘂ.</Text>
//     </Flex>
//   );
// };

// const References = () => {
//   return (
//     <Flex direction="column">
//       <Link href="https://en.wikipedia.org/wiki/Elian_Script" target="_blank">
//         Wikipedia - Elian Script
//       </Link>
//       <Link href="https://www.omniglot.com/conscripts/elianscript.htm" target="_blank">
//         Omniglot - Elian Script
//       </Link>
//     </Flex>
//   );
// };

// export { Header, Description, Example, References };
import React from 'react';
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Elian Script Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Elian Script Cipher is a form of substitution cipher where each letter 
        of the plaintext message is replaced with a corresponding Elian Script symbol. 
        This script, known for its geometric shapes, was created by Vincent Figgins 
        and is often used for artistic purposes rather than practical communication.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: HELLO.</Text>
      <Text>Convert each letter to its corresponding Elian Script symbol:</Text>
      <Text>- H becomes ⵎ</Text>
      <Text>- E becomes ߛ</Text>
      <Text>- L becomes ᒧ</Text>
      <Text>- O becomes ᘂ</Text>
      <Text>... and so on.</Text>
      <Text>Encrypt the entire message using Elian Script symbols.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
            <Image src="https://www.omniglot.com/images/writing/elian2.gif" width={300} />
      </Flex>
      <Text>Following this process, the encrypted message might look like: ⵎߛᒧᒧᘂ.</Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Elian_Script" target="_blank">
        Wikipedia - Elian Script
      </Link>
      <Link href="https://www.omniglot.com/conscripts/elianscript.htm" target="_blank">
        Omniglot - Elian Script
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };

const ElianScriptCipherOverview = () => {
  return (
    <div>
      <Header />
      <Description />
      <Example />
      <References />
    </div>
  );
};

export default ElianScriptCipherOverview;
