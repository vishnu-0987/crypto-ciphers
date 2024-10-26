import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/PigPenCipherOverview";

class PigpenCipher {
  constructor() {
    this.charToSymbol = {
      A: "🞀",
      B: "🞁",
      C: "🞂",
      D: "🞃",
      E: "🞄",
      F: "🞅",
      G: "🞆",
      H: "🞇",
      I: "🞈",
      J: "🞉",
      K: "🞊",
      L: "🞋",
      M: "🞌",
      N: "🞍",
      O: "🞎",
      P: "🞏",
      Q: "🞐",
      R: "🞑",
      S: "🞒",
      T: "🞓",
      U: "🞔",
      V: "🞕",
      W: "🞖",
      X: "🞗",
      Y: "🞘",
      Z: "🞙",
      a: "🞀",
      b: "🞁",
      c: "🞂",
      d: "🞃",
      e: "🞄",
      f: "🞅",
      g: "🞆",
      h: "🞇",
      i: "🞈",
      j: "🞉",
      k: "🞊",
      l: "🞋",
      m: "🞌",
      n: "🞍",
      o: "🞎",
      p: "🞏",
      q: "🞐",
      r: "🞑",
      s: "🞒",
      t: "🞓",
      u: "🞔",
      v: "🞕",
      w: "🞖",
      x: "🞗",
      y: "🞘",
      z: "🞙",
    };
    this.symbolToChar = {};
    for (let char in this.charToSymbol) {
      if (this.charToSymbol.hasOwnProperty(char)) {
        this.symbolToChar[this.charToSymbol[char]] = char;
      }
    }
  }

  encrypt(text) {
    let encryptedMessage = "";
    const explanations = []; // Explanation array
    for (let char of text) {
      if (this.charToSymbol[char]) {
        encryptedMessage += this.charToSymbol[char];
        explanations.push(
          `<strong>'${char}'</strong> is transformed to <strong>'${this.charToSymbol[char]}'</strong><br/>`
        );
      } else {
        encryptedMessage += char; // Preserve non-alphabetic characters
        explanations.push(
          `<strong>'${char}'</strong> is preserved as it is not in the alphabet<br/>`
        );
      }
    }
    return { encryptedMessage, explanations };
  }

  decrypt(text) {
    let decryptedMessage = "";
    let explanations = []; // Explanation array
    let index = 0;
    while (index < text.length) {
      let symbol = text.substr(index, 2); // Pigpen symbols are represented by 2 characters
      if (this.symbolToChar[symbol]) {
        decryptedMessage += this.symbolToChar[symbol];
        explanations.push(
          `<strong>'${symbol}'</strong> is transformed back to <strong>'${this.symbolToChar[symbol]}'</strong><br/>`
        );
        index += 2;
      } else {
        decryptedMessage += text[index]; // Preserve non-Pigpen symbols
        explanations.push(
          `<strong>'${text[index]}'</strong> is preserved as it is not a Pigpen symbol<br/>`
        );
        index++;
      }
    }
    return { decryptedMessage, explanations };
  }
}

export default function PigpenCipherComponent() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state
  const cipher = new PigpenCipher();

  const handleEncode = (text) => {
    const { encryptedMessage, explanations } = cipher.encrypt(text);
    setExplanation(explanations);
    return encryptedMessage;
  };

  const handleDecode = (text) => {
    const { decryptedMessage, explanations } = cipher.decrypt(text);
    setExplanation(explanations);
    return decryptedMessage;
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
        title={"Pigpen Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
