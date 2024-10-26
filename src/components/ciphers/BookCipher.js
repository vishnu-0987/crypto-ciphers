import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

// Import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BookOverview";

const BookCipher = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function getPositionInKey(text, key) {
    const positions = [];
    const keyWords = key.toUpperCase().split(/\s+/);

    for (let char of text) {
      const charUpper = char.toUpperCase();
      let found = false;
      for (let i = 0; i < keyWords.length; i++) {
        const wordIndex = keyWords[i].indexOf(charUpper);
        if (wordIndex !== -1) {
          positions.push({ word: i + 1, char: wordIndex + 1 });
          found = true;
          break;
        }
      }
      if (!found) {
        // Handle the case where the character is not found in the key text
        positions.push({ word: 0, char: 0 });
      }
    }

    return positions;
  }

  function encode(plaintext, key) {
    const explanationsArray = []; // Array to store explanations
    plaintext = plaintext.toUpperCase();
    const positions = getPositionInKey(plaintext, key);
    explanationsArray.push(
      `<strong>Encoding Process:</strong><br>Plaintext: <code>${plaintext}</code><br>`
    );

    positions.forEach((pos, index) => {
      explanationsArray.push(
        `<code>${plaintext[index]}</code> → Position: <code>${pos.word}.${pos.char}</code><br>`
      );
    });

    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${positions
        .map((pos) => `${pos.word}.${pos.char}`)
        .join(" ")}</code><br>`
    );
    setExplanation(explanationsArray);

    return positions.map((pos) => `${pos.word}.${pos.char}`).join(" ");
  }

  function decode(ciphertext, key) {
    const explanationsArray = []; // Array to store explanations
    const keyWords = key.split(/\s+/);
    const positions = ciphertext.split(" ");
    let plaintext = "";

    explanationsArray.push(
      `<strong>Decoding Process:</strong><br>Ciphertext: <code>${ciphertext}</code><br>`
    );

    positions.forEach((pos) => {
      const [wordIndex, charIndex] = pos.split(".").map(Number);
      if (
        wordIndex > 0 &&
        charIndex > 0 &&
        keyWords[wordIndex - 1] &&
        keyWords[wordIndex - 1][charIndex - 1]
      ) {
        const decodedChar = keyWords[wordIndex - 1][charIndex - 1];
        plaintext += decodedChar;
        explanationsArray.push(
          `Position <code>${wordIndex}.${charIndex}</code> → <code>${decodedChar}</code><br>`
        );
      } else {
        plaintext += " "; // Placeholder for unfound characters
        explanationsArray.push(
          `Position <code>${wordIndex}.${charIndex}</code> → Unfound character (space)<br>`
        );
      }
    });

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
        title={"Book Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA="STR"
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
};

export default BookCipher;
