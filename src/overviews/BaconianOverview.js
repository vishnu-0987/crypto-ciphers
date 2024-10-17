import React from "react";

// Header component for the Baconian Cipher
export function Header() {
  return <h1>Baconian Cipher</h1>;
}

// Description of the Baconian Cipher
export function Description() {
  return (
    <p>
      The Baconian cipher is a substitution cipher where each letter of the
      plaintext is replaced by a group of five letters 'A' or 'B'. It was
      invented by Francis Bacon in the early 17th century and was designed as a
      way to encode messages that could only be deciphered by those familiar
      with the method. The Baconian cipher is one of the early forms of
      steganography, as the groups of A's and B's could be disguised in
      different ways.
    </p>
  );
}

// Example for Baconian Cipher usage
export function Example() {
  return (
    <div>
      <h2>Example</h2>
      <p>
        <strong>Plaintext:</strong> HELLO
      </p>
      <p>
        <strong>Encoded as Baconian:</strong> AABBB AABBB AABAB AABAB ABABB
      </p>
      <p>
        <strong>Explanation:</strong>
      </p>
      <ul>
        <li>H = AABBB</li>
        <li>E = AABAA</li>
        <li>L = ABABB</li>
        <li>L = ABABB</li>
        <li>O = ABBBA</li>
      </ul>
      <p>
        By replacing each letter of the plaintext with its corresponding
        Baconian code, we can encrypt the message into a series of A's and B's.
      </p>
    </div>
  );
}

// References section for further reading on the Baconian Cipher
export function References() {
  return (
    <div>
      <h2>References</h2>
      <ul>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Bacon%27s_cipher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia - Bacon's Cipher
          </a>
        </li>
        <li>
          <a
            href="https://crypto.interactive-maths.com/baconian-cipher.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interactive Mathematics - Baconian Cipher
          </a>
        </li>
      </ul>
    </div>
  );
}
