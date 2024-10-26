import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BellasoOverview";

export default function BellasoCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function encode(plaintext, keyword) {
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");
    let ciphertext = "";
    let explanationsArray = [];

    explanationsArray.push(
      `<strong>Encoding Process:</strong><br>Plaintext: <code>${plaintext}</code><br>Keyword: <code>${keyword}</code><br>`
    );

    for (let i = 0; i < plaintext.length; i++) {
      let plainChar = plaintext.charCodeAt(i) - 65; // Convert to 0-25 range
      let keyChar = keyword.charCodeAt(i % keyword.length) - 65; // Repeat keyword
      let encryptedChar = (plainChar + keyChar) % 26; // Encrypt

      // Add explanation for this step
      explanationsArray.push(
        `<code>${plaintext.charAt(i)}</code> (ASCII: ${plaintext.charCodeAt(
          i
        )}) + <code>${keyword.charAt(
          i % keyword.length
        )}</code> (ASCII: ${keyword.charCodeAt(
          i % keyword.length
        )}) = <code>${String.fromCharCode(encryptedChar + 65)}</code> (ASCII: ${
          encryptedChar + 65
        })<br>`
      );

      ciphertext += String.fromCharCode(encryptedChar + 65); // Append to ciphertext
    }

    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );

    setExplanation(explanationsArray);
    return ciphertext;
  }

  function decode(ciphertext, keyword) {
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    keyword = keyword.toUpperCase().replace(/[^A-Z]/g, "");
    let plaintext = "";
    let explanationsArray = [];

    explanationsArray.push(
      `<strong>Decoding Process:</strong><br>Ciphertext: <code>${ciphertext}</code><br>Keyword: <code>${keyword}</code><br>`
    );

    for (let i = 0; i < ciphertext.length; i++) {
      let cipherChar = ciphertext.charCodeAt(i) - 65; // Convert to 0-25 range
      let keyChar = keyword.charCodeAt(i % keyword.length) - 65; // Repeat keyword
      let decryptedChar = (cipherChar - keyChar + 26) % 26; // Decrypt

      // Add explanation for this step
      explanationsArray.push(
        `<code>${ciphertext.charAt(i)}</code> (ASCII: ${ciphertext.charCodeAt(
          i
        )}) - <code>${keyword.charAt(
          i % keyword.length
        )}</code> (ASCII: ${keyword.charCodeAt(
          i % keyword.length
        )}) = <code>${String.fromCharCode(decryptedChar + 65)}</code> (ASCII: ${
          decryptedChar + 65
        })<br>`
      );

      plaintext += String.fromCharCode(decryptedChar + 65); // Append to plaintext
    }

    explanationsArray.push(
      `<strong>Final Plaintext:</strong> <code>${plaintext}</code><br>`
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
        title={"Bellaso Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
        keyComponentA={"STR"}
      />
    </>
  );
}
