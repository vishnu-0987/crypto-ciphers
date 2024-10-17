import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Beaufort Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Beaufort Cipher is a polyalphabetic substitution cipher that is
        similar to the Vigenère cipher but uses a slightly different encryption
        method. In the Beaufort Cipher, encryption is done by subtracting the
        plaintext letter from the key letter instead of adding them. The
        Beaufort Cipher is reciprocal, meaning that encryption and decryption
        are performed using the same steps.
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
        Use the Beaufort Cipher table, where the encryption is done by
        subtracting the plaintext letter from the key letter modulo 26.
      </p>
      <p>
        1. First, align the key with the plaintext:
        <br />
        Plaintext: HELLO
        <br />
        Key: KEYKE
      </p>
      <p>
        2. Encrypt each letter:
        <br />
        - H encrypted with K: (K - H) = B.
        <br />
        - E encrypted with E: (E - E) = A.
        <br />
        - L encrypted with Y: (Y - L) = N.
        <br />
        - L encrypted with K: (K - L) = V.
        <br />- O encrypted with E: (E - O) = S.
      </p>
      <p>
        So, the encrypted message is: <strong>BANVS</strong>.
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Beaufort_cipher" target="_blank">
        https://en.wikipedia.org/wiki/Beaufort_cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
