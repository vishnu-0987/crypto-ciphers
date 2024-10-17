import { Typography, Image } from "antd";

const Header = () => {
  return <h1>BCD Encoding</h1>;
};

const Description = () => {
  return (
    <div>
      <p>
        BCD (Binary-Coded Decimal) is a method of encoding decimal numbers in
        which each digit of a decimal number is represented by its own binary
        sequence. This allows decimal digits (0-9) to be encoded in a format
        suitable for digital systems that understand binary. BCD uses 4 bits to
        represent each decimal digit. This encoding is widely used in electronic
        systems where numeric data must be displayed or processed in decimal
        form rather than binary.
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>Let’s encode the decimal number 59 using BCD.</p>
      <p>
        1. Break down the decimal number into its individual digits: 5 and 9.
      </p>
      <p>2. Convert each digit into its 4-bit binary equivalent:</p>
      <p>
        - 5 in binary is <strong>0101</strong>.
        <br />- 9 in binary is <strong>1001</strong>.
      </p>
      <p>
        3. Combine the two binary representations to get the BCD encoding:
        <br />
        59 in BCD is: <strong>0101 1001</strong>.
      </p>
    </div>
  );
};

const References = () => {
  return (
    <div>
      <a
        href="https://www.geeksforgeeks.org/bcd-or-binary-coded-decimal/"
        target="_blank"
      >
        https://www.geeksforgeeks.org/bcd-or-binary-coded-decimal/
      </a>
    </div>
  );
};

export { Header, Description, Example, References };
