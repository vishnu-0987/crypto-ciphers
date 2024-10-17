// CaesarCipher.js
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/CaesarOverview";

export default function CaesarCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State for explanations

  function encode(str, shift) {
    const chars = str.split("");
    const encodedChars = [];
    const explanationsArray = [];

    chars.forEach((char) => {
      const charCode = char.charCodeAt(0);
      let newCharCode = charCode + shift;
      let explanationText = "";

      if (char >= "A" && char <= "Z") {
        const base = 65; // ASCII code for 'A'
        const alphabetSize = 26;
        const originalPosition = charCode - base;
        const shiftedPosition = (originalPosition + shift) % alphabetSize;
        // Handle negative shifts
        newCharCode =
          shiftedPosition >= 0
            ? base + shiftedPosition
            : base + shiftedPosition + alphabetSize;
        const shiftedChar = String.fromCharCode(newCharCode);

        explanationText = `'${char}' is an uppercase letter - shift ${shift} places :> '${shiftedChar}'`;
      } else if (char >= "a" && char <= "z") {
        const base = 97; // ASCII code for 'a'
        const alphabetSize = 26;
        const originalPosition = charCode - base;
        const shiftedPosition = (originalPosition + shift) % alphabetSize;
        // Handle negative shifts
        newCharCode =
          shiftedPosition >= 0
            ? base + shiftedPosition
            : base + shiftedPosition + alphabetSize;
        const shiftedChar = String.fromCharCode(newCharCode);

        explanationText = `'${char}' is a lowercase letter - shift ${shift} places :> '${shiftedChar}'`;
      } else {
        // Non-alphabetic characters remain unchanged
        explanationText = `'${char}' is a non-alphabetic character and remains unchanged.`;
      }

      encodedChars.push(String.fromCharCode(newCharCode));
      explanationsArray.push(explanationText);
    });

    setExplanation(explanationsArray); // Update explanations state
    return encodedChars.join("");
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
        explanation={explanation} // Pass explanations to CipherFactory
      />
    </>
  );
}
