import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BeaufortOverview";

export default function BeaufortCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to encrypt the plaintext using the Beaufort Cipher
  function encode(plaintext, keyword) {
    let ciphertext = "";
    let explanationsArray = [];

    // Step 1: Align the key with the plaintext
    explanationsArray.push(
      `<strong>Step 1:</strong> Align the key with the plaintext:<br>`
    );
    let alignedKey = keyword
      .repeat(Math.ceil(plaintext.length / keyword.length))
      .slice(0, plaintext.length)
      .toUpperCase();
    explanationsArray.push(
      `Plaintext: <code>${plaintext.toUpperCase()}</code><br>`
    );
    explanationsArray.push(`Key: <code>${alignedKey}</code><br><br>`);

    // Step 2: Encrypt each letter
    explanationsArray.push(`<strong>Step 2:</strong> Encrypt each letter:<br>`);

    for (let i = 0; i < plaintext.length; i++) {
      let plainChar = plaintext.charAt(i).toUpperCase();
      let keyChar = alignedKey.charAt(i).toUpperCase();
      let shift = keyChar.charCodeAt(0) - 65;
      let plainCharCode = plainChar.charCodeAt(0) - 65;
      let cipherCharCode = ((shift - plainCharCode + 26) % 26) + 65;
      let cipherChar = String.fromCharCode(cipherCharCode);

      explanationsArray.push(
        `<code>${plainChar}</code> (ASCII: ${plainChar.charCodeAt(
          0
        )}) encrypted with <code>${keyChar}</code> (ASCII: ${keyChar.charCodeAt(
          0
        )}) results in cipher char <code>${cipherChar}</code> (ASCII: ${cipherCharCode}) using the formula:<br> (<code>${keyChar} - ${plainChar}</code>) = <code>${cipherChar}</code><br>`
      );

      ciphertext += cipherChar;
    }

    // Step 3: Present the encrypted message
    explanationsArray.push(
      `<br><strong>Step 3:</strong> The encrypted message is: <code>${ciphertext}</code><br>`
    );

    setExplanation(explanationsArray);
    return ciphertext;
  }

  // Function to decrypt the ciphertext using the Beaufort Cipher
  function decode(ciphertext, keyword) {
    let plaintext = "";
    let explanationsArray = [];

    // Step 1: Align the key with the ciphertext
    explanationsArray.push(
      `<strong>Step 1:</strong> Align the key with the ciphertext:<br>`
    );
    let alignedKey = keyword
      .repeat(Math.ceil(ciphertext.length / keyword.length))
      .slice(0, ciphertext.length)
      .toUpperCase();
    explanationsArray.push(
      `Ciphertext: <code>${ciphertext.toUpperCase()}</code><br>`
    );
    explanationsArray.push(`Key: <code>${alignedKey}</code><br><br>`);

    // Step 2: Decrypt each letter
    explanationsArray.push(`<strong>Step 2:</strong> Decrypt each letter:<br>`);

    for (let i = 0; i < ciphertext.length; i++) {
      let cipherChar = ciphertext.charAt(i).toUpperCase();
      let keyChar = alignedKey.charAt(i).toUpperCase();
      let shift = keyChar.charCodeAt(0) - 65;
      let cipherCharCode = cipherChar.charCodeAt(0) - 65;
      let plainCharCode = ((shift - cipherCharCode + 26) % 26) + 65;
      let plainChar = String.fromCharCode(plainCharCode);

      explanationsArray.push(
        `<code>${cipherChar}</code> (ASCII: ${cipherChar.charCodeAt(
          0
        )}) decrypted with <code>${keyChar}</code> (ASCII: ${keyChar.charCodeAt(
          0
        )}) results in plaintext char <code>${plainChar}</code> (ASCII: ${plainCharCode}) using the formula:<br> (<code>${keyChar} - ${cipherChar}</code>) = <code>${plainChar}</code><br>`
      );

      plaintext += plainChar;
    }

    // Step 3: Present the decrypted message
    explanationsArray.push(
      `<br><strong>Step 3:</strong> The decrypted message is: <code>${plaintext}</code><br>`
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
        title={"Beaufort Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
        keyComponentA={"STR"} // For keyword input
      />
    </>
  );
}
