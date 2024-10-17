import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Bellaso Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Bellaso Cipher is an advanced polyalphabetic cipher and a variant of
        the Vigenère cipher. It uses a repeating key to encrypt each letter of
        the plaintext by shifting them according to the corresponding key
        letter. Unlike the Vigenère cipher, the Bellaso Cipher can operate on
        any character set and is particularly useful for encrypting texts
        containing a wide variety of symbols, not just the alphabet.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let's encrypt the plaintext message: "HELLO".</p>
      <p>Choose a key, for example, "KEY".</p>
      <p>
        Use the Bellaso method, where each letter of the plaintext is shifted by
        the ASCII value of the corresponding key letter. The key repeats itself
        until it covers the entire message.
      </p>
      <p>
        1. First, align the key with the plaintext:
        <br />
        Plaintext: HELLO
        <br />
        Key: KEYKE
      </p>
      <p>
        2. Convert the letters into their ASCII values:
        <br />
        - H = 72, E = 69, L = 76, O = 79.
        <br />- K = 75, E = 69, Y = 89.
      </p>
      <p>
        3. Add the corresponding ASCII values of the key to each plaintext
        letter and then apply modulo 256 (since ASCII characters range from 0 to
        255) to get the encrypted message:
        <br />
        - H (72) + K (75) = 147 → (mod 256) = 147 = "Ó".
        <br />
        - E (69) + E (69) = 138 → (mod 256) = 138 = "Š".
        <br />
        - L (76) + Y (89) = 165 → (mod 256) = 165 = "¥".
        <br />
        - L (76) + K (75) = 151 → (mod 256) = 151 = "—".
        <br />- O (79) + E (69) = 148 → (mod 256) = 148 = "”".
      </p>
      <p>
        So, the encrypted message is: <strong>ÓŠ¥—”</strong>.
      </p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240813151222/bellaso-cipher.png"
          alt="Bellaso Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://ciphermysteries.com/other-ciphers/bellaso-ciphers"
        target="_blank"
      >
        Bellaso Ciphers
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
