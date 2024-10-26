// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// // Function to encrypt a message using the Hex Code Cipher
// function encryptHexCode(message) {
//     if (typeof message !== 'string') {
//         throw new TypeError('Message must be a string');
//     }

//     return message.split('').map(char => char.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
// }

// // Function to decrypt a message using the Hex Code Cipher
// function decryptHexCode(encryptedMessage) {
//     if (typeof encryptedMessage !== 'string') {
//         throw new TypeError('Encrypted message must be a string');
//     }

//     return encryptedMessage.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
// }

// export default function HexCodeCipher({ ongetInfo }) {
//     // Function to display information about the Hex Code Cipher
//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>Hexadecimal (Hex) Code is a base-16 numeral system widely used in computing and digital electronics, consisting of sixteen symbols: 0-9 and A-F.</p>
//             <p>It is a compact and human-friendly representation of binary-coded values, often used to simplify reading and interpreting large binary numbers.</p>
//             <p>Each hex digit represents four binary digits (bits), making it a convenient way to express binary data in a more readable format.</p>
//             <p>Hex Code can be utilized for encoding information, creating checksums, or as a simple substitution cipher for encrypting data.</p>
//             <ul>

//                 <li>Hex Code is often used in programming, color codes in web design, and digital systems.</li>
//                 <li>To encrypt: Convert the plaintext into its ASCII or Unicode values, then encode these values in hexadecimal format.</li>
//                 <li>To decrypt: Convert the hexadecimal values back to their original ASCII or Unicode values to retrieve the plaintext.</li>

//             </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     // Display information when the component mounts
//     React.useEffect(() => {
//         showInformation();
//     }, []);

//     // Render the CipherFactory component with encode and decode functions
//     return (
//         <CipherFactory encode={encryptHexCode} decode={decryptHexCode} />
//     );
// }

// TODO: import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/HexCodeCipherOverview"; // Update to HexOverview

// Hex Code Cipher Functions
function encryptHexCode(message, setExplanation) {
  if (typeof message !== "string") {
    throw new TypeError("Message must be a string");
  }

  const explanationsArray = []; // Array to store explanations
  explanationsArray.push(
    `<strong>Plaintext: </strong><code>${message}</code><br>`
  );

  const hexCodes = message
    .split("")
    .map((char) => {
      const hex = char.charCodeAt(0).toString(16).padStart(2, "0");
      explanationsArray.push(`<code>${char}</code> → <code>${hex}</code><br>`); // Log encoding step
      return hex;
    })
    .join(" ");

  explanationsArray.push(
    `<br><strong>Final Ciphertext:</strong> <code>${hexCodes}</code><br>`
  );

  setExplanation(explanationsArray); // Update explanation state
  return hexCodes;
}

function decryptHexCode(encryptedMessage, setExplanation) {
  if (typeof encryptedMessage !== "string") {
    throw new TypeError("Encrypted message must be a string");
  }

  const explanationsArray = []; // Array to store explanations
  explanationsArray.push(
    `<strong>Ciphertext: </strong><code>${encryptedMessage}</code><br>`
  );

  const plaintext = encryptedMessage
    .split(" ")
    .map((hex) => {
      const char = String.fromCharCode(parseInt(hex, 16));
      explanationsArray.push(`<code>${hex}</code> → <code>${char}</code><br>`); // Log decoding step
      return char;
    })
    .join("");

  explanationsArray.push(
    `<br><strong>Final Plaintext:</strong> <code>${plaintext}</code><br>`
  );

  setExplanation(explanationsArray); // Update explanation state
  return plaintext;
}

// React Component
export default function HexCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // State to store explanations

  // Function to handle encoding logic
  const handleEncode = (plaintext) => {
    return encryptHexCode(plaintext, setExplanation);
  };

  // Function to handle decoding logic
  const handleDecode = (hexText) => {
    return decryptHexCode(hexText, setExplanation);
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
        title={"Hex Code Cipher"} // Update title
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
      {/* <div dangerouslySetInnerHTML={{ __html: explanation.join('') }} /> Display explanation */}
    </>
  );
}
