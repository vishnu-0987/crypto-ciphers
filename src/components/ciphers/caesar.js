// CaesarCipher.js
import React from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/CaesarOverview";

export default function CaesarCipher() {
  const [showOverview, setShowOverview] = React.useState(false);
  const [explanations, setExplanations] = React.useState([]); // State for explanations

  function encode(str, shift) {
    let ciphertext = "";
    const explanationsArray = [];
    const shiftVal = shift % 26; // Calculate shift value modulo 26

    explanationsArray.push(
      `<strong>Plain Text:</strong> <code>${str}</code><br>`
    );
    explanationsArray.push(
      `<strong>Shift Value:</strong> <code>${shift}</code><br>`
    );

    for (let char of str) {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + shiftVal; // Use shiftVal for calculations

      if (char >= "A" && char <= "Z") {
        const base = 65; // ASCII code for 'A'
        const alphabetSize = 26;
        const originalPosition = charCode - base;
        const shiftedPosition = (originalPosition + shiftVal) % alphabetSize;
        // Handle negative shifts
        newCharCode =
          shiftedPosition >= 0
            ? base + shiftedPosition
            : base + shiftedPosition + alphabetSize;

        const shiftedChar = String.fromCharCode(newCharCode);

        explanationsArray.push(
          `<code>'${char}'</code> (ASCII: ${charCode}) + <code>'${shiftVal}'</code> = <code>'${shiftedChar}'</code> (ciphertext)<br>`
        );

        ciphertext += shiftedChar;
      } else if (char >= "a" && char <= "z") {
        const base = 97; // ASCII code for 'a'
        const alphabetSize = 26;
        const originalPosition = charCode - base;
        const shiftedPosition = (originalPosition + shiftVal) % alphabetSize;
        // Handle negative shifts
        newCharCode =
          shiftedPosition >= 0
            ? base + shiftedPosition
            : base + shiftedPosition + alphabetSize;

        const shiftedChar = String.fromCharCode(newCharCode);

        explanationsArray.push(
          `<code>'${char}'</code> (ASCII: ${charCode}) + <code>'${shiftVal}'</code> = <code>'${shiftedChar}'</code> (ciphertext)<br>`
        );

        ciphertext += shiftedChar;
      } else {
        // Non-alphabetic characters remain unchanged
        explanationsArray.push(
          `<code>'${char}'</code> is a non-alphabetic character and remains unchanged.<br>`
        );

        ciphertext += char; // Add unchanged character to ciphertext
      }
    }

    // Add final ciphertext explanation
    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );

    setExplanations(explanationsArray); // Update explanations state
    return ciphertext; // Return the final ciphertext
  }

  function decode(str, shift) {
    return encode(str, -shift);
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
        title={"Caesar Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={3} // Example shift value; adjust as needed
        explanation={explanations} // Pass explanations to CipherFactory
      />
    </>
  );
}
