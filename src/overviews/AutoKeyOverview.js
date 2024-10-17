import { Typography, Image } from "antd";
const Header = () => {
  return <h1>AutoKey Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The AutoKey Cipher is a polyalphabetic substitution cipher used for
        encryption. It enhances the Vigenère Cipher by incorporating the
        plaintext into the key. Initially, a short key is chosen, and then the
        plaintext itself is appended to this key. This method ensures that each
        letter is encrypted using a different shift value, making the encryption
        more secure. It's a more complex yet effective way to obscure text by
        using the plaintext to influence the key.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Write down the plaintext message: HELLO.</p>
      <p>Choose a short key, for example, "KEY".</p>
      <p>
        Append the plaintext to the key to create the full key. The key becomes:
        KEYHELLO.
      </p>
      <p>Now, use the key to encrypt each letter of the plaintext.</p>
      <p>
        The first letter of the plaintext "H" (7th letter in the alphabet) is
        encrypted using the first letter of the key "K" (10th letter in the
        alphabet).
        <br />
        The encryption shifts "H" by 10, resulting in "R".
      </p>
      <p>
        The second letter of the plaintext "E" (4th letter in the alphabet) is
        encrypted using the second letter of the key "E" (4th letter in the
        alphabet).
        <br />
        The encryption shifts "E" by 4, resulting in "I".
      </p>
      <p>
        Similarly, continue for the rest of the letters, using the full key:
        <br />L → S, L → S, O → Y.
      </p>
      <p>So, the encoded message is: RISSY.</p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240926174534/Autokey-Cipher-.jpg"
          alt="ASCII Table"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://www.geeksforgeeks.org/autokey-cipher-symmetric-ciphers/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/autokey-cipher-symmetric-ciphers/
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
