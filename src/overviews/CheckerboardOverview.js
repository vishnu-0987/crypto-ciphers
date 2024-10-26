import { Typography } from "antd";

const Header = () => {
  return <h1>Checkerboard Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Checkerboard Cipher is a polygraphic substitution cipher that
        utilizes a 5x5 grid to encode messages. It is based on the Polybius
        square, where letters are replaced by their coordinates in the grid.
        This cipher rearranges characters based on their positions, enhancing
        the complexity of the encrypted message.
      </p>
      <p>
        In this cipher, the letter 'J' is typically omitted or combined with 'I'
        ', allowing for 25 letters to fit into the grid. The resulting
        arrangement facilitates flexible encryption schemes and can include
        various symbols as needed.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: <strong>"HELLO"</strong> using the
        Checkerboard Cipher with the keyword <strong>"KEYWORD"</strong>.
      </p>
      <p>
        1. Create a 5x5 checkerboard grid using the letters from the keyword,
        filling in the remaining letters of the alphabet (I and J share a
        position):
      </p>
      <p>
        <strong>
          K E Y W O<br />
          R A B C D<br />
          F G H I/J L<br />
          M N P Q S<br />T U V X Z
        </strong>
      </p>
      <p>
        2. Write the message in the grid by identifying the coordinates of each
        character:
      </p>
      <p>
        <strong>
          H: 3,3
          <br />
          E: 1,2
          <br />
          L: 3,5
          <br />
          L: 3,5
          <br />
          O: 1,5
          <br />
        </strong>
      </p>
      <p>
        3. The encrypted message will be formed by combining the coordinates:
      </p>
      <p>
        <strong>332335</strong>
      </p>
      <p>
        4. Thus, the final encrypted message for "HELLO" will be{" "}
        <strong>"332335"</strong>.
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://en.wikipedia.org/wiki/Checkerboard_cipher"
        target="_blank"
        rel="noopener noreferrer"
      >
        Checkerboard Cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
