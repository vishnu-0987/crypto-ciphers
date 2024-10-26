import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ElianScriptCipherOverview";

export default function ElianScriptCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Mapping of English letters to Elian script symbols
  const elianCipherMap = {
    A: "ﬧ",
    B: "コ",
    C: "┘",
    D: "п",
    E: "ߛ",
    F: "ப",
    G: "厂",
    H: "ⵎ",
    I: "ட",
    J: "ᒣ",
    K: "ᓗ",
    L: "ᒧ",
    M: "ᒉ",
    N: "ᑭ",
    O: "ᘂ",
    P: "ᒥ",
    Q: "ᓕ",
    R: "ᒪ",
    S: "ᒭ",
    T: "ᓘ",
    U: "ᒨ",
    V: "ᒕ",
    W: "ᑮ",
    X: "ᒎ",
    Y: "ᓟ",
    Z: "ᓛ",
  };

  // Reverse mapping for decoding
  const reverseElianCipherMap = Object.fromEntries(
    Object.entries(elianCipherMap).map(([key, value]) => [value, key])
  );

  // Function to encode text using Elian Script Cipher
  const encode = (text) => {
    const explanationsArray = []; // Array to store explanations
    let encoded = "";
    text = text.toUpperCase();

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${text}</code><br>`
    );

    for (let char of text) {
      if (elianCipherMap[char]) {
        encoded += elianCipherMap[char];
        explanationsArray.push(
          `<code>${char}</code> → Symbol: <code>${elianCipherMap[char]}</code><br>`
        );
      } else {
        encoded += char; // Keep unknown characters as they are
        explanationsArray.push(
          `<code>${char}</code> → No mapping available, remains unchanged<br>`
        );
      }
    }

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encoded}</code><br>`
    );
    setExplanation(explanationsArray);

    return encoded;
  };

  // Function to decode text using Elian Script Cipher
  const decode = (text) => {
    const explanationsArray = []; // Array to store explanations
    let decoded = "";

    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${text}</code><br>`
    );

    for (let char of text) {
      if (reverseElianCipherMap[char]) {
        decoded += reverseElianCipherMap[char];
        explanationsArray.push(
          `<code>${char}</code> → Letter: <code>${reverseElianCipherMap[char]}</code><br>`
        );
      } else {
        decoded += char; // Keep unknown characters as they are
        explanationsArray.push(
          `<code>${char}</code> → No mapping available, remains unchanged<br>`
        );
      }
    }

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decoded}</code><br>`
    );
    setExplanation(explanationsArray);

    return decoded;
  };

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
        title={"Elian Script Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
