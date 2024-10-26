import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ROT13CipherOverview";

class ROT13Cipher {
  encrypt(text) {
    return text.replace(/[a-zA-Z]/g, function (char) {
      let baseCharCode = char <= "Z" ? 65 : 97;
      return String.fromCharCode(
        ((char.charCodeAt(0) - baseCharCode + 13) % 26) + baseCharCode
      );
    });
  }

  decrypt(text) {
    return this.encrypt(text); // ROT13 is its own inverse
  }
}

export default function ROT13CipherComponent() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  const cipher = new ROT13Cipher();

  const handleEncode = (text) => {
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${text}</code><br>`
    );

    const encodedText = cipher.encrypt(text);
    explanationsArray.push(`<br><strong>Encoded Characters:</strong><br>`);

    text.split("").forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let baseCharCode = char <= "Z" ? 65 : 97;
        let shiftedChar = String.fromCharCode(
          ((char.charCodeAt(0) - baseCharCode + 13) % 26) + baseCharCode
        );
        // Add detailed transformation explanation for each character
        explanationsArray.push(
          `<code>${char}</code> is transformed using the formula:<br>` +
            `<strong>New Character = (Original Character Code - Base Code + 13) % 26 + Base Code</strong><br>` +
            `Original Character Code = ${char.charCodeAt(
              0
            )}, Base Code = ${baseCharCode}<br>` +
            `New Character Code = ${shiftedChar.charCodeAt(
              0
            )} → <code>${shiftedChar}</code><br><br>`
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
    explanationsArray.push(`<br><strong>Decoded Characters:</strong><br>`);

    text.split("").forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        let baseCharCode = char <= "Z" ? 65 : 97;
        let shiftedChar = String.fromCharCode(
          ((char.charCodeAt(0) - baseCharCode + 13) % 26) + baseCharCode
        );
        // Add detailed transformation explanation for each character
        explanationsArray.push(
          `<code>${char}</code> is transformed back using the same formula:<br>` +
            `<strong>New Character = (Original Character Code - Base Code + 13) % 26 + Base Code</strong><br>` +
            `Original Character Code = ${char.charCodeAt(
              0
            )}, Base Code = ${baseCharCode}<br>` +
            `New Character Code = ${shiftedChar.charCodeAt(
              0
            )} → <code>${shiftedChar}</code><br><br>`
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
        title={"ROT13 Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
