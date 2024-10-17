import { Typography, Image } from "antd";

const Header = () => {
  return <h1>ADFGVX Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The ADFGVX Cipher is a field cipher used by the German Army during World
        War I. It combines a modified Polybius square and a transposition step
        to encrypt messages. The cipher uses a 6x6 grid filled with letters
        (A-Z) and digits (0-9), where the coordinates are represented by the
        letters A, D, F, G, V, and X. This adds complexity to the encryption
        process, making it harder to break.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: "HELLO" using the ADFGVX cipher.
      </p>
      <p>1. Create a 6x6 Polybius square filled with letters and digits:</p>
      <p>
        <strong>
          A D F G V X<br />
          A H E L O W<br />
          D P A Z G K<br />
          F M U B C N<br />
          G Q I X D Y<br />
          V 0 1 2 3 4<br />X 5 6 7 8 9
        </strong>
      </p>
      <p>2. Convert each letter of "HELLO" to its coordinates in the grid:</p>
      <p>H = AA, E = AD, L = AF, L = AF, O = AV</p>
      <p>3. The resulting coordinates are: AA, AD, AF, AF, AV.</p>
      <p>
        4. Next, apply a transposition using a key (e.g., "KEYWORD"). Arrange
        the coordinates into columns and rearrange based on the alphabetical
        order of the key.
      </p>
      <p>
        So, after the transposition step, you get the final encrypted message.
      </p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://i.ytimg.com/vi/iwd19KMXTYI/maxresdefault.jpg"
          alt="ADFGVX Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/ADFGVX_cipher" target="_blank">
        https://en.wikipedia.org/wiki/ADFGVX_cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
