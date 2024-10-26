import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ADFGVXOverview";

export default function ADFGVX() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  const polybiusSquare = [
    ["A", "D", "F", "G", "V", "X"],
    ["A", "B", "C", "D", "E", "F"],
    ["G", "H", "I", "J", "K", "L"],
    ["M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X"],
    ["Y", "Z", "0", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9"],
  ];

  function createPolybiusSquare(keyword) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    keyword = keyword.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let square = [];
    let usedChars = new Set();

    for (let char of keyword) {
      if (!usedChars.has(char)) {
        square.push(char);
        usedChars.add(char);
      }
    }

    for (let char of alphabet) {
      if (!usedChars.has(char)) {
        square.push(char);
        usedChars.add(char);
      }
    }

    let matrix = [];
    for (let i = 0; i < 6; i++) {
      matrix.push(square.slice(i * 6, i * 6 + 6));
    }

    return matrix;
  }

  function getCoordinates(char, square) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (square[i][j] === char) {
          return [polybiusSquare[0][i], polybiusSquare[0][j]];
        }
      }
    }
    return null;
  }

  function encode(plaintext, keyword, transpositionKey) {
    let square = createPolybiusSquare(keyword);
    plaintext = plaintext.toUpperCase().replace(/[^A-Z0-9]/g, "");
    let coordinates = [];
    let explanationsArray = []; // Explanation array for encoding

    explanationsArray.push(
      `<strong>Plaintext:</strong> <code>${plaintext}</code><br><strong>Keyword:</strong> <code>${keyword}</code><br><strong>Transposition Key:</strong> <code>${transpositionKey}</code><br>`
    );

    for (let char of plaintext) {
      const coords = getCoordinates(char, square);
      coordinates.push(...coords);

      // Add explanation for this step
      explanationsArray.push(
        `<code>${char}</code> is converted to coordinates <code>${coords.join(
          ""
        )}</code><br>`
      );
    }

    let transposedText = "";
    let transpositionKeyLength = transpositionKey.length;
    let numRows = Math.ceil(coordinates.length / transpositionKeyLength);
    let grid = Array.from({ length: numRows }, () =>
      new Array(transpositionKeyLength).fill("")
    );

    for (let i = 0; i < coordinates.length; i++) {
      grid[Math.floor(i / transpositionKeyLength)][i % transpositionKeyLength] =
        coordinates[i];
    }

    let sortedKey = transpositionKey
      .split("")
      .map((char, index) => ({ char, index }))
      .sort((a, b) => a.char.localeCompare(b.char));
    for (let { index } of sortedKey) {
      for (let row = 0; row < numRows; row++) {
        if (grid[row][index] !== "") {
          transposedText += grid[row][index];
        }
      }
    }

    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${transposedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return transposedText;
  }

  function decode(ciphertext, keyword, transpositionKey) {
    let square = createPolybiusSquare(keyword);
    let transpositionKeyLength = transpositionKey.length;
    let numRows = Math.ceil(ciphertext.length / transpositionKeyLength);
    let grid = Array.from({ length: numRows }, () =>
      new Array(transpositionKeyLength).fill("")
    );

    let sortedKey = transpositionKey
      .split("")
      .map((char, index) => ({ char, index }))
      .sort((a, b) => a.char.localeCompare(b.char));
    let charIndex = 0;

    for (let { index } of sortedKey) {
      for (let row = 0; row < numRows; row++) {
        if (charIndex < ciphertext.length) {
          grid[row][index] = ciphertext[charIndex++];
        }
      }
    }

    let coordinates = [];
    for (let row of grid) {
      for (let char of row) {
        if (char !== "") {
          coordinates.push(char);
        }
      }
    }

    let plaintext = "";
    let explanationsArray = []; // Explanation array for decoding

    explanationsArray.push(
      `<strong>Decoding Process:</strong><br>Ciphertext: <code>${ciphertext}</code><br>Keyword: <code>${keyword}</code><br>Transposition Key: <code>${transpositionKey}</code><br>`
    );

    for (let i = 0; i < coordinates.length; i += 2) {
      let row = polybiusSquare[0].indexOf(coordinates[i]);
      let col = polybiusSquare[0].indexOf(coordinates[i + 1]);
      plaintext += square[row][col];

      // Add explanation for this step
      explanationsArray.push(
        `<code>${coordinates[i]}${
          coordinates[i + 1]
        }</code> maps back to <code>${square[row][col]}</code><br>`
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
        title={"ADFGVX Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
        keyComponentA={"STR"}
        keyComponentB={"STR"}
      />
    </>
  );
}
