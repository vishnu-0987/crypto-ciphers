import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path if necessary
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/DancingMenCipherOverview"; // Adjust the import path

// Define the mapping between the alphabet and dancing men symbols
const dancingMenAlphabet = {
  A: "🕺",
  B: "💃",
  C: "👯",
  D: "🕴️",
  E: "🧍",
  F: "🧎",
  G: "🕺🏽",
  H: "💃🏽",
  I: "👯🏽",
  J: "🕴️🏽",
  K: "🧍🏽",
  L: "🧎🏽",
  M: "🕺🏿",
  N: "💃🏿",
  O: "👯🏿",
  P: "🕴️🏿",
  Q: "🧍🏿",
  R: "🧎🏿",
  S: "🕺🏻",
  T: "💃🏻",
  U: "👯🏻",
  V: "🕴️🏻",
  W: "🧍🏻",
  X: "🧎🏻",
  Y: "🕺🏾",
  Z: "💃🏾",
};

const reverseDancingMenAlphabet = Object.keys(dancingMenAlphabet).reduce(
  (obj, key) => {
    obj[dancingMenAlphabet[key]] = key;
    return obj;
  },
  {}
);

// Function to encrypt a message using the Dancing Men Cipher
function encryptDancingMen(message) {
  return message
    .toUpperCase()
    .split("")
    .map((char) => dancingMenAlphabet[char] || char)
    .join("");
}

// Function to decrypt a message using the Dancing Men Cipher
function decryptDancingMen(encryptedMessage) {
  return encryptedMessage
    .split("")
    .map((symbol) => reverseDancingMenAlphabet[symbol] || symbol)
    .join("");
}

export default function DancingMenCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  const encode = (plaintext) => {
    const explanationsArray = []; // Array to store explanations
    const encryptedText = encryptDancingMen(plaintext);

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${plaintext}</code><br>`
    );

    plaintext
      .toUpperCase()
      .split("")
      .forEach((char, index) => {
        explanationsArray.push(
          `<code>${char}</code> → Symbol: <code>${
            dancingMenAlphabet[char] || char
          }</code><br>`
        );
      });

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encryptedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return encryptedText;
  };

  const decode = (ciphertext) => {
    const explanationsArray = []; // Array to store explanations
    const decryptedText = decryptDancingMen(ciphertext);

    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${ciphertext}</code><br>`
    );

    ciphertext.split("").forEach((symbol) => {
      explanationsArray.push(
        `Symbol <code>${symbol}</code> → <code>${
          reverseDancingMenAlphabet[symbol] || symbol
        }</code><br>`
      );
    });

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decryptedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return decryptedText;
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
        title={"Dancing Men Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
