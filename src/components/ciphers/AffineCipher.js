import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/AffineOverview";

export default function AffineCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State for explanations
  const [values, setValues] = useState(-1);

  // Function to encrypt a message using the affine cipher
  function encode(message, a, b) {
    message = message.toUpperCase().replace(/[^A-Z]/g, ""); // Clean input
    let result = "";
    let explanationsArray = []; // To store explanations for each step

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i) - 65; // Convert character to number between 0 and 25
      let encryptedCharCode = (a * charCode + b) % 26; // Apply affine cipher formula
      let encryptedChar = String.fromCharCode(encryptedCharCode + 65); // Convert back to letter
      result += encryptedChar; // Add to result

      // Add explanation for this character
      explanationsArray.push(
        `<strong>'${message[i]}' (ASCII: ${message.charCodeAt(
          i
        )})</strong> -> (a * ${charCode} + b) % 26 = <strong>'${encryptedChar}' (ASCII: ${encryptedChar.charCodeAt(
          0
        )})</strong></br>`
      );
    }

    setExplanation(explanationsArray); // Set explanations
    return result;
  }

  // Function to decrypt a message using the affine cipher
  function decode(ciphertext, a, b) {
    let result = "";
    let explanationsArray = []; // To store explanations for each step

    // Find the modular multiplicative inverse of 'a'
    let modularInverse = -1;
    for (let i = 0; i < 26; i++) {
      if ((i * a) % 26 === 1) {
        modularInverse = i;
        setValues(i); // Set inverse value for reuse
        break;
      }
    }

    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i) - 65; // Convert to number between 0-25
      let decryptedCharCode = (modularInverse * (charCode - b + 26)) % 26; // Apply affine cipher formula
      let decryptedChar = String.fromCharCode(decryptedCharCode + 65); // Convert back to letter
      result += decryptedChar;

      // Add explanation for this character
      explanationsArray.push(
        `<strong>'${ciphertext[i]}' (ASCII: ${ciphertext.charCodeAt(
          i
        )})</strong> -> inverse(a) * (${charCode} - b) % 26 = <strong>'${decryptedChar}' (ASCII: ${decryptedChar.charCodeAt(
          0
        )})</strong></br>`
      );
    }

    setExplanation(explanationsArray); // Set explanations
    return result;
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
        title={"Affine Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={1}
        keyComponentB={1}
        explanation={explanation} // Pass explanations to CipherFactory
      />
    </>
  );
}
