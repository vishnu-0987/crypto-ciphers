import React from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/AutoKeyOverview";

export default function AutoKey() {
  const [showOverview, setShowOverview] = React.useState(false);
  const [explanations, setExplanations] = React.useState([]); // State for explanations

  // Function to encrypt plaintext using the Autokey cipher
  function encode(plaintext, key) {
    let ciphertext = "";
    let keyIndex = 0;
    const explanationsArray = [];

    // Prepare the input
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    // Generate the full key
    const originalKey = key;
    key = key + plaintext;

    // Explanation for key generation
    explanationsArray.push(
      `<strong>Plain Text:</strong> <code>${plaintext}</code><br>`
    );
    explanationsArray.push(
      `<strong>Generated Key:</strong> <code>${key}</code><br>`
    );

    for (let i = 0; i < plaintext.length; i++) {
      let charCode = plaintext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        let keyCode = key.charCodeAt(keyIndex) - 65;
        let addedValue = charCode - 65 + keyCode;
        let encryptedCharCode = (addedValue % 26) + 65;
        ciphertext += String.fromCharCode(encryptedCharCode);

        // Updated explanation to include HTML tags
        explanationsArray.push(
          `<code>'${String.fromCharCode(
            charCode
          )}' (ASCII: ${charCode})</code> + <code>'${String.fromCharCode(
            keyCode + 65
          )}' (ASCII: ${
            keyCode + 65
          })</code> = ${addedValue} % 26 = <code>'${String.fromCharCode(
            encryptedCharCode
          )}' (ciphertext)</code><br>`
        );

        keyIndex++;
      } else {
        ciphertext += plaintext[i];
        explanationsArray.push(
          `<code>'${plaintext[i]}'</code> is a non-alphabetic character and remains unchanged.<br>`
        );
      }
    }

    // Add the final ciphertext as a separate explanation
    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );

    setExplanations(explanationsArray);
    return ciphertext;
  }

  // Function to decrypt ciphertext using the Autokey cipher
  function decode(ciphertext, key) {
    let plaintext = "";
    let keyIndex = 0;
    const explanationsArray = [];

    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();

    const originalKey = key;
    key += ciphertext;

    // Explanation for key generation
    explanationsArray.push(
      `<strong>Generated Key:</strong> <code>${key}</code><br>`
    );

    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ciphertext.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        let keyCode = key.charCodeAt(keyIndex) - 65;
        let subtractedValue = charCode - 65 - keyCode + 26;
        let decryptedCharCode = (subtractedValue % 26) + 65;
        plaintext += String.fromCharCode(decryptedCharCode);

        // Updated explanation to include HTML tags
        explanationsArray.push(
          `<code>'${String.fromCharCode(
            charCode
          )}' (ASCII: ${charCode})</code> - <code>'${String.fromCharCode(
            keyCode + 65
          )}' (ASCII: ${
            keyCode + 65
          })</code> = ${subtractedValue} % 26 = <code>'${String.fromCharCode(
            decryptedCharCode
          )}' (plaintext)</code><br>`
        );

        keyIndex++;
      } else {
        plaintext += ciphertext[i];
        explanationsArray.push(
          `<code>'${ciphertext[i]}'</code> is a non-alphabetic character and remains unchanged.<br>`
        );
      }
    }

    // Add the final plaintext as a separate explanation
    explanationsArray.push(
      `<strong>Final Plaintext:</strong> <code>${plaintext}</code><br>`
    );

    setExplanations(explanationsArray);
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
        title={"AutoKey Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={"STR"}
        explanation={explanations} // Pass explanations to CipherFactory
      />
    </>
  );
}
