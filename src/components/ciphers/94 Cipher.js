import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/94Overview";

export default function Cipher94() {
  const [showOverview, setShowOverview] = useState(false);

  function encode(plaintext, shift) {
    let ciphertext = "";
    for (let char of plaintext) {
      let code = char.charCodeAt(0);
      if (code >= 32 && code <= 126) {
        let newCode = ((code - 32 + shift) % 94) + 32;
        ciphertext += String.fromCharCode(newCode);
      } else {
        ciphertext += char;
      }
    }
    return ciphertext;
  }

  function decode(ciphertext, shift) {
    let plaintext = "";
    for (let char of ciphertext) {
      let code = char.charCodeAt(0);
      if (code >= 32 && code <= 126) {
        let newCode = ((code - 32 - shift + 94) % 94) + 32;
        plaintext += String.fromCharCode(newCode);
      } else {
        plaintext += char;
      }
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
        title={"94 Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA="Key A"
      />
    </>
  );
}
