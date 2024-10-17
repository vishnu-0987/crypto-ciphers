// // import React, { useState } from "react";
// // import CipherFactory from "../../ui/EncryptDecrypt";
// // import CipherOverview from "../../ui/CipherOverview";
// // import {
// //   Header,
// //   Description,
// //   References,
// //   Example,
// // } from "../../overviews/PortaCipherOverview"; // Assuming you have an overview component for PortaCipher

// // export default function PortaCipher(props) {
// //   const [showOverview, setShowOverview] = useState(false);
// //   const [alphabet1, setAlphabet1] = useState("ABCDEFGHIKLMNOPQRSTUVWXYZ"); // Default alphabets
// //   const [alphabet2, setAlphabet2] = useState("NOPQRSTUVWXYZABCDEFGHIKLM"); // Default alphabets

// //   // Function to encode text using Porta cipher
// //   function encode(str, alpha1, alpha2) {
// //     const normalize = (char) => char.toUpperCase().replace(/[^A-Z]/, "");
// //     const encodeChar = (char, alpha) =>
// //       alpha.charAt((alpha.indexOf(normalize(char)) + 1) % alpha.length);

// //     return str
// //       .split("")
// //       .map((char, index) =>
// //         normalize(char) === char
// //           ? encodeChar(char, index % 2 === 0 ? alpha1 : alpha2)
// //           : char
// //       )
// //       .join("");
// //   }

// //   // Function to decode text using Porta cipher
// //   function decode(str, alpha1, alpha2) {
// //     const normalize = (char) => char.toUpperCase().replace(/[^A-Z]/, "");
// //     const decodeChar = (char, alpha) =>
// //       alpha.charAt(
// //         (alpha.indexOf(normalize(char)) + alpha.length - 1) % alpha.length
// //       );

// //     return str
// //       .split("")
// //       .map((char, index) =>
// //         normalize(char) === char
// //           ? decodeChar(char, index % 2 === 0 ? alpha1 : alpha2)
// //           : char
// //       )
// //       .join("");
// //   }

// //   // Function to handle alphabet change
// //   const handleAlphabetChange = (alpha, index) => {
// //     if (index === 1) {
// //       setAlphabet1(alpha);
// //     } else {
// //       setAlphabet2(alpha);
// //     }
// //   };

// //   // TODO: Add the CipherOverview component in the return statement.
// //   // TODO: Add title and setShowOverview attribute to the CipherFactory component.
// //   return (
// //     <>
// //       {showOverview && (
// //         <CipherOverview
// //           setShowOverview={setShowOverview}
// //           Header={Header}
// //           Description={Description}
// //           Example={Example}
// //           References={References}
// //         />
// //       )}
// //       <CipherFactory
// //         title={"Porta Cipher"}
// //         setShowOverview={setShowOverview}
// //         encode={(str) => encode(str, alphabet1, alphabet2)}
// //         decode={(str) => decode(str, alphabet1, alphabet2)}
// //         keyComponentA="STR"
// //         // keyComponentB="STR" // Adjust as per your component structure
// //         extraSettings={{
// //           label1: "Alphabet 1:",
// //           label2: "Alphabet 2:",
// //           value1: alphabet1,
// //           value2: alphabet2,
// //           onChange: handleAlphabetChange,
// //         }}
// //       />
// //     </>
// //   );
// // }
// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/PortaCipherOverview";

// class PortaCipher {
//   constructor(primaryKeyword, secondaryKeyword) {
//     this.primaryKeyword = primaryKeyword.toUpperCase();
//     this.secondaryKeyword = secondaryKeyword.toUpperCase();
//     this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   }

//   // Helper function to get numeric value of a character in the alphabet
//   charToNumber(char) {
//     return this.alphabet.indexOf(char);
//   }

//   // Helper function to get character from numeric value in the alphabet
//   numberToChar(number) {
//     return this.alphabet.charAt(number);
//   }

//   // Encrypts a plaintext message using the Porta Cipher
//   encrypt(plaintext) {
//     let ciphertext = "";
//     plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, ""); // Remove non-alphabet characters and convert to uppercase

//     for (let i = 0; i < plaintext.length; i++) {
//       let plainChar = plaintext.charAt(i);
//       let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length);
//       let shiftIndex = this.charToNumber(keyChar);

//       let plainNum = this.charToNumber(plainChar);
//       let shiftedNum = (plainNum + shiftIndex) % 26;

//       ciphertext += this.numberToChar(shiftedNum);
//     }

//     return ciphertext;
//   }

//   // Decrypts a ciphertext message using the Porta Cipher
//   decrypt(ciphertext) {
//     let plaintext = "";
//     ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, ""); // Remove non-alphabet characters and convert to uppercase

//     for (let i = 0; i < ciphertext.length; i++) {
//       let cipherChar = ciphertext.charAt(i);
//       let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length);
//       let shiftIndex = this.charToNumber(keyChar);

//       let cipherNum = this.charToNumber(cipherChar);
//       let shiftedNum = (cipherNum - shiftIndex + 26) % 26;

//       plaintext += this.numberToChar(shiftedNum);
//     }

//     return plaintext;
//   }
// }

// export default function PortaCipherComponent({ ongetInfo }) {
//   const [showOverview, setShowOverview] = useState(false);

//   const cipher = new PortaCipher("KEY", "WORD");

//   return (
//     <>
//       {showOverview && (
//         <CipherOverview
//           setShowOverview={setShowOverview}
//           Header={Header}
//           Description={Description}
//           Example={Example}
//           References={References}
//         />
//       )}
//       <CipherFactory
//         title={"Porta Cipher"}
//         setShowOverview={setShowOverview}
//         encode={cipher.encrypt.bind(cipher)}
//         decode={cipher.decrypt.bind(cipher)}
//       />
//     </>
//   );
// }

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
    // Initialize the cipher with the primary and secondary keywords
    this.primaryKeyword = primaryKeyword.toUpperCase(); // Primary keyword determines the shift amounts
    this.secondaryKeyword = secondaryKeyword.toUpperCase(); // Secondary keyword can be used for additional modifications
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Standard alphabet used in the cipher
  }

  // Helper function to get numeric value of a character in the alphabet
  charToNumber(char) {
    return this.alphabet.indexOf(char);
  }

  // Helper function to get character from numeric value in the alphabet
  numberToChar(number) {
    return this.alphabet.charAt(number);
  }

  // Encrypts a plaintext message using the Porta Cipher
  encrypt(plaintext) {
    let ciphertext = "";
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, ""); // Remove non-alphabet characters and convert to uppercase

    for (let i = 0; i < plaintext.length; i++) {
      let plainChar = plaintext.charAt(i);
      let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length); // Get current character from primary keyword
      let shiftIndex = this.charToNumber(keyChar); // Determine shift amount based on primary keyword

      let plainNum = this.charToNumber(plainChar); // Convert plaintext character to numeric index
      let shiftedNum = (plainNum + shiftIndex) % 26; // Apply shift with modulus operation to wrap around alphabet

      ciphertext += this.numberToChar(shiftedNum); // Append encrypted character to ciphertext
    }

    return ciphertext;
  }

  // Decrypts a ciphertext message using the Porta Cipher
  decrypt(ciphertext) {
    let plaintext = "";
    ciphertext = ciphertext.toUpperCase().replace(/[^A-Z]/g, ""); // Remove non-alphabet characters and convert to uppercase

    for (let i = 0; i < ciphertext.length; i++) {
      let cipherChar = ciphertext.charAt(i);
      let keyChar = this.primaryKeyword.charAt(i % this.primaryKeyword.length); // Get current character from primary keyword
      let shiftIndex = this.charToNumber(keyChar); // Determine shift amount based on primary keyword

      let cipherNum = this.charToNumber(cipherChar); // Convert ciphertext character to numeric index
      let shiftedNum = (cipherNum - shiftIndex + 26) % 26; // Reverse shift with modulus operation to handle negative values

      plaintext += this.numberToChar(shiftedNum); // Append decrypted character to plaintext
    }

    return plaintext;
  }
}

export default function PortaCipherComponent({ ongetInfo }) {
  const [showOverview, setShowOverview] = useState(false);

  const cipher = new PortaCipher("KEY", "WORD"); // Initialize Porta Cipher with primary and secondary keywords

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
        encode={cipher.encrypt.bind(cipher)}
        decode={cipher.decrypt.bind(cipher)}
        keyComponentA="STR"
      />
    </>
  );
}
