import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ROT18CipherOverview";

class ROT18Cipher {
  encrypt(text) {
    return text.replace(/[a-zA-Z]/g, function (char) {
      let baseCharCode = char <= "Z" ? 65 : 97;
      return String.fromCharCode(
        ((char.charCodeAt(0) - baseCharCode + 18) % 26) + baseCharCode
      );
    });
  }

  decrypt(text) {
    return this.encrypt(text); // ROT18 is its own inverse
  }
}

export default function ROT18CipherComponent() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  const cipher = new ROT18Cipher();

  const handleEncode = (text) => {
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${text}</code><br>`
    );

    const encodedText = cipher.encrypt(text);
    explanationsArray.push(`<br><strong>Encoding Steps:</strong><br>`);

    // Storing the formula once
    explanationsArray.push(
      `<strong>Transformation Formula:</strong><br>` +
        `<code>New Character = (Original Character Code - Base Code + 18) % 26 + Base Code</code><br><br>`
    );

    text.split("").forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let baseCharCode = char <= "Z" ? 65 : 97; // Determine base ASCII value
        let originalCharCode = char.charCodeAt(0);
        let shiftedChar = String.fromCharCode(
          ((originalCharCode - baseCharCode + 18) % 26) + baseCharCode
        );

        explanationsArray.push(
          `<code>${char}</code> is transformed to <code>${shiftedChar}</code>.<br>` +
            `Original Character Code = ${originalCharCode}, Base Code = ${baseCharCode}<br><br>`
        );
      } else {
        explanationsArray.push(
          `<code>${char}</code> is not a letter and remains unchanged.<br>`
        );
      }
    });

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return encodedText;
  };

  const handleDecode = (text) => {
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${text}</code><br>`
    );

    const decodedText = cipher.decrypt(text);
    explanationsArray.push(`<br><strong>Decoding Steps:</strong><br>`);

    // Storing the formula once
    explanationsArray.push(
      `<strong>Transformation Formula:</strong><br>` +
        `<code>New Character = (Original Character Code - Base Code + 18) % 26 + Base Code</code><br><br>`
    );

    text.split("").forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let baseCharCode = char <= "Z" ? 65 : 97; // Determine base ASCII value
        let originalCharCode = char.charCodeAt(0);
        let shiftedChar = String.fromCharCode(
          ((originalCharCode - baseCharCode + 18) % 26) + baseCharCode
        );

        explanationsArray.push(
          `<code>${char}</code> is transformed back to <code>${shiftedChar}</code>.<br>` +
            `Original Character Code = ${originalCharCode}, Base Code = ${baseCharCode}<br><br>`
        );
      } else {
        explanationsArray.push(
          `<code>${char}</code> is not a letter and remains unchanged.<br>`
        );
      }
    });

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return decodedText;
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
        title={"ROT18 Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
