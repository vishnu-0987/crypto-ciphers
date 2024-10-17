import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Checkerboard Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Checkerboard Cipher is a type of transposition cipher that uses a
        5x5 grid, similar to the Polybius square, but is often used to encrypt
        messages by placing characters in a checkerboard pattern. This cipher
        can be adapted to include both letters and symbols, allowing for
        flexible encryption schemes. The main idea is to rearrange the
        characters based on their positions in the grid, adding a layer of
        complexity to the encrypted message.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: "HELLO" using the Checkerboard
        Cipher.
      </p>
      <p>
        1. Create a 5x5 checkerboard grid using the letters of the alphabet (I
        and J share a position):
      </p>
      <p>
        <strong>
          A B C D E<br />
          F G H I/J K<br />
          L M N O P<br />
          Q R S T U<br />V W X Y Z
        </strong>
      </p>
      <p>2. Write the message in the grid by filling the rows:</p>
      <p>
        <strong>
          H E L L O<br />
        </strong>
      </p>
      <p>
        3. Read the characters according to a specified pattern, for instance,
        from top to bottom, then left to right:
      </p>
      <p>H, E, L, L, O → HELL O</p>
      <p>
        4. The encrypted message will be obtained based on the arrangement of
        the characters and the reading pattern.
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://sites.google.com/site/cryptocrackprogram/user-guide/cipher-types/other/checkerboard"
        target="_blank"
      >
        Checkerboard Cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
