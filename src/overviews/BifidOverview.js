import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Bifid Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Bifid Cipher is a cipher that combines the polybius square with
        transposition. It was invented by Félix Delastelle and encrypts text by
        first turning it into coordinates using a Polybius square, then mixing
        those coordinates through a transposition step, and finally converting
        the mixed coordinates back into letters. This technique increases
        security by adding complexity to the pattern of letter shifts.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: "HELLO" using a Polybius square.
      </p>
      <p>
        1. Create a Polybius square (5x5 grid) using the alphabet (I and J share
        a position):
      </p>
      <p>
        <strong>
          A B C D E<br />
          F G H I/J K<br />
          L M N O P<br />
          Q R S T U<br />V W X Y Z
        </strong>
      </p>
      <p>2. Convert each letter of "HELLO" to its coordinates:</p>
      <p>H = (2,3), E = (1,5), L = (3,1), L = (3,1), O = (3,4)</p>
      <p>
        3. Write down the coordinates separately (rows first, then columns):
        <br />
        Rows: 2 1 3 3 3
        <br />
        Columns: 3 5 1 1 4
      </p>
      <p>4. Combine the two sequences: 2 1 3 3 3 3 5 1 1 4.</p>
      <p>
        5. Convert these coordinates back to letters using the Polybius square:
        <br />
        (2,3) = H, (1,5) = E, (3,1) = L, (3,1) = L, (3,4) = O
        <br />
        So, the encrypted message is: <strong>HELLO</strong>.
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://www.geeksforgeeks.org/bifid-cipher-in-cryptography/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/bifid-cipher/
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
