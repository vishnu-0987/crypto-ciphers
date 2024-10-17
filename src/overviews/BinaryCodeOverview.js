import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Binary Code Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Binary Code Cipher is a simple method of encoding text by converting
        each character into its binary representation. In this cipher, each
        letter of the plaintext is translated into an 8-bit binary number based
        on its ASCII value. This method is straightforward and often used in
        computer science to represent text data in a binary format.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let’s encrypt the plaintext message: "HELLO".</p>
      <p>1. Convert each character of "HELLO" to its ASCII value:</p>
      <p>H = 72, E = 69, L = 76, L = 76, O = 79</p>
      <p>2. Convert each ASCII value to an 8-bit binary number:</p>
      <p>
        H = 01001000, E = 01000101, L = 01001100, L = 01001100, O = 01001111
      </p>
      <p>3. Combine the binary values to get the final encrypted message:</p>
      <p>
        <strong>
          HELLO in Binary: 01001000 01000101 01001100 01001100 01001111
        </strong>
      </p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://www.sciencefriday.com/wp-content/uploads/2015/08/UTF8-Table-7802.png"
          alt="Binary Code Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://starwars.fandom.com/wiki/Binary_code_cipher"
        target="_blank"
      >
        https://starwars.fandom.com/wiki/Binary_code_cipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
