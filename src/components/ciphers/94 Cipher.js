import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

// Import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/94Overview";

export default function Cipher94() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function encode(plaintext, shift) {
    const explanationsArray = [];
    let ciphertext = "";

    for (let char of plaintext) {
      let code = char.charCodeAt(0);
      if (code >= 32 && code <= 126) {
        let newCode = ((code - 32 + shift) % 94) + 32;
        ciphertext += String.fromCharCode(newCode);

        // Add explanation for this character
        explanationsArray.push(
          `<code>${char}</code> (ASCII: <code>${code}</code>) + <code>${shift}</code> → <code>${String.fromCharCode(
            newCode
          )}</code> (ASCII: <code>${newCode}</code>)<br>`
        );
      } else {
        ciphertext += char;
        explanationsArray.push(
          `<code>${char}</code> (ASCII: <code>${code}</code>) remains unchanged<br>`
        );
      }
    }

    explanationsArray.unshift(
      `<strong>Plaintext:</strong> <code>${plaintext}</code><br>`
    );
    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );

    setExplanation(explanationsArray);
    return ciphertext;
  }

  function decode(ciphertext, shift) {
    const explanationsArray = [];
    let plaintext = "";

    for (let char of ciphertext) {
      let code = char.charCodeAt(0);
      if (code >= 32 && code <= 126) {
        let newCode = ((code - 32 - shift + 94) % 94) + 32;
        plaintext += String.fromCharCode(newCode);

        // Add explanation for this character
        explanationsArray.push(
          `<code>${char}</code> (ASCII: <code>${code}</code>) - <code>${shift}</code> → <code>${String.fromCharCode(
            newCode
          )}</code> (ASCII: <code>${newCode}</code>)<br>`
        );
      } else {
        plaintext += char;
        explanationsArray.push(
          `<code>${char}</code> (ASCII: <code>${code}</code>) remains unchanged<br>`
        );
      }
    }

    explanationsArray.unshift(
      `<strong>Ciphertext: </strong><code>${ciphertext}</code><br><br>`
    );
    explanationsArray.push(
      `<br><br><strong>Final Plaintext:</strong> <code>${plaintext}</code><br>`
    );

    setExplanation(explanationsArray);
    return plaintext;
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
        title={"94 Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA="Shift"
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
