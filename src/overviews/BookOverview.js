import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Book Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Book Cipher is a form of substitution cipher that uses a book or any
        other text as the key for encryption. Each letter or word in the
        plaintext is replaced by its corresponding position in the text. This
        method relies on a shared knowledge of the book between the sender and
        receiver, making it a simple yet effective means of encoding messages.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: "ERTERT" using the Book Cipher.
      </p>
      <p>
        1. Choose a book or text as the key. For example, consider the following
        text:
      </p>
      <p>
        <strong>
          "In the beginning, God created the heavens and the earth."
        </strong>
      </p>
      <p>2. Identify the position of each letter in the text:</p>
      <p>
        <strong>
          E → Position: 0.0
          <br />
          R → Position: 1.3
          <br />
          T → Position: 0.0
          <br />
          E → Position: 0.0
          <br />
          R → Position: 1.3
          <br />T → Position: 0.0
        </strong>
      </p>
      <p>
        3. The encrypted message using the positions is: "0.0 1.3 0.0 0.0 1.3
        0.0".
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Book_cipher" target="_blank">
        https://en.wikipedia.org/wiki/Book_cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
