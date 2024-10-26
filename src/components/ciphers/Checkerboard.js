import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/CheckerboardOverview";

export default function Checkerboard() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function generateCheckerboardSquare(keyword) {
    keyword = keyword.toUpperCase().replace(/J/g, "I");
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    let square = [];
    let usedLetters = new Set();

    for (let char of keyword) {
      if (!usedLetters.has(char)) {
        square.push(char);
        usedLetters.add(char);
      }
    }

    for (let char of alphabet) {
      if (!usedLetters.has(char)) {
        square.push(char);
        usedLetters.add(char);
      }
    }

    let matrix = [];
    for (let i = 0; i < 5; i++) {
      matrix.push(square.slice(i * 5, i * 5 + 5));
    }

    return matrix;
  }

  // Function to encrypt plaintext using the Checkerboard cipher
  function encode(plaintext, keyword) {
    let square = generateCheckerboardSquare(keyword);
    let coordinates = {};
    const explanationsArray = [];

    // Generate coordinates for each character in the square
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        coordinates[square[i][j]] = `${i + 1}${j + 1}`;
      }
    }

    plaintext = plaintext
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");

    explanationsArray.push(
      `<strong>Encoding Process:</strong><br>Plaintext: <code>${plaintext}</code><br>Keyword: <code>${keyword}</code><br>`
    );

    let ciphertext = "";
    for (let char of plaintext) {
      const coord = coordinates[char];
      ciphertext += coord;
      // Add explanation for this character
      explanationsArray.push(
        `<code>${char}</code> → <code>${coord}</code><br>`
      );
    }

    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );

    setExplanation(explanationsArray);
    return ciphertext;
  }

  // Function to decrypt ciphertext using the Checkerboard cipher
  function decode(ciphertext, keyword) {
    let square = generateCheckerboardSquare(keyword);
    let coordinates = {};
    const explanationsArray = [];

    // Generate coordinates for each character in the square
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        coordinates[`${i + 1}${j + 1}`] = square[i][j];
      }
    }

    explanationsArray.push(
      `<strong>Decoding Process:</strong><br>Ciphertext: <code>${ciphertext}</code><br>Keyword: <code>${keyword}</code><br>`
    );

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += 2) {
      let coord = ciphertext.substring(i, i + 2);
      const char = coordinates[coord];
      plaintext += char;
      // Add explanation for this coordinate
      explanationsArray.push(
        `<code>${coord}</code> → <code>${char}</code><br>`
      );
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
        title={"Checkerboard Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
        keyComponentA={"STR"}
      />
    </>
  );
}
