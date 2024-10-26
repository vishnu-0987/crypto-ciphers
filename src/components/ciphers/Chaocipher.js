import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

// Import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ChaoOverview";

export default function ChaoCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function createFullAlphabet(startLetter) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = alphabet.indexOf(startLetter.toUpperCase());
    return alphabet.slice(index) + alphabet.slice(0, index);
  }

  function rotateDisks(leftAlphabet, rightAlphabet, rotationCount) {
    // Rotate left alphabet
    leftAlphabet =
      leftAlphabet.slice(rotationCount) + leftAlphabet.slice(0, rotationCount);
    // Move second letter to end
    leftAlphabet = leftAlphabet[0] + leftAlphabet.slice(2) + leftAlphabet[1];

    // Rotate right alphabet
    rightAlphabet =
      rightAlphabet.slice(rotationCount) +
      rightAlphabet.slice(0, rotationCount);
    // Move second letter to end
    rightAlphabet =
      rightAlphabet[0] + rightAlphabet.slice(2) + rightAlphabet[1];

    return { leftAlphabet, rightAlphabet };
  }

  function encode(plaintext, leftAlphabet, rightAlphabet) {
    const explanationsArray = []; // Array to store explanations
    const rotationCount = 1;
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    let ciphertext = "";

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${plaintext}</code><br>`
    );

    for (let char of plaintext) {
      let index = leftAlphabet.indexOf(char);
      if (index === -1) {
        ciphertext += char;
        explanationsArray.push(
          `<code>${char}</code> not found in left alphabet, remains unchanged.<br>`
        );
      } else {
        const encodedChar = rightAlphabet[index];
        ciphertext += encodedChar;

        explanationsArray.push(
          `<code>${char}</code> → <code>${encodedChar}</code> (index: <code>${index}</code>)<br>`
        );

        // Rotate the disks after encoding each character
        let rotated = rotateDisks(leftAlphabet, rightAlphabet, rotationCount);
        leftAlphabet = rotated.leftAlphabet;
        rightAlphabet = rotated.rightAlphabet;
      }
    }

    explanationsArray.push(
      `<strong>Final Ciphertext:</strong> <code>${ciphertext}</code><br>`
    );
    setExplanation(explanationsArray);

    return ciphertext;
  }

  function decode(ciphertext, leftAlphabet, rightAlphabet) {
    const explanationsArray = []; // Array to store explanations
    const rotationCount = 1;
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    let plaintext = "";

    explanationsArray.push(
      `<strong>Decoding Process:</strong><br>Ciphertext: <code>${ciphertext}</code><br>`
    );

    for (let char of ciphertext) {
      let index = rightAlphabet.indexOf(char);
      if (index === -1) {
        plaintext += char;
        explanationsArray.push(
          `<code>${char}</code> not found in right alphabet, remains unchanged.<br>`
        );
      } else {
        const decodedChar = leftAlphabet[index];
        plaintext += decodedChar;

        explanationsArray.push(
          `<code>${char}</code> → <code>${decodedChar}</code> (index: <code>${index}</code>)<br>`
        );

        // Rotate the disks after decoding each character
        let rotated = rotateDisks(leftAlphabet, rightAlphabet, rotationCount);
        leftAlphabet = rotated.leftAlphabet;
        rightAlphabet = rotated.rightAlphabet;
      }
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
        title={"Chao Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={"STR"}
        keyComponentB={"STR"}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
