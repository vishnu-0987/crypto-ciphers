// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GiovanBattistaBellasoCipher({ ongetInfo }) {
//     // Function to encrypt plaintext using the Giovan Battista Bellaso cipher
//     function encode(plaintext, keyword) {
//         let ciphertext = '';
//         for (let i = 0; i < plaintext.length; i++) {
//             let plainChar = plaintext.charAt(i).toUpperCase();
//             let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
//             let shift = (keyChar.charCodeAt(0) - 65);
//             let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
//             ciphertext += cipherChar;
//         }
//         return ciphertext;
//     }

//     // Function to decrypt the ciphertext using the Giovan Battista Bellaso cipher
//     function decode(ciphertext, keyword) {
//         let plaintext = '';
//         for (let i = 0; i < ciphertext.length; i++) {
//             let cipherChar = ciphertext.charAt(i).toUpperCase();
//             let keyChar = keyword.charAt(i % keyword.length).toUpperCase();
//             let shift = (keyChar.charCodeAt(0) - 65);
//             let plainChar = String.fromCharCode(((cipherChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
//             plaintext += plainChar;
//         }
//         return plaintext;
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Giovan Battista Bellaso Cipher is a classical polyalphabetic substitution cipher, similar to the Vigenère cipher.
//                 </p>
//                 <p>
//                     Keyed Vigenère Cipher: The Giovan Battista Bellaso Cipher, also known as the Vigenère variant, uses a keyword to encrypt plaintext.
//                 </p>
//                 <ul>
//                     <li>Substitution Cipher: The Giovan Battista Bellaso Cipher substitutes each plaintext character with a character determined by the plaintext and the key.</li>
//                     <li>Key Length: The key length in the Giovan Battista Bellaso Cipher matches the length of the plaintext.</li>
//                     <li>Encryption: Each character in the plaintext is combined with a character from the key using a mathematical operation, typically modular addition.</li>
//                     <li>Decryption: Decryption involves reversing the encryption process by subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
//                     <li>Example: Using a key 'KEY', if 'H' in the plaintext is combined with 'K' from the key, the resulting ciphertext character might be 'T'.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return <CipherFactory encode={encode} decode={decode} keyComponentA={'STR'} />
// };

// TODO: Import useState from React if using in a React component
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
// TODO: Import CipherOverview component
import CipherOverview from "../../ui/CipherOverview";

// TODO: Import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/GiovanBattistaBellasoCipherOverview"; // Adjust import from BellasoCipherOverview or relevant path

// Function to generate a Vigenère square based on a keyword
function generateVigenereSquare(keyword) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const square = [];

  for (let i = 0; i < 26; i++) {
    const row = alphabet.slice(i) + alphabet.slice(0, i);
    square.push(row);
  }

  return square;
}

// Function to encrypt a message using Giovan Battista Bellaso Cipher
function encryptBellaso(message, keyword) {
  const square = generateVigenereSquare(keyword.toUpperCase());
  let ciphertext = "";
  let keyIndex = 0;

  for (let i = 0; i < message.length; i++) {
    const char = message[i].toUpperCase();
    if (char === " ") {
      ciphertext += " ";
      continue;
    }
    const rowIndex = keyword.indexOf(keyword[keyIndex].toUpperCase());
    const colIndex = square[0].indexOf(char);
    ciphertext += square[rowIndex][colIndex];
    keyIndex = (keyIndex + 1) % keyword.length;
  }

  return ciphertext;
}

// Function to decrypt a message using Giovan Battista Bellaso Cipher
function decryptBellaso(ciphertext, keyword) {
  const square = generateVigenereSquare(keyword.toUpperCase());
  let plaintext = "";
  let keyIndex = 0;

  for (let i = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i].toUpperCase();
    if (char === " ") {
      plaintext += " ";
      continue;
    }
    const rowIndex = keyword.indexOf(keyword[keyIndex].toUpperCase());
    const row = square[rowIndex];
    const colIndex = row.indexOf(char);
    plaintext += square[0][colIndex];
    keyIndex = (keyIndex + 1) % keyword.length;
  }

  return plaintext;
}

// React Component
export default function GiovanBattistaBellasoCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [keyword, setKeyword] = useState(""); // State to store the keyword

  // Function to handle encryption and decryption logic using keyword
  const handleEncode = (plaintext) => {
    if (keyword) {
      return encryptBellaso(plaintext, keyword);
    }
    return ""; // Handle case where keyword is not set
  };

  const handleDecode = (ciphertext) => {
    if (keyword) {
      return decryptBellaso(ciphertext, keyword);
    }
    return ""; // Handle case where keyword is not set
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
        title={"Giovan Battista Bellaso Cipher"} // Update title
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        keyComponentA="STR"
        // Optionally add props specific to Giovan Battista Bellaso Cipher
      />
    </>
  );
}
