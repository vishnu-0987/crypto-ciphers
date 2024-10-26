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
        Let’s encrypt the plaintext message: <strong>"HELLO"</strong> using the
        keyword: <strong>"KEY"</strong>.
      </p>
      <p>
        1. First, create a Polybius square (5x5 grid) using the keyword "KEY"
        followed by the remaining alphabet (with I and J sharing a position):
      </p>
      <p>
        <strong>
          K E Y A B<br />
          C D F G H<br />
          I/J L M N O<br />
          P Q R S T<br />U V W X Z
        </strong>
      </p>
      <p>
        2. Convert each letter of "HELLO" to its coordinates using the Polybius
        square:
      </p>
      <p>
        <code>H = (2, 5)</code>
        <br />
        <code>E = (1, 2)</code>
        <br />
        <code>L = (3, 2)</code>
        <br />
        <code>L = (3, 2)</code>
        <br />
        <code>O = (3, 5)</code>
        <br />
      </p>
      <p>
        3. Write down the coordinates separately (rows first, then columns):
        <br />
        <code>Rows: 2 1 3 3 3</code>
        <br />
        <code>Columns: 5 2 2 2 5</code>
      </p>
      <p>
        4. Combine the two sequences into one list of coordinates: <br />
        <code>2 1 3 3 3 5 2 2 2 5</code>
      </p>
      <p>
        5. Convert these coordinates back to letters using the Polybius square:
      </p>
      <p>
        <code>(2,5) = H</code>
        <br />
        <code>(1,2) = E</code>
        <br />
        <code>(3,2) = L</code>
        <br />
        <code>(3,2) = L</code>
        <br />
        <code>(3,5) = O</code>
        <br />
      </p>
      <p>
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
