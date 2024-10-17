import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";

import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BeaufortOverview";

export default function BeaufortCipher() {
  const [showOverview, setShowOverview] = useState(false);

  // Function to encrypt plaintext using the Autokey cipher
  // Function to encrypt the plaintext using the Beaufort Cipher
  function encode(plaintext, keyword) {
    let ciphertext = "";
    for (let i = 0; i < plaintext.length; i++) {
      let plainChar = plaintext.charAt(i).toUpperCase();
      let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
      let shift = keyChar.charCodeAt(0) - 65;
      let cipherChar = String.fromCharCode(
        ((shift - (plainChar.charCodeAt(0) - 65) + 26) % 26) + 65
      );
      ciphertext += cipherChar;
    }
    return ciphertext;
  }

  // Function to decrypt the ciphertext using the Beaufort Cipher
  function decode(ciphertext, keyword) {
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
      let cipherChar = ciphertext.charAt(i).toUpperCase();
      let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
      let shift = keyChar.charCodeAt(0) - 65;
      let plainChar = String.fromCharCode(
        ((shift - (cipherChar.charCodeAt(0) - 65) + 26) % 26) + 65
      );
      plaintext += plainChar;
    }
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
        keyComponentA={"STR"}
      />
    </>
  );
}
