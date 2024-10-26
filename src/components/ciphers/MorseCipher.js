import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/MorseCipherOverview"; // Adjust the import path

export default function MorseCipher({ ongetInfo }) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State for storing explanation

  // Mapping of English letters to Morse code
  const morseMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
  };

  // Function to encode text into Morse code
  function encode(str) {
    let explanation = [`<strong>Encoding process:</strong><br>`]; // Initialize explanation
    const morseStr = str
      .toUpperCase()
      .split("")
      .map((char) => {
        const morseChar = morseMap[char] || char;
        explanation.push(
          `Character <code>${char}</code> → <code>${morseChar}</code><br>`
        );
        return morseChar;
      })
      .join(" ");
    explanation.push(
      `<strong>Final Morse Code:</strong> <code>${morseStr}</code><br>`
    );
    setExplanation(explanation); // Update explanation state
    return morseStr;
  }

  // Reverse mapping of Morse code to English letters
  const reverseMorseMap = Object.fromEntries(
    Object.entries(morseMap).map(([k, v]) => [v, k])
  );

  // Function to decode Morse code back into text
  function decode(morseCode) {
    let explanation = [`<strong>Decoding process:</strong><br>`]; // Initialize explanation
    const decodedStr = morseCode
      .split(" ")
      .map((code) => {
        const decodedChar = reverseMorseMap[code] || code;
        explanation.push(
          `Code <code>${code}</code> → <code>${decodedChar}</code><br>`
        );
        return decodedChar;
      })
      .join("");
    explanation.push(
      `<strong>Final Decoded Text:</strong> <code>${decodedStr}</code><br>`
    );
    setExplanation(explanation); // Update explanation state
    return decodedStr;
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
        title={"Morse Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
