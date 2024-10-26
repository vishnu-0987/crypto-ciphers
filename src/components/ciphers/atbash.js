// AtbashCipher.js
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/AtbashOverview";

export default function AtbashCipher() {
  // Initialize state for showing the overview and explanations
  const [showOverview, setShowOverview] = useState(false);
  const [explanations, setExplanations] = useState([]); // State for explanations

  const encode = (text) => {
    let encoded = "";
    let explanationsArray = [];

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      let encodedChar = text[i];
      let explanationText = "";

      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        encodedChar = String.fromCharCode(155 - charCode);
        explanationText = `<code>'<strong>${
          text[i]
        }' (ASCII: ${charCode}</strong>)</code> - flipped to <code>'<strong>${encodedChar}' (ASCII: ${encodedChar.charCodeAt(
          0
        )})</strong></code><br>`;
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        encodedChar = String.fromCharCode(219 - charCode);
        explanationText = `<code>'${
          text[i]
        }' (<strong>ASCII: ${charCode}</strong>)</code> - flipped to <code>'${encodedChar}' (<strong>ASCII: ${encodedChar.charCodeAt(
          0
        )}</strong>)</code><br>`;
      } else {
        // Non-alphabetic characters remain unchanged
        explanationText = `<code>'${text[i]}'</code> is a non-alphabetic character and remains unchanged.<br>`;
      }

      encoded += encodedChar; // Add encoded character to result
      explanationsArray.push(explanationText); // Add explanation to array
    }

    setExplanations(explanationsArray); // Set the explanation array
    return encoded; // Return the encoded text
  };

  const decode = (text) => {
    return encode(text); // Atbash encoding and decoding are the same
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
        title={"Atbash Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanations} // Pass the explanations to CipherFactory
      />
    </>
  );
}
