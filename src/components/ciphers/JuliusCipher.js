// import React from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// export default function JuliusCaesarCipher({ongetInfo}) {

//     // Create a function to encode a string using the Caesar cipher
//     function encode(str, shift) {
//         let encodedChars = '';

//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             let charCode = char.charCodeAt(0);

//             if (charCode >= 65 && charCode <= 90) {
//                 // Uppercase letters
//                 char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
//             } else if (charCode >= 97 && charCode <= 122) {
//                 // Lowercase letters
//                 char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
//             }

//             encodedChars += char;
//         }

//         return encodedChars;
//     }

//     // Create a function to decode a string using the Caesar cipher
//     function decode(str, shift) {
//         // Encode the string with a negative shift to reverse the original shift
//         return encode(str, -shift);
//     }

//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>
//                     The Julius Caesar cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.
//                 </p>
//                 <p>To encrypt using the Caesar cipher, specify a shift value and enter your text.</p>
//                 <ul>
//                     <li>Substitution Cipher: Each letter in the plaintext is replaced by a letter some fixed number of positions down or up the alphabet.</li>
//                     <li>Shift: The number of positions each letter in the plaintext is shifted.</li>
//                     <li>Encryption: To encrypt, replace each letter in the plaintext with the letter that is shifted down the alphabet by the specified shift value.</li>
//                     <li>Decryption: To decrypt, use the opposite shift value to shift the letters back to their original positions.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     return(
//     <>

//         <CipherFactory encode={encode} decode={decode} keyComponentA={1} />
//     </>

// )
// };

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/JuliusCipherOverview"; // Adjust import path as needed

export default function JuliusCaesarCipher({ ongetInfo }) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State for storing the explanation

  // Function to encode a string using the Caesar cipher
  function encode(str, shift) {
    let encodedChars = "";
    let explanation = []; // Explanation array to store the steps
    explanation.push(
      `<strong>Encoding Process:</strong><br><code>${str}</code> with shift: ${shift}<br>`
    );

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let charCode = char.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        const newChar = String.fromCharCode(
          ((charCode - 65 + shift) % 26) + 65
        );
        explanation.push(
          `Character <code>${char}</code> → <code>${newChar}</code> (Uppercase)<br>`
        );
        char = newChar;
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        const newChar = String.fromCharCode(
          ((charCode - 97 + shift) % 26) + 97
        );
        explanation.push(
          `Character <code>${char}</code> → <code>${newChar}</code> (Lowercase)<br>`
        );
        char = newChar;
      } else {
        explanation.push(
          `Character <code>${char}</code> remains unchanged.<br>`
        );
      }

      encodedChars += char;
    }

    explanation.push(
      `<strong>Final Encoded Text:</strong> <code>${encodedChars}</code><br>`
    );
    setExplanation(explanation); // Update explanation state
    return encodedChars;
  }

  // Function to decode a string using the Caesar cipher
  function decode(str, shift) {
    let explanation = []; // Explanation array for decoding
    explanation.push(
      `<strong>Decoding Process:</strong><br><code>${str}</code> with shift: ${shift}<br>`
    );
    setExplanation(explanation); // Update explanation before decoding
    return encode(str, -shift); // Use encoding logic with negative shift for decoding
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
        title={"Julius Caesar Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        keyComponentA={1}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
