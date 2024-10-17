import React from "react";
import { Typography, Flex, Image } from "antd";

const { Title, Text, Link } = Typography;

const Header = () => {
  return <Title>Pigpen Cipher</Title>;
};

const Description = () => {
  return (
    <div>
      <Text>
        The Pigpen Cipher, also known as the Masonic Cipher, is a simple substitution cipher. It uses symbols that visually represent letters of the alphabet. Each letter is replaced by a unique symbol composed of lines and dots arranged in a grid of two-by-two or sometimes three-by-three squares.
      </Text>
      <Text>
        This cipher was often used by Freemasons for secret communication, where each symbol corresponds to a letter of the alphabet.
      </Text>
    </div>
  );
};

const Example = () => {
  return (
    <Flex direction="column">
      <Text>
        To encode the message "HELLO":
      </Text>
      <Text>
        - H is represented by 🞀 (top-left square)
      </Text>
      <Text>
        - E is represented by 🞄 (top-right square)
      </Text>
      <Text>
        - L is represented by 🞋 (bottom-left square)
      </Text>
      <Text>
        - O is represented by 🞎 (bottom-right square)
      </Text>
      <Text>
        Encoded message: 🞀🞄🞋🞄🞎
      </Text>
      <Flex wrap="wrap" justify="center" gap={10} style={{ margin: 20 }}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Masonic_cipher_for_the_trestleboard.png/800px-Masonic_cipher_for_the_trestleboard.png" width={500} />
      </Flex>
    </Flex>
  );
};

const References = () => {
  return (
    <Flex direction="column">
      <Link href="https://en.wikipedia.org/wiki/Pigpen_cipher" target="_blank">
        Wikipedia - Pigpen Cipher
      </Link>
      <Link href="https://www.cryptii.com/pipes/pigpen-cipher" target="_blank">
        Cryptii - Pigpen Cipher Tool
      </Link>
    </Flex>
  );
};

export { Header, Description, Example, References };
