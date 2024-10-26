import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/PortaCipherOverview";

class PortaCipher {
  constructor(primaryKeyword, secondaryKeyword) {
    this.primaryKeyword = primaryKeyword.toUpperCase();
    this.secondaryKeyword = secondaryKeyword.toUpperCase();
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  charToNumber(char) {
    return this.alphabet.indexOf(char);
  }

  numberToChar(number) {
    return this.alphabet.charAt(number);
  }

  // Encrypts a plaintext message using the Porta Cipher
  encrypt(plaintext) {
    let ciphertext = "";
    const explanations = []; // Explanation array for encryption steps
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, "");

    for (let i = 0; i < plaintext.length; i++) {
      let plainChar = plaintext.charAt(i);
      let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length);
      let shiftIndex = this.charToNumber(keyChar);

      let plainNum = this.charToNumber(plainChar);
      let shiftedNum = (plainNum + shiftIndex) % 26;

      ciphertext += this.numberToChar(shiftedNum);
      explanations.push(
        `<strong>'${plainChar}'</strong> is shifted by <strong>${shiftIndex}</strong> (from <strong>'${keyChar}'</strong>) to <strong>'${this.numberToChar(
          shiftedNum
        )}'</strong><br/>`
      );
    }

    return { ciphertext, explanations }; // Return ciphertext and explanations
  }

  // Decrypts a ciphertext message using the Porta Cipher
  decrypt(ciphertext) {
    let plaintext = "";
    const explanations = []; // Explanation array for decryption steps
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");

    for (let i = 0; i < ciphertext.length; i++) {
      let cipherChar = ciphertext.charAt(i);
      let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length);
      let shiftIndex = this.charToNumber(keyChar);

      let cipherNum = this.charToNumber(cipherChar);
      let shiftedNum = (cipherNum - shiftIndex + 26) % 26;

      plaintext += this.numberToChar(shiftedNum);
      explanations.push(
        `<strong>'${cipherChar}'</strong> is shifted back by <strong>${shiftIndex}</strong> (from <strong>'${keyChar}'</strong>) to <strong>'${this.numberToChar(
          shiftedNum
        )}'</strong><br/>`
      );
    }

    return { plaintext, explanations }; // Return plaintext and explanations
  }
}

export default function PortaCipherComponent() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State to hold explanations

  const cipher = new PortaCipher("KEY", "WORD");

  const handleEncode = (text) => {
    const { ciphertext, explanations } = cipher.encrypt(text);
    setExplanation(explanations);
    return ciphertext;
  };

  const handleDecode = (text) => {
    const { plaintext, explanations } = cipher.decrypt(text);
    setExplanation(explanations);
    return plaintext;
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
        title={"Porta Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass the explanations to the CipherFactory
        keyComponentA="STR"
      />
    </>
  );
}
