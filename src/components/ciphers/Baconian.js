import React from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/BaconianOverview";

export default function BaconianCipher() {
  const [showOverview, setShowOverview] = React.useState(false);
  const [explanation, setExplanation] = React.useState([]); // Explanation state

  // Encryption function for Baconian Cipher
  function baconianEncrypt(plaintext) {
    const baconianTable = {
      A: "AAAAA",
      B: "AAAAB",
      C: "AAABA",
      D: "AAABB",
      E: "AABAA",
      F: "AABAB",
      G: "AABBA",
      H: "AABBB",
      I: "ABAAA",
      J: "ABAAB",
      K: "ABABA",
      L: "ABABB",
      M: "ABBAA",
      N: "ABBAB",
      O: "ABBBA",
      P: "ABBBB",
      Q: "BAAAA",
      R: "BAAAB",
      S: "BAABA",
      T: "BAABB",
      U: "BABAA",
      V: "BABAB",
      W: "BABBA",
      X: "BABBB",
      Y: "BBAAA",
      Z: "BBAAB",
    };

    plaintext = plaintext.toUpperCase().replace(/\s/g, "");

    let ciphertext = "";
    let explanationsArray = [];

    for (let i = 0; i < plaintext.length; i++) {
      const baconianCode = baconianTable[plaintext[i]];

      if (baconianCode) {
        ciphertext += baconianCode;
        explanationsArray.push(
          `<strong>'${plaintext[i]}'</strong> is encoded as <code>${baconianCode}</code><br>`
        );
      } else {
        ciphertext += plaintext[i];
        explanationsArray.push(
          `<strong>'${plaintext[i]}'</strong> is not part of the cipher and remains as <code>${plaintext[i]}</code><br>`
        );
      }
    }

    setExplanation(explanationsArray);
    return ciphertext;
  }

  // Decryption function for Baconian Cipher
  function baconianDecrypt(ciphertext) {
    const baconianTable = {
      AAAAA: "A",
      AAAAB: "B",
      AAABA: "C",
      AAABB: "D",
      AABAA: "E",
      AABAB: "F",
      AABBA: "G",
      AABBB: "H",
      ABAAA: "I",
      ABAAB: "J",
      ABABA: "K",
      ABABB: "L",
      ABBAA: "M",
      ABBAB: "N",
      ABBBA: "O",
      ABBBB: "P",
      BAAAA: "Q",
      BAAAB: "R",
      BAABA: "S",
      BAABB: "T",
      BABAA: "U",
      BABAB: "V",
      BABBA: "W",
      BABBB: "X",
      BBAAA: "Y",
      BBAAB: "Z",
    };

    let plaintext = "";
    let explanationsArray = [];

    for (let i = 0; i < ciphertext.length; i += 5) {
      const group = ciphertext.substr(i, 5);
      const plaintextChar = baconianTable[group];

      if (plaintextChar) {
        plaintext += plaintextChar;
        explanationsArray.push(
          `<strong><code>${group}</code></strong> is decoded as <strong>'${plaintextChar}'</strong><br>`
        );
      } else {
        plaintext += group;
        explanationsArray.push(
          `<strong><code>${group}</code></strong> is not part of the cipher and remains as <code>${group}</code><br>`
        );
      }
    }

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
        title={"Baconian Cipher"}
        setShowOverview={setShowOverview}
        encode={baconianEncrypt}
        decode={baconianDecrypt}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
