import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";

import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BCDOverview";

export default function BinaryEncodedDecimal() {
  const [showOverview, setShowOverview] = useState(false);

  // Encode decimal to BCD
  function decimalToBcd(decimal) {
    let bcd = "";
    const decimalString = decimal.toString();

    for (let i = 0; i < decimalString.length; i++) {
      const digit = parseInt(decimalString[i]);
      const bcdDigit = digit.toString(2).padStart(4, "0");
      bcd += bcdDigit;
    }

    return bcd;
  }

  // Decode BCD to decimal
  function bcdToDecimal(bcd) {
    let decimal = "";
    for (let i = 0; i < bcd.length; i += 4) {
      const digit = parseInt(bcd.substr(i, 4), 2);
      decimal += digit.toString();
    }

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
      />
    </>
  );
}
