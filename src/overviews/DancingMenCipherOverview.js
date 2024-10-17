import React from "react";
import { Typography, Image, Flex } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Dancing Men Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Dancing Men Cipher is a substitution cipher where each letter of the
        plaintext is replaced with a corresponding dancing men symbol. It was
        famously featured in the Sherlock Holmes story "The Adventure of the
        Dancing Men."
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Write down the plaintext message: THE GAME IS AFOOT.</Text>
      <Text>Convert each letter to its corresponding dancing men symbol:</Text>
      <Text>- T becomes 🕺</Text>
      <Text>- H becomes 💃</Text>
      <Text>- E becomes 👯</Text>
      <Text>- G becomes 🕴️</Text>
      <Text>- A becomes 🧍</Text>
      <Text>- M becomes 🧎</Text>
      <Text>... and so on.</Text>
      <Text>Encrypt the entire message using dancing men symbols.</Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
      
        <Image src= "https://www.boxentriq.com/img/dancing-men/dancing-men-cipher-overview.png" width={500} />
      </Flex>
      <Text>
        Following this process, the encrypted message might look like: 🕺💃👯🕴️🧍🧎🕴️🕴️🕺👯💃🕺👯🕴️.
      </Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Dancing_Men"
        target="_blank"
      >
        Wikipedia - Dancing Men Cipher
      </Link>
      <Link href="https://www.sacred-texts.com/cla/acp/acp09.htm" target="_blank">
        Sacred Texts - The Adventure of the Dancing Men
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
