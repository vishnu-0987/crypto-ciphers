import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

// TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BifidOverview";

export default function BifidCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]);

  function generatePolybiusSquare(keyword) {
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // J is replaced with I
    keyword = keyword.toUpperCase().replace(/J/g, "I");
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

    return square;
  }

  function getCoordinates(char, square) {
    let index = square.indexOf(char);
    return [Math.floor(index / 5), index % 5];
  }

  function encode(plaintext, keyword) {
    setExplanation([]); // Clear previous explanations
    plaintext = plaintext
      .toUpperCase()
      .replace(/J/g, "I")
      .replace(/[^A-Z]/g, "");
    let square = generatePolybiusSquare(keyword);
    let coordinates = [];

    // 1. Generate Polybius square explanation
    setExplanation((prev) => [
      ...prev,
      `<strong>Polybius Square:</strong> <code>${square.join("")}</code><br>`,
    ]);

    // 2. Get coordinates for each character
    setExplanation((prev) => [
      ...prev,
      `<strong>Plaintext:</strong> <code>${plaintext}</code><br>`,
    ]);
    for (let char of plaintext) {
      let coord = getCoordinates(char, square);
      coordinates.push(...coord);
      setExplanation((prev) => [
        ...prev,
        `<code>${char} -> Row: ${coord[0] + 1}, Col: ${
          coord[1] + 1
        }</code><br>`,
      ]);
    }

    // 3. Split coordinates into rows and columns
    setExplanation((prev) => [
      ...prev,
      `<code>Coordinates (Row first): ${coordinates.join(", ")}</code><br>`,
    ]);
    let newCoordinates = [];
    for (let i = 0; i < coordinates.length / 2; i++) {
      newCoordinates.push([
        coordinates[i],
        coordinates[Math.floor(coordinates.length / 2) + i],
      ]);
    }

    // 4. Reconstruct ciphertext using new coordinates
    setExplanation((prev) => [
      ...prev,
      `<br><strong>Reconstructing ciphertext from new coordinates:</strong><br>`,
    ]);
    let ciphertext = "";
    for (let [row, col] of newCoordinates) {
      let cipherChar = square[row * 5 + col];
      ciphertext += cipherChar;
      setExplanation((prev) => [
        ...prev,
        `<code>Row: ${row + 1}, Col: ${col + 1} -> ${cipherChar}</code><br>`,
      ]);
    }

    setExplanation((prev) => [
      ...prev,
      `<br><strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`,
    ]);
    return ciphertext;
  }

  function decode(ciphertext, keyword) {
    setExplanation([]); // Clear previous explanations
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    let square = generatePolybiusSquare(keyword);
    let coordinates = [];

    // 1. Explain ciphertext
    setExplanation((prev) => [
      ...prev,
      `<strong>Ciphertext:</strong> <code>${ciphertext}</code><br>`,
    ]);

    // 2. Get coordinates for each character
    for (let char of ciphertext) {
      let coord = getCoordinates(char, square);
      coordinates.push(...coord);
      setExplanation((prev) => [
        ...prev,
        `<code>${char} -> Row: ${coord[0] + 1}, Col: ${
          coord[1] + 1
        }</code><br>`,
      ]);
    }

    // 3. Split coordinates into rows and columns
    let rows = coordinates.slice(0, coordinates.length / 2);
    let cols = coordinates.slice(coordinates.length / 2);

    setExplanation((prev) => [
      ...prev,
      `<code>Rows: ${rows.join(", ")}, Columns: ${cols.join(", ")}</code><br>`,
    ]);

    // 4. Reconstruct plaintext using rows and columns
    let plaintext = "";
    setExplanation((prev) => [
      ...prev,
      `<br><strong>Reconstructing plaintext:</strong><br>`,
    ]);
    for (let i = 0; i < rows.length; i++) {
      let plainChar = square[rows[i] * 5 + cols[i]];
      plaintext += plainChar;
      setExplanation((prev) => [
        ...prev,
        `<code>Row: ${rows[i] + 1}, Col: ${
          cols[i] + 1
        } -> ${plainChar}</code><br>`,
      ]);
    }

    setExplanation((prev) => [
      ...prev,
      `<br><strong>Final Plaintext: </strong><code>${plaintext}</code><br>`,
    ]);
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
        setShowOverview={setShowOverview}
        title={"Bifid Cipher"}
        encode={encode}
        decode={decode}
        keyComponentA={"STR"}
        explanation={explanation} // Show explanation in the UI
      />
    </>
  );
}
