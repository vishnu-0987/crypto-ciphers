// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function GronsfeldCipher({ ongetInfo }) {
//     // Function to encrypt plaintext using the Gronsfeld cipher
//     function encode(plaintext, keyword) {
//         let ciphertext = '';
//         for (let i = 0; i < plaintext.length; i++) {
//             let plainChar = plaintext.charAt(i).toUpperCase();
//             let keyChar = String(keyword).charAt(i % String(keyword).length);
//             let shift = (parseInt(keyChar) || 0); // Convert to integer, default to 0 if not a number
//             let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
//             ciphertext += cipherChar;
//         }
//         return ciphertext;
//     }

//     // Function to decrypt the ciphertext using the Gronsfeld cipher
//     function decode(ciphertext, keyword) {
//         let plaintext = '';
//         for (let i = 0; i < ciphertext.length; i++) {
//             let cipherChar = ciphertext.charAt(i).toUpperCase();
//             let keyChar = String(keyword).charAt(i % String(keyword).length);
//             let shift = (parseInt(keyChar) || 0); // Convert to integer, default to 0 if not a number
//             let plainChar = String.fromCharCode(((cipherChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
//             plaintext += plainChar;
//         }
//         return plaintext;
//     }

//     // Function to generate the key for the Gronsfeld cipher
//     function generateKey(length) {
//         let key = '';
//         for (let i = 0; i < length; i++) {
//             let randomDigit = Math.floor(Math.random() * 10);
//             key += randomDigit;
//         }
//         return key;
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Gronsfeld Cipher is a variant of the Vigenère cipher, using numeric keys instead of alphabetic keys.
//                 </p>
//                 <p>
//                     Numeric Key Substitution: In the Gronsfeld Cipher, each plaintext character is combined with a numeric key to produce the ciphertext.
//                 </p>
//                 <ul>
//                     <li>Substitution Cipher: The Gronsfeld Cipher substitutes each plaintext character with a character determined by the plaintext and the key.</li>
//                     <li>Key Length: The key length in the Gronsfeld Cipher matches the length of the plaintext.</li>
//                     <li>Encryption: Each character in the plaintext is combined with a numeric key using a mathematical operation, typically modular addition.</li>
//                     <li>Decryption: Decryption involves reversing the encryption process by subtracting the key character from the ciphertext character to retrieve the plaintext character.</li>
//                     <li>Example: Using a key '123', if 'H' in the plaintext is combined with '1' from the key, the resulting ciphertext character might be 'I'.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return <CipherFactory encode={encode} decode={decode} keyComponentA={generateKey(5)} />
// };


// TODO: import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
// TODO: Import CipherOverview component
import CipherOverview from "../../ui/CipherOverview";

// TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/GronsfeldCipherOverview"; // Adjust import from GronsfeldOverview

// Gronsfeld Cipher Functions
function encode(plaintext, keyword) {
  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    let plainChar = plaintext.charAt(i).toUpperCase();
    let keyChar = String(keyword).charAt(i % String(keyword).length);
    let shift = parseInt(keyChar) || 0; // Convert to integer, default to 0 if not a number
    let cipherChar = String.fromCharCode(((plainChar.charCodeAt(0) - 65 + shift) % 26) + 65);
    ciphertext += cipherChar;
  }
  return ciphertext;
}

function decode(ciphertext, keyword) {
  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i++) {
    let cipherChar = ciphertext.charAt(i).toUpperCase();
    let keyChar = String(keyword).charAt(i % String(keyword).length);
    let shift = parseInt(keyChar) || 0; // Convert to integer, default to 0 if not a number
    let plainChar = String.fromCharCode(((cipherChar.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
    plaintext += plainChar;
  }
  return plaintext;
}

function generateKey(length) {
  let key = "";
  for (let i = 0; i < length; i++) {
    let randomDigit = Math.floor(Math.random() * 10);
    key += randomDigit;
  }
  return key;
}

// React Component
export default function GronsfeldCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [keyword, setKeyword] = useState(""); // State to store the keyword

  // Function to handle encryption and decryption logic using keyword
  const handleEncode = (plaintext) => {
    if (keyword) {
      return encode(plaintext, keyword);
    }
    return ""; // Handle case where keyword is not set
  };

  const handleDecode = (ciphertext) => {
    if (keyword) {
      return decode(ciphertext, keyword);
    }
    return ""; // Handle case where keyword is not set
  };

  const handleGenerateKey = (length) => {
    return generateKey(length);
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
        title={"Gronsfeld Cipher"} // Update title
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        generateKey={handleGenerateKey} // Pass generateKey function
        keyComponentA="STR"
        // Optionally add props specific to Gronsfeld Cipher
      />
    </>
  );
}
