import { Typography, Image } from "antd";

const Header = () => {
  return <h1>Chao Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The Chao Cipher is a substitution cipher that replaces each letter in
        the plaintext with a corresponding letter from a predefined mapping. It
        is designed to be simple yet effective, providing a basic level of
        encryption suitable for educational purposes and introductory
        cryptography.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let’s encrypt the plaintext message: "HELLO" using the Chao Cipher.</p>
      <p>1. Consider the following mapping for the Chao Cipher:</p>
      <p>
        <strong>
          A → M<br />
          B → N<br />
          C → O<br />
          D → P<br />
          E → Q<br />
          F → R<br />
          G → S<br />
          H → T<br />
          I → U<br />
          J → V<br />
          K → W<br />
          L → X<br />
          M → Y<br />
          N → Z<br />
          O → A<br />
          P → B<br />
          Q → C<br />
          R → D<br />
          S → E<br />
          T → F<br />U → G
        </strong>
      </p>
      <p>2. Replace each letter in the plaintext message:</p>
      <p>
        <strong>
          H → T<br />
          E → Q<br />
          L → X<br />
          L → X<br />O → A
        </strong>
      </p>
      <p>3. The encrypted message is: "TQXXA".</p>
      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://www.inference.org.uk/cs482/projects/chaocipher/images/permute.png"
          alt="ADFGVX Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Chaocipher" target="_blank">
        https://en.wikipedia.org/wiki/Chaocipher
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
