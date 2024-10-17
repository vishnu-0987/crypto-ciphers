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

  // Function to encrypt plaintext using the Autokey cipher
  function encode(plaintext, keyword) {
    let square = generateCheckerboardSquare(keyword);
    let coordinates = {};

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        coordinates[square[i][j]] = `${i + 1}${j + 1}`;
      }
    }

    plaintext = plaintext
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");
    let ciphertext = "";

    for (let char of plaintext) {
      ciphertext += coordinates[char];
    }

    return ciphertext;
  }

  // Function to decrypt ciphertext using the Autokey cipher
  function decode(ciphertext, keyword) {
    let square = generateCheckerboardSquare(keyword);
    let coordinates = {};

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        coordinates[`${i + 1}${j + 1}`] = square[i][j];
      }
    }

    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i += 2) {
      let coord = ciphertext.substring(i, i + 2);
      plaintext += coordinates[coord];
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
        title={"Checkerboard Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={"STR"}
      />
    </>
  );
}
