import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/NihilistCipherOverview"; // Adjust the import path

export default function NihilistCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to generate the key square based on the keyword
  function generateKeySquare(keyword) {
    keyword = keyword.toUpperCase().replace(/J/g, "I");
    const uniqueChars = [];
    for (let char of keyword) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    for (let char of alphabet) {
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    return uniqueChars.join("");
  }

  // Nihilist Cipher encryption function
  function encryptNihilist(plaintext, keyword) {
    const keySquare = generateKeySquare(keyword);
    let encryptedText = "";
    const explanationsArray = []; // Array to store explanations

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${plaintext}</code><br>`
    );

    for (let char of plaintext) {
      if (char === " ") {
        encryptedText += " ";
        explanationsArray.push(
          `<code>${char}</code> → Space: <code>${char}</code><br>`
        );
      } else {
        const index = keySquare.indexOf(char.toUpperCase());
        if (index !== -1) {
          const row = Math.floor(index / 5) + 1;
          const col = (index % 5) + 1;
          encryptedText += `${row}${col} `;
          explanationsArray.push(
            `<code>${char}</code> → <code>${row}${col}</code><br>`
          );
        }
      }
    }

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encryptedText.trim()}</code><br>`
    );
    setExplanation(explanationsArray); // Update explanation state

    return encryptedText.trim(); // Remove trailing space
  }

  // Nihilist Cipher decryption function
  function decryptNihilist(ciphertext, keyword) {
    const keySquare = generateKeySquare(keyword);
    let decryptedText = "";
    const explanationsArray = []; // Array to store explanations

    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${ciphertext}</code><br>`
    );

    const codes = ciphertext.split(" ").filter((code) => code); // Split codes and filter out empty strings
    for (let code of codes) {
      const row = parseInt(code[0]);
      const col = parseInt(code[1]);
      const index = (row - 1) * 5 + (col - 1);
      const char = keySquare[index];
      decryptedText += char;
      explanationsArray.push(`<code>${code}</code> → <code>${char}</code><br>`);
    }

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decryptedText}</code><br>`
    );
    setExplanation(explanationsArray); // Update explanation state

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
        title={"Nihilist Cipher"}
        setShowOverview={setShowOverview}
        encode={encryptNihilist}
        decode={decryptNihilist}
        explanation={explanation} // Pass explanation to CipherFactory
        keyComponentA="STR"
      />
    </>
  );
}
