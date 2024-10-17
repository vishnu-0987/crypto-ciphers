// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/OmniBookCipherOverview";

// export default function OmniBookCipher(props) {
//   const [showOverview, setShowOverview] = useState(false);
//   const [inputText, setInputText] = useState('');
//   const [inputChars, setInputChar0s] = useState([]);
//   const [outputChars, setOutputChars] = useState([]);

//   // Placeholder functions for encode and decode using Omni Book Cipher
//   const encode = (text) => {
//     // Simplified example: Use the book as a key to encode the text
//     // In practice, you would reference specific pages, lines, and words
//     return "Encoded message using Omni Book Cipher";
//   };

//   const decode = (text) => {
//     // Simplified example: Use the book as a key to decode the text
//     // Reverse the encoding process
//     return "Decoded message using Omni Book Cipher";
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
//         title={"Omni Book Cipher"}
//         setShowOverview={setShowOverview}
//         encode={encode}
//         decode={decode}
//         keyComponentA="STR"
//       />
//     </>
//   );
// }

// // export { Header, Description, Example, References };
// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/OmniBookCipherOverview";

// export default function OmniBookCipher(props) {
//   const [showOverview, setShowOverview] = useState(false);
//   const [inputText, setInputText] = useState('');
//   const [inputChars, setInputChars] = useState([]);
//   const [outputChars, setOutputChars] = useState([]);

//   // Placeholder functions for encode and decode using Omni Book Cipher
//   const encode = (text) => {
//     // Simplified example: Use the book as a key to encode the text
//     // In practice, you would reference specific pages, lines, and words
//     return "Encoded message using Omni Book Cipher";
//   };

//   const decode = (text) => {
//     // Simplified example: Use the book as a key to decode the text
//     // Reverse the encoding process
//     return "Decoded message using Omni Book Cipher";
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
//         title={"Omni Book Cipher"}
//         setShowOverview={setShowOverview}
//         encode={encode}
//         decode={decode}
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/OmniBookCipherOverview";

export default function OmniBookCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [outputChars, setOutputChars] = useState([]);

  // Placeholder function to encode using the Omni Book Cipher
  const encode = (text, book) => {
    // Simplified example: Use the book as a key to encode the text
    // In practice, you would reference specific pages, lines, and words
    const words = text.split(' ');
    const encodedWords = words.map((word, index) => `${book}-${index}`);
    return encodedWords.join(' ');
  };

  // Placeholder function to decode using the Omni Book Cipher
  const decode = (text, book) => {
    // Simplified example: Use the book as a key to decode the text
    // Reverse the encoding process
    const words = text.split(' ');
    const decodedWords = words.map(encodedWord => {
      const [bookKey, index] = encodedWord.split('-');
      if (bookKey === book) {
        return `word${index}`;
      }
      return encodedWord;
    });
    return decodedWords.join(' ');
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
        title={"Omni Book Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}
