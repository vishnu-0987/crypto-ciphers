import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/OctalCipherOverview";

export default function OctalCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to encode using the Octal cipher
  const encode = (text) => {
    let encodedMessage = "";
    let explanationsArray = []; // To store explanations

    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      const asciiValue = char.charCodeAt(0);
      const octalValue = asciiValue.toString(8);
      encodedMessage += octalValue;

      // Add explanation for each character
      explanationsArray.push(
        `<strong>'${char}'</strong> -> <code>${asciiValue}</code> (ASCII) -> <code>${octalValue}</code> (Octal)</br>`
      );
    }

    setExplanation(explanationsArray); // Set the explanations state
    return encodedMessage;
  };

  // Function to decode using the Octal cipher
  const decode = (text) => {
    let decodedMessage = "";
    let explanationsArray = []; // To store explanations

    for (let i = 0; i < text.length; i += 3) {
      const octalValue = text.substr(i, 3);
      const asciiValue = parseInt(octalValue, 8);
      decodedMessage += String.fromCharCode(asciiValue);

      // Add explanation for each octal value
      explanationsArray.push(
        `<code>${octalValue}</code> (Octal) -> <code>${asciiValue}</code> (ASCII) -> <strong>'${String.fromCharCode(
          asciiValue
        )}'</strong></br>`
      );
    }

    setExplanation(explanationsArray); // Set the explanations state
    return decodedMessage;
  };

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
        title={"Octal Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
