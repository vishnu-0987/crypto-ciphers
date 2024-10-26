// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function KeywordCipher({ ongetInfo }) {
//     const [keyword, setKeyword] = useState('');

//     // Function to encode text using Keyword Cipher
//     function encode(str) {
//         return processText(str, keyword, false);
//     }

//     // Function to decode text using Keyword Cipher
//     function decode(str) {
//         return processText(str, keyword, true);
//     }

//     // Function to process text based on the Keyword Cipher logic
//     function processText(text, keyword, isDecrypt) {
//         const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//         const key = createKey(keyword, alphabet);
//         const direction = isDecrypt ? -1 : 1;

//         return text.split('').map((char, index) => {
//             const charCode = char.toLowerCase().charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const keyChar = key[index % key.length];
//                 const shift = alphabet.indexOf(keyChar) * direction;
//                 let shiftedCharCode = charCode + shift;
//                 if (shiftedCharCode > 122) {
//                     shiftedCharCode -= 26;
//                 } else if (shiftedCharCode < 97) {
//                     shiftedCharCode += 26;
//                 }
//                 return String.fromCharCode(shiftedCharCode);
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     // Function to create the key for the Keyword Cipher
//     function createKey(keyword, alphabet) {
//         const uniqueKeywordChars = Array.from(new Set(keyword.toLowerCase())).join('');
//         const remainingAlphabet = alphabet.split('').filter(char => !uniqueKeywordChars.includes(char)).join('');
//         return uniqueKeywordChars + remainingAlphabet;
//     }

//     // useEffect hook to provide information about the Keyword Cipher when the component mounts
//     useEffect(() => {
//         const info = (
//             <>
//                <p>The Keyword Cipher, also known as the Keyword Shift Cipher, is a monoalphabetic substitution cipher that uses a keyword to scramble the plaintext.</p>
//             <p>It is a type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet based on the alphabetical position of the corresponding letter in the keyword.</p>
//             <p>The Keyword Cipher is a simple and easy-to-implement cipher, often used for educational purposes or as a stepping stone to more complex ciphers.</p>
//             <ul>

//                 <li>The Keyword Cipher encrypts plaintext by shifting each letter based on the alphabetical position of the keyword.</li>
//                 <li>To encrypt: Create a mixed alphabet based on the keyword, where the keyword determines the starting point of the alphabet.</li>
//                 <li>To decrypt: Reverse the encryption process by creating a mixed alphabet based on the keyword and shifting each letter of the ciphertext to find the original plaintext.</li>

//             </ul>
//             </>
//         );
//         ongetInfo(info);
//     }, []);

//     // JSX for input component to enter the keyword
//     const keyComponent = (
//         <div>
//             <label>
//                 Keyword:
//                 <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
//             </label>
//         </div>
//     );

//     return <CipherFactory encode={encode} decode={decode} keyComponentA={"STR"} />;
// }

// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
// import { Header, Description, References, Example } from "../../overviews/KeywordCipherOverview"; // Adjust the import path

// export default function KeywordCipher({ ongetInfo }) {
//     const [showOverview, setShowOverview] = useState(false);
//     const [keyword, setKeyword] = useState('');

//     // Function to encode text using Keyword Cipher
//     function encode(str) {
//         return processText(str, keyword, false);
//     }

//     // Function to decode text using Keyword Cipher
//     function decode(str) {
//         return processText(str, keyword, true);
//     }

//     // Function to process text based on the Keyword Cipher logic
//     function processText(text, keyword, isDecrypt) {
//         const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//         const key = createKey(keyword, alphabet);
//         const direction = isDecrypt ? -1 : 1;

//         return text.split('').map((char, index) => {
//             const charCode = char.toLowerCase().charCodeAt(0);
//             if (/[a-zA-Z]/.test(char)) {
//                 const keyChar = key[index % key.length];
//                 const shift = alphabet.indexOf(keyChar) * direction;
//                 let shiftedCharCode = charCode + shift;
//                 if (shiftedCharCode > 122) {
//                     shiftedCharCode -= 26;
//                 } else if (shiftedCharCode < 97) {
//                     shiftedCharCode += 26;
//                 }
//                 return String.fromCharCode(shiftedCharCode);
//             } else {
//                 return char;
//             }
//         }).join('');
//     }

//     // Function to create the key for the Keyword Cipher
//     function createKey(keyword, alphabet) {
//         const uniqueKeywordChars = Array.from(new Set(keyword.toLowerCase())).join('');
//         const remainingAlphabet = alphabet.split('').filter(char => !uniqueKeywordChars.includes(char)).join('');
//         return uniqueKeywordChars + remainingAlphabet;
//     }

//     return (
//         <>
//             {showOverview && (
//                 <CipherOverview
//                     setShowOverview={setShowOverview}
//                     Header={Header}
//                     Description={Description}
//                     Example={Example}
//                     References={References}
//                 />
//             )}
//             <CipherFactory
//                 title={"Keyword Cipher"}
//                 setShowOverview={setShowOverview}
//                 encode={encode}
//                 decode={decode}
//                 keyComponentA="STR"
//             />
//         </>
//     );
// }

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/KeywordCipherOverview";

export default function KeywordCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [explanation, setExplanation] = useState([]); // State for storing explanation

  function generateKeyword(keyword) {
    // Function to generate a keyword without duplicate letters
    keyword = keyword.toUpperCase(); // Convert keyword to uppercase
    let uniqueChars = [];

    for (let i = 0; i < keyword.length; i++) {
      if (uniqueChars.indexOf(keyword[i]) === -1) {
        uniqueChars.push(keyword[i]);
      }
    }

    // Generate remaining alphabet characters not in the keyword
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alphabet.length; i++) {
      if (uniqueChars.indexOf(alphabet[i]) === -1) {
        uniqueChars.push(alphabet[i]);
      }
    }

    return uniqueChars.join(""); // Return the generated keyword
  }

  function encryptMessage(message, keyword) {
    keyword = generateKeyword(keyword); // Generate the keyword cipher alphabet
    message = message.toUpperCase().replace(/[^A-Z]/g, ""); // Convert message to uppercase and remove non-alphabet characters
    let encryptedMessage = "";
    let explanation = [
      `<strong>Keyword:</strong> <code>${keyword}</code><br><strong>Encoding Process:</strong><br>`,
    ]; // Initialize explanation

    for (let i = 0; i < message.length; i++) {
      let charIndex = message.charCodeAt(i) - 65; // Get index of current character in message
      encryptedMessage += keyword[charIndex]; // Substitute with corresponding character from keyword alphabet
      explanation.push(
        `Character <code>${message[i]}</code> (index ${charIndex}) → <code>${keyword[charIndex]}</code><br>`
      );
    }

    explanation.push(
      `<strong>Final Encoded Text:</strong> <code>${encryptedMessage}</code><br>`
    );
    setExplanation(explanation); // Update explanation state
    return encryptedMessage;
  }

  function decryptMessage(message, keyword) {
    keyword = generateKeyword(keyword); // Generate the keyword cipher alphabet
    let decryptedMessage = "";
    let explanation = [
      `<strong>Keyword:</strong> <code>${keyword}</code><br><strong>Decoding Process:</strong><br>`,
    ]; // Initialize explanation

    for (let i = 0; i < message.length; i++) {
      let charIndex = keyword.indexOf(message[i]); // Get index of current character in cipher alphabet
      decryptedMessage += String.fromCharCode(charIndex + 65); // Convert index to character code and append to decrypted message
      explanation.push(
        `Character <code>${
          message[i]
        }</code> (index ${charIndex}) → <code>${String.fromCharCode(
          charIndex + 65
        )}</code><br>`
      );
    }

    explanation.push(
      `<strong>Final Decoded Text:</strong> <code>${decryptedMessage}</code><br>`
    );
    setExplanation(explanation); // Update explanation state
    return decryptedMessage;
  }

  function encode(text) {
    return encryptMessage(text, keyword);
  }

  function decode(text) {
    return decryptMessage(text, keyword);
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
        title="Keyword Cipher"
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA="STR"
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
