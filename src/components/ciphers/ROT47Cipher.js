//TODO: import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
//TODO: Import CipherOverview component
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ROT47CipherOverview"; // Assuming you have an overview component for ROT47Cipher

export default function ROT47Cipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to encode text using ROT47 cipher
  function encode(str) {
    const chars = str.split("");
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${str}</code><br>`
    );

    const encodedChars = chars.map((char) => {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + 47;

      if (charCode >= 33 && charCode <= 126) {
        // ASCII printable characters
        if (newCharCode > 126) {
          newCharCode = newCharCode - 94; // Wrap around within ASCII printable range
        }
      }

      // Prepare the explanation for this character
      explanationsArray.push(
        `<code>${char}</code> is transformed to <code>${String.fromCharCode(
          newCharCode
        )}</code>.<br>` +
          `Original Character Code = ${charCode}, New Character Code = ${newCharCode}<br><br>`
      );

      return String.fromCharCode(newCharCode);
    });

    setExplanation(explanationsArray);
    return encodedChars.join("");
  }

  // Function to decode text using ROT47 cipher
  function decode(str) {
    const chars = str.split("");
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${str}</code><br>`
    );

    const decodedChars = chars.map((char) => {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode - 47;

      if (charCode >= 33 && charCode <= 126) {
        // ASCII printable characters
        if (newCharCode < 33) {
          newCharCode = newCharCode + 94; // Wrap around within ASCII printable range
        }
      }

      // Prepare the explanation for this character
      explanationsArray.push(
        `<code>${char}</code> is transformed back to <code>${String.fromCharCode(
          newCharCode
        )}</code>.<br>` +
          `Original Character Code = ${charCode}, New Character Code = ${newCharCode}<br><br>`
      );

      return String.fromCharCode(newCharCode);
    });

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decodedChars.join(
        ""
      )}</code><br>`
    );

    setExplanation(explanationsArray);
    return decodedChars.join("");
  }

  //TODO:  Add the CipherOverview component in the return statement.
  //TODO:  Add title and setShowOverview attribute to the CipherFactory component.
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
        title={"ROT47 Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
