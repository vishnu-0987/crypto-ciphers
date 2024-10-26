import { Typography, Image } from "antd";

const Header = () => {
  return <h1>94 Cipher</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        The 94 Cipher is a type of substitution cipher that uses the 94
        printable ASCII characters (from space to tilde `~`) to encrypt
        messages. This cipher assigns each character a unique number between 0
        and 93, enabling encryption by simply replacing each character with its
        corresponding number. It is a straightforward method that can be easily
        implemented in programming languages, making it suitable for various
        applications, including basic data obfuscation.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>
        Let’s encrypt the plaintext message: <code>"harsh"</code> using the 94
        Cipher with a shift of 4.
      </p>

      <p>
        1. Convert each character of <code>"harsh"</code> to its ASCII value and
        apply the shift:
      </p>
      <ul>
        <li>
          <code>h</code> (ASCII: 104) + 4 → <code>l</code> (ASCII: 108)
        </li>
        <li>
          <code>a</code> (ASCII: 97) + 4 → <code>e</code> (ASCII: 101)
        </li>
        <li>
          <code>r</code> (ASCII: 114) + 4 → <code>v</code> (ASCII: 118)
        </li>
        <li>
          <code>s</code> (ASCII: 115) + 4 → <code>w</code> (ASCII: 119)
        </li>
        <li>
          <code>h</code> (ASCII: 104) + 4 → <code>l</code> (ASCII: 108)
        </li>
      </ul>

      <p>2. The encoded characters are:</p>
      <p>
        <strong>
          <code>l e v w l</code>
        </strong>
      </p>

      <p>3. Final Ciphertext:</p>
      <p>
        <strong>
          <code>levwl</code>
        </strong>
      </p>

      <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        <Image
          src="https://slideplayer.com/slide/16602378/96/images/2/US+Army+M-94+Cipher+Device.jpg"
          alt="94 Cipher Example"
        />
      </div>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://en.wikipedia.org/wiki/M-94"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://en.wikipedia.org/wiki/M-94
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
