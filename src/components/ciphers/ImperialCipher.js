// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function ImperialEncoder({ ongetInfo }) {

//     const imperialCipherMap = {
//         'A': 'Z', 'B': 'Y', 'C': 'X', 'D': 'W', 'E': 'V', 'F': 'U',
//         'G': 'T', 'H': 'S', 'I': 'R', 'J': 'Q', 'K': 'P', 'L': 'O',
//         'M': 'N', 'N': 'M', 'O': 'L', 'P': 'K', 'Q': 'J', 'R': 'I',
//         'S': 'H', 'T': 'G', 'U': 'F', 'V': 'E', 'W': 'D', 'X': 'C',
//         'Y': 'B', 'Z': 'A'
//     };

//     const reverseImperialCipherMap = Object.fromEntries(
//         Object.entries(imperialCipherMap).map(([key, value]) => [value, key])
//     );

//     const encode = (text) => {
//         let encoded = '';
//         text = text.toUpperCase();

//         for (let char of text) {
//             if (imperialCipherMap[char]) {
//                 encoded += imperialCipherMap[char];
//             } else {
//                 encoded += char; // Keep unknown characters as they are
//             }
//         }

//         return encoded;
//     };

//     const decode = (text) => {
//         let decoded = '';
//         text = text.toUpperCase();

//         for (let char of text) {
//             if (reverseImperialCipherMap[char]) {
//                 decoded += reverseImperialCipherMap[char];
//             } else {
//                 decoded += char; // Keep unknown characters as they are
//             }
//         }

//         return decoded;
//     };

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Imperial Cipher is a simple substitution cipher where each letter of the alphabet is substituted by another unique letter.
//                 </p>
//                 <p>To encrypt using the Imperial Cipher, simply enter your text.</p>
//                 <ul>
//                     <li>Substitution Cipher: Each letter in the plaintext is replaced by another unique letter according to the predefined mapping.</li>
//                     <li>Encryption: To encrypt, replace each letter in the plaintext with its corresponding mapped letter.</li>
//                     <li>Decryption: To decrypt, replace each letter in the ciphertext with its original letter using the reverse mapping.</li>
//                     <li>Example: 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so forth.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return (
//         <CipherFactory encode={encode} decode={decode} />
//     );
// }

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/ImperialCipherOverview";

// Imperial Cipher Map
const imperialCipherMap = {
  A: "Z",
  B: "Y",
  C: "X",
  D: "W",
  E: "V",
  F: "U",
  G: "T",
  H: "S",
  I: "R",
  J: "Q",
  K: "P",
  L: "O",
  M: "N",
  N: "M",
  O: "L",
  P: "K",
  Q: "J",
  R: "I",
  S: "H",
  T: "G",
  U: "F",
  V: "E",
  W: "D",
  X: "C",
  Y: "B",
  Z: "A",
};

const reverseImperialCipherMap = Object.fromEntries(
  Object.entries(imperialCipherMap).map(([key, value]) => [value, key])
);

// Encoding function with explanation
const encode = (text) => {
  let encoded = "";
  let explanation = [];
  text = text.toUpperCase();

  explanation.push(
    `<strong>Encoding Process:</strong><br><code>${text}</code><br>`
  );

  for (let char of text) {
    if (imperialCipherMap[char]) {
      encoded += imperialCipherMap[char];
      explanation.push(
        `Character <code>${char}</code> → Encoded as <code>${imperialCipherMap[char]}</code><br>`
      );
    } else {
      encoded += char; // Keep unknown characters as they are
      explanation.push(`Character <code>${char}</code> is unchanged.<br>`);
    }
  }

  explanation.push(
    `<strong>Final Encoded Text:</strong> <code>${encoded}</code><br>`
  );
  return { encoded, explanation };
};

// Decoding function with explanation
const decode = (text) => {
  let decoded = "";
  let explanation = [];
  text = text.toUpperCase();

  explanation.push(
    `<strong>Decoding Process:</strong><br><code>${text}</code><br>`
  );

  for (let char of text) {
    if (reverseImperialCipherMap[char]) {
      decoded += reverseImperialCipherMap[char];
      explanation.push(
        `Character <code>${char}</code> → Decoded as <code>${reverseImperialCipherMap[char]}</code><br>`
      );
    } else {
      decoded += char; // Keep unknown characters as they are
      explanation.push(`Character <code>${char}</code> is unchanged.<br>`);
    }
  }

  explanation.push(
    `<strong>Final Decoded Text:</strong> <code>${decoded}</code><br>`
  );
  return { decoded, explanation };
};

// Imperial Cipher Component
const ImperialCipher = ({ ongetInfo }) => {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Handle encoding
  const handleEncode = (text) => {
    const { encoded, explanation } = encode(text);
    setExplanation(explanation); // Set explanation for encoding
    return encoded;
  };

  // Handle decoding
  const handleDecode = (text) => {
    const { decoded, explanation } = decode(text);
    setExplanation(explanation); // Set explanation for decoding
    return decoded;
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
        title={"Imperial Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
};

export default ImperialCipher;
