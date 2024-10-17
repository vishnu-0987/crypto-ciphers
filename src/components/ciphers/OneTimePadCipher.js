// // import React, { useState } from "react";
// // import CipherFactory from "../../ui/EncryptDecrypt";
// // import CipherOverview from "../../ui/CipherOverview";
// // import { Header, Description, References, Example } from "../../overviews/OneTimePadCipherOverview";

// // export default function OneTimePadCipher(props) {
// //   const [showOverview, setShowOverview] = useState(false);
// //   const [inputText, setInputText] = useState('');
// //   const [inputChars, setInputChars] = useState([]);
// //   const [outputChars, setOutputChars] = useState([]);
// //   const [key, setKey] = useState('');

// //   // Function to generate a random key of the same length as the plaintext
// //   const generateKey = (length) => {
// //     let key = '';
// //     for (let i = 0; i < length; i++) {
// //       const randomChar = String.fromCharCode(Math.floor(Math.random() * 256));
// //       key += randomChar;
// //     }
// //     return key;
// //   };

// //   // Function to encode using the One-Time Pad cipher
// //   const encode = (text, key) => {
// //     if (text.length !== key.length) {
// //       throw new Error("Key length must be equal to the text length.");
// //     }
// //     let encodedMessage = "";
// //     for (let i = 0; i < text.length; i++) {
// //       const charCode = text.charCodeAt(i);
// //       const keyCode = key.charCodeAt(i);
// //       const encodedCharCode = charCode ^ keyCode;
// //       encodedMessage += String.fromCharCode(encodedCharCode);
// //     }
// //     return encodedMessage;
// //   };

// //   // Function to decode using the One-Time Pad cipher
// //   const decode = (text, key) => {
// //     // Decoding is the same as encoding in the One-Time Pad cipher
// //     return encode(text, key);
// //   };

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
// //         title={"One-Time Pad Cipher"}
// //         setShowOverview={setShowOverview}
// //         encode={text => {
// //           const key = generateKey(text.length);
// //           setKey(key);
// //           return encode(text, key);
// //         }}
// //         decode={text => decode(text, key)}
// //         key={key} // Display the key for verification
// //         keyComponentA="STR"
// //       />
// //     </>
// //   )
// // }

// import React, { useState, useEffect } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/OneTimePadCipherOverview";

// export default function OneTimePadCipher() {
//   const [showOverview, setShowOverview] = useState(false);
//   const [inputText, setInputText] = useState('');
//   const [inputChars, setInputChars] = useState([]);
//   const [outputChars, setOutputChars] = useState([]);
//   const [key, setKey] = useState('');

//   useEffect(() => {
//     showInformation();
//   }, []);

//   const showInformation = () => {
//     // You can display or log information here if needed
//     console.log("The One-Time Pad Cipher is a symmetric encryption algorithm that uses a randomly generated key as long as the plaintext.");
//   };

//   // Function to generate a random key of a given length
//   function generateKey(length) {
//     let key = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * characters.length);
//       key += characters[randomIndex];
//     }
//     return key;
//   }

//   // Function to perform encryption using the One-Time Pad Cipher
//   function encryptOneTimePad(plaintext, key) {
//     let ciphertext = '';
//     for (let i = 0; i < plaintext.length; i++) {
//       const charCode = ((plaintext.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26) + 65;
//       ciphertext += String.fromCharCode(charCode);
//     }
//     return ciphertext;
//   }

//   // Function to perform decryption using the One-Time Pad Cipher
//   function decryptOneTimePad(ciphertext, key) {
//     let plaintext = '';
//     for (let i = 0; i < ciphertext.length; i++) {
//       let charCode = ((ciphertext.charCodeAt(i) - 65 - (key.charCodeAt(i) - 65)) % 26) + 65;
//       if (charCode < 65) {
//         charCode += 26;
//       }
//       plaintext += String.fromCharCode(charCode);
//     }
//     return plaintext;
//   }

//   const handleEncode = (str) => {
//     const generatedKey = generateKey(str.length);
//     const encodedStr = encryptOneTimePad(str.toUpperCase(), generatedKey);
//     setInputText(str);
//     setInputChars([...inputChars, str]);
//     setOutputChars([...outputChars, encodedStr]);
//     setKey(generatedKey);
//   };

//   const handleDecode = (str) => {
//     const decodedStr = decryptOneTimePad(str.toUpperCase(), key);
//     setInputText(str);
//     setInputChars([...inputChars, str]);
//     setOutputChars([...outputChars, decodedStr]);
//   };

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
//         title={"One-Time Pad Cipher"}
//         setShowOverview={setShowOverview}
//         encode={handleEncode}
//         decode={handleDecode}
//         keyComponentA="STR"
//       />
//     </>
//   );
// }
// import React, { useState } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';
// import CipherOverview from "../../ui/CipherOverview";

// export default function OneTimePadCipher({ ongetInfo }) {
//     const [inputText, setInputText] = useState('');
//     const [inputChars, setInputChars] = useState([]);
//     const [outputChars, setOutputChars] = useState([]);
//     const [key, setKey] = useState('');

//     // Function to generate a random key of a given length
//     function generateKey(length) {
//         let key = '';
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         for (let i = 0; i < length; i++) {
//             const randomIndex = Math.floor(Math.random() * characters.length);
//             key += characters[randomIndex];
//         }
//         return key;
//     }

//     // Function to perform encryption using the One-Time Pad Cipher
//     function encryptOneTimePad(plaintext, key) {
//         let ciphertext = '';
//         for (let i = 0; i < plaintext.length; i++) {
//             const charCode = ((plaintext.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26) + 65;
//             ciphertext += String.fromCharCode(charCode);
//         }
//         return ciphertext;
//     }

//     // Function to perform decryption using the One-Time Pad Cipher
//     function decryptOneTimePad(ciphertext, key) {
//         let plaintext = '';
//         for (let i = 0; i < ciphertext.length; i++) {
//             let charCode = ((ciphertext.charCodeAt(i) - 65 - (key.charCodeAt(i) - 65)) % 26) + 65;
//             if (charCode < 65) {
//                 charCode += 26;
//             }
//             plaintext += String.fromCharCode(charCode);
//         }
//         return plaintext;
//     }

//     const handleEncode = (str) => {
//         const generatedKey = generateKey(str.length);
//         const encodedStr = encryptOneTimePad(str.toUpperCase(), generatedKey);
//         setInputText(str);
//         setInputChars([...inputChars, str]);
//         setOutputChars([...outputChars, encodedStr]);
//         setKey(generatedKey);
//     };

//     const handleDecode = (str) => {
//         const decodedStr = decryptOneTimePad(str.toUpperCase(), key);
//         setInputText(str);
//         setInputChars([...inputChars, str]);
//         setOutputChars([...outputChars, decodedStr]);
//     };

//     return (
//         <>
//             <CipherFactory
//                 title={"One-Time Pad Cipher"}
//                 encode={handleEncode}
//                 decode={handleDecode}
//                 keyComponentA="STR" // Adjust as per your component structure
//             />
//         </>
//     );
// }
import React, { useState, useEffect } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, Example, References } from "../../overviews/OneTimePadCipherOverview";

export default function OneTimePadCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [outputChars, setOutputChars] = useState([]);
  const [key, setKey] = useState('');

  useEffect(() => {
    showInformation();
  }, []);

  const showInformation = () => {
    console.log("The One-Time Pad Cipher is a symmetric encryption algorithm that uses a randomly generated key as long as the plaintext.");
  };

  // Function to generate a random key of a given length
  function generateKey(length) {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters[randomIndex];
    }
    return key;
  }

  // Function to perform encryption using the One-Time Pad Cipher
  function encryptOneTimePad(plaintext, key) {
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const charCode = ((plaintext.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26) + 65;
      ciphertext += String.fromCharCode(charCode);
    }
    return ciphertext;
  }

  // Function to perform decryption using the One-Time Pad Cipher
  function decryptOneTimePad(ciphertext, key) {
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      let charCode = ((ciphertext.charCodeAt(i) - 65 - (key.charCodeAt(i) - 65)) % 26) + 65;
      if (charCode < 65) {
        charCode += 26;
      }
      plaintext += String.fromCharCode(charCode);
    }
    return plaintext;
  }

  const handleEncode = (str) => {
    const generatedKey = generateKey(str.length);
    const encodedStr = encryptOneTimePad(str.toUpperCase(), generatedKey);
    setInputText(str);
    setInputChars([...inputChars, str]);
    setOutputChars([...outputChars, encodedStr]);
    setKey(generatedKey);
  };

  const handleDecode = (str) => {
    const decodedStr = decryptOneTimePad(str.toUpperCase(), key);
    setInputText(str);
    setInputChars([...inputChars, str]);
    setOutputChars([...outputChars, decodedStr]);
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
        title={"One-Time Pad Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        keyComponentA="STR"
      />
    </>
  );
}

