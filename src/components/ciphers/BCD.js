import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BCDOverview";

export default function BinaryEncodedDecimal() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Encode decimal to BCD
  function decimalToBcd(decimal) {
    let bcd = "";
    let explanationsArray = [];
    const decimalString = decimal.toString();

    explanationsArray.push(
      `<strong>Converting the decimal number: </strong><code>${decimal}</code><br>`
    );

    // Loop through each digit of the decimal number
    for (let i = 0; i < decimalString.length; i++) {
      const digit = parseInt(decimalString[i]); // Get the current digit
      const bcdDigit = digit.toString(2).padStart(4, "0"); // Convert to binary, pad to 4 bits

      explanationsArray.push(
        `Digit <code>${digit}</code> is converted to BCD: <code>${bcdDigit}</code><br>`
      );
      bcd += bcdDigit;
    }

    explanationsArray.push(
      `<strong>The entire BCD encoded value is: </strong><code>${bcd}</code><br>`
    );
    setExplanation(explanationsArray);

    return bcd;
  }

  // Decode BCD to decimal
  function bcdToDecimal(bcd) {
    let decimal = "";
    let explanationsArray = [];

    explanationsArray.push(
      `<strong>Converting the BCD value: </strong><code>${bcd}</code><br>`
    );

    // Process every 4 bits (1 BCD digit)
    for (let i = 0; i < bcd.length; i += 4) {
      const digit = parseInt(bcd.substr(i, 4), 2); // Convert 4-bit group to decimal

      explanationsArray.push(
        `The BCD group <code>${bcd.substr(
          i,
          4
        )}</code> is converted back to digit: <code>${digit}</code><br>`
      );
      decimal += digit.toString();
    }

    explanationsArray.push(
      `<strong>The entire decoded decimal value is: </strong><code>${parseInt(
        decimal,
        10
      )}</code><br>`
    );
    setExplanation(explanationsArray);

    return parseInt(decimal, 10);
  }

  return (
    <>
      {showOverview && (
        <CipherOverview
          setShowOverview={setShowOverview}
          Header={Header}
          Description={Description}
          Example={Example}
          References={References}
        />
      )}
      <CipherFactory
        title={"BCD Encoding"}
        setShowOverview={setShowOverview}
        encode={decimalToBcd}
        decode={bcdToDecimal}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
