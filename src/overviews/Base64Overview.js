const Header = () => {
  return <h1>Base64 Encoding</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        Base64 Encoding is a method used to encode binary data into ASCII text,
        making it suitable for transfer over media that are designed to deal
        with text. This encoding represents binary data using only 64 different
        ASCII characters (hence "Base64"). It is commonly used in encoding email
        attachments, images, or data in web applications.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let's take the plaintext message: "HELLO".</p>
      <p>
        Base64 encoding converts this message into binary data, then divides it
        into groups of 6 bits, and finally maps it to a set of 64 characters.
      </p>

      <p>
        1. First, convert the message into its ASCII values:
        <br />H → 72, E → 69, L → 76, L → 76, O → 79.
      </p>

      <p>
        2. Then, convert the ASCII values into binary:
        <br />
        72 → 01001000, 69 → 01000101, 76 → 01001100, 76 → 01001100, 79 →
        01001111.
      </p>

      <p>
        3. Next, divide the binary stream into 6-bit chunks:
        <br />
        010010 000100 010101 001100 010011 000100 1111.
      </p>

      <p>
        4. Map these chunks to Base64 characters:
        <br />
        010010 → S, 000100 → E, 010101 → V, 001100 → M, 010011 → T, 000100 → E,
        1111 → P (with padding).
      </p>

      <p>
        So, the Base64 encoded message is: <strong>SEVMTE8=</strong> (note the
        '=' padding).
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a href="https://en.wikipedia.org/wiki/Base64" target="_blank">
        https://en.wikipedia.org/wiki/Base64
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
