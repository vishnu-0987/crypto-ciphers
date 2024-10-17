import React from "react";
import { Typography, Image } from "antd";

const { Title, Text, Link } = Typography;

// Header component for the ASCII Cipher
export function Header() {
  return <Title>ASCII Cipher Overview</Title>;
}

// Description of the ASCII Cipher
export function Description() {
  return (
    <Text>
      An ASCII cipher is a method of encrypting text by using the ASCII
      (American Standard Code for Information Interchange) values of characters.
      Each character in the plaintext is converted to its corresponding ASCII
      code, which is a numerical value ranging from 0 to 127. These numeric
      values can be manipulated using various algorithms (e.g., adding a fixed
      number to each ASCII value) to produce an encrypted message. To decrypt
      the message, the process is reversed by converting the manipulated ASCII
      values back to their original characters. ASCII ciphers are simple and
      serve as a basic introduction to cryptographic techniques.
    </Text>
  );
}

// Example for ASCII Cipher usage
export function Example() {
  return (
    <div>
      <h2>Example</h2>
      <Text>Plaintext Message: HELLO</Text>
      <p>Use the ASCII Cipher to encode the message:</p>
      <p>Replace each letter with its corresponding ASCII value:</p>
      <ul>
        <li>H = 72</li>
        <li>E = 69</li>
        <li>L = 76</li>
        <li>L = 76</li>
        <li>O = 79</li>
      </ul>
      <Text>So, the encoded message is: 72 69 76 76 79</Text>
      <div style={{ margin: 20, textAlign: "center" }}>
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240304094301/ASCII-Table.png"
          alt="ASCII Table"
        />
      </div>
    </div>
  );
}

// References section for further reading on the ASCII Cipher
export function References() {
  return (
    <div>
      <h2>References</h2>
      <ul>
        <li>
          <Link
            href="https://www.geeksforgeeks.org/what-is-ascii-a-complete-guide-to-generating-ascii-code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GeeksforGeeks - Complete Guide to ASCII Code
          </Link>
        </li>
      </ul>
    </div>
  );
}
