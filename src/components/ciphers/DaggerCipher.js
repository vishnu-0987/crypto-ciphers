import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/DaggerCipherOverview"; // Adjust the import path

export default function DaggerCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Mapping of English letters to dagger symbols
  const daggerMap = {
    A: "†",
    B: "‡",
    C: "†",
    D: "‡",
    E: "†",
    F: "‡",
    G: "†",
    H: "‡",
    I: "†",
    J: "‡",
    K: "†",
    L: "‡",
    M: "†",
    N: "‡",
    O: "†",
    P: "‡",
    Q: "†",
    R: "‡",
    S: "†",
    T: "‡",
    U: "†",
    V: "‡",
    W: "†",
    X: "‡",
    Y: "†",
    Z: "‡",
    a: "†",
    b: "‡",
    c: "†",
    d: "‡",
    e: "†",
    f: "‡",
    g: "†",
    h: "‡",
    i: "†",
    j: "‡",
    k: "†",
    l: "‡",
    m: "†",
    n: "‡",
    o: "†",
    p: "‡",
    q: "†",
    r: "‡",
    s: "†",
    t: "‡",
    u: "†",
    v: "‡",
    w: "†",
    x: "‡",
    y: "†",
    z: "‡",
    " ": " ",
  };

  // Function to encrypt text using Dagger's Cipher
  function encode(plaintext) {
    const explanationsArray = []; // Array to store explanations
    let encodedChars = "";

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${plaintext}</code><br>`
    );

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];
      const daggerChar = daggerMap[char];
      encodedChars += daggerChar ? daggerChar : char;

      explanationsArray.push(
        `<code>${char}</code> → Symbol: <code>${daggerChar || char}</code><br>`
      );
    }

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encodedChars}</code><br>`
    );
    setExplanation(explanationsArray);

    return encodedChars;
  }

  // Function to decrypt text using Dagger's Cipher
  function decode(ciphertext) {
    const explanationsArray = []; // Array to store explanations
    let decryptedText = "";

    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${ciphertext}</code><br>`
    );

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];
      const originalChar = Object.keys(daggerMap).find(
        (key) => daggerMap[key] === char
      );
      decryptedText += originalChar ? originalChar : char;

      explanationsArray.push(
        `Symbol <code>${char}</code> → <code>${originalChar || char}</code><br>`
      );
    }

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decryptedText}</code><br>`
    );
    setExplanation(explanationsArray);

    return decryptedText;
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
        title={"Dagger Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
