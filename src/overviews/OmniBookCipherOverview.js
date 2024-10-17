import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Omni Book Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Omni Book Cipher uses a book as the key to encrypt and decrypt
        messages. Each letter or word of the plaintext is replaced by a
        corresponding word, page number, and position in the book. To encrypt,
        specify the location in the book where each plaintext character appears
        and record the corresponding ciphered word. To decrypt, reverse the
        process, using the same book and ciphered words to retrieve the
        original plaintext.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex vertical={true}>
      <Text>Consider using the book "Sherlock Holmes" as the key.</Text>
      <Text>Encrypt the message "MEET AT NOON" using specific page numbers and words.</Text>
      <Text>Decrypt by referencing the same book and ciphered words to retrieve the original message.</Text>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex vertical={true}>
      <Link
        href="https://en.wikipedia.org/wiki/Book_cipher"
        target="_blank"
      >
        Wikipedia - Book Cipher
      </Link>
      <Link
        href="https://www.unomaha.edu/jrf/vol13.no2/Bookcipher.htm"
        target="_blank"
      >
        University of Nebraska - Book Cipher
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
