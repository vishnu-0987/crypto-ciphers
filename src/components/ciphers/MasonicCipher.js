// // import React from 'react';
// // import CipherFactory from '../../ui/EncryptDecrypt';
// // import CipherOverview from "../../ui/CipherOverview";

// // //TODO: import components from overview component
// // import { Header,
// //     Description,
// //   References,
// //   Example,
// //  } from "../../overviews/MasonicCipherOverview";

// // export default function Masonic() {

// //     const pigpenCipher = {
// //         'A': '᚜', 'B': '᚛', 'C': 'ᚠ', 'D': 'ᛏ', 'E': 'ᛒ', 'F': 'ᛖ', 'G': 'ᛗ', 'H': 'ᛝ', 'I': 'ᛟ',
// //         'J': 'ᛠ', 'K': 'ᛡ', 'L': 'ᛢ', 'M': 'ᛣ', 'N': 'ᛤ', 'O': 'ᛥ', 'P': 'ᛦ', 'Q': 'ᛧ', 'R': 'ᛨ',
// //         'S': 'ᛩ', 'T': 'ᛪ', 'U': '᛫', 'V': '᛬', 'W': '᛭', 'X': 'ᛮ', 'Y': 'ᛯ', 'Z': 'ᛰ'
// //     };
    
// //     const reversePigpenCipher = Object.fromEntries(
// //         Object.entries(pigpenCipher).map(([letter, symbol]) => [symbol, letter])
// //     );
      
// //     function encode(plaintext) {
// //         return plaintext.toUpperCase().replace(/[^A-Z]/g, '').split('').map(char => pigpenCipher[char] || char).join('');
// //     }

// //     function decode(ciphertext) {
// //         return ciphertext.split('').map(symbol => reversePigpenCipher[symbol] || symbol).join('');
// //     }
     

  
// //       return <CipherFactory encode={encode} decode={decode} />
// // };



// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';
// import CipherOverview from '../../ui/CipherOverview';

// // Define the overview components
// import {
//   Header,
//   Description,
//   References,
//   Example
// } from '../../overviews/MasonicCipherOverview';

// const masonicSymbols = {
//   'A': '🞂', 'B': '🞃', 'C': '🞄', 'D': '🞅', 'E': '🞆',
//   'F': '🞇', 'G': '🞈', 'H': '🞉', 'I': '🞊', 'J': '🞋',
//   'K': '🞌', 'L': '🞍', 'M': '🞎', 'N': '🞏', 'O': '🞐',
//   'P': '🞑', 'Q': '🞒', 'R': '🞓', 'S': '🞔', 'T': '🞕',
//   'U': '🞖', 'V': '🞗', 'W': '🞘', 'X': '🞙', 'Y': '🞚', 'Z': '🞛'
// };

// function encodeMasonic(str) {
//   let encodedText = '';
//   for (let char of str.toUpperCase()) {
//     encodedText += masonicSymbols[char] || char;
//   }
//   return encodedText;
// }

// function decodeMasonic(str) {
//   const decodingSymbols = Object.fromEntries(Object.entries(masonicSymbols).map(([key, value]) => [value, key]));
//   let decodedText = '';
//   let symbol = '';
//   for (let char of str) {
//     symbol += char;
//     if (decodingSymbols[symbol]) {
//       decodedText += decodingSymbols[symbol];
//       symbol = '';
//     }
//   }
//   return decodedText;
// }

// export default function MasonicCipher({ ongetInfo }) {
//   const [showOverview, setShowOverview] = useState(false);
//   const [inputText, setInputText] = useState('');
//   const [inputChars, setInputChars] = useState([]);
//   const [outputChars, setOutputChars] = useState([]);

//   const showInformation = () => {
//     const info = (
//       <>
//         <p>
//           The Masonic Cipher, also known as the Pigpen Cipher, uses symbols to represent letters of the alphabet.
//         </p>
//         <p>To encode using the Masonic Cipher, apply the encoding algorithm.</p>
//         {/* Add any additional information about the Masonic Cipher here */}
//       </>
//     );
//     ongetInfo(info);
//   };

//   useEffect(() => {
//     showInformation();
//   }, []);

//   const handleEncode = (str) => {
//     const encodedStr = encodeMasonic(str);
//     setInputText(str);
//     setInputChars([...inputChars, str]);
//     setOutputChars([...outputChars, encodedStr]);
//   };

//   const handleDecode = (str) => {
//     const decodedStr = decodeMasonic(str);
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
//         title={"Masonic Cipher"}
//         setShowOverview={setShowOverview}
//         encode={handleEncode}
//         decode={handleDecode}
//         keyComponentA={1}
//       />
//     </>
//   );
// }

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/MasonicCipherOverview";

const masonicSymbols = {
  'A': '🞂', 'B': '🞃', 'C': '🞄', 'D': '🞅', 'E': '🞆',
  'F': '🞇', 'G': '🞈', 'H': '🞉', 'I': '🞊', 'J': '🞋',
  'K': '🞌', 'L': '🞍', 'M': '🞎', 'N': '🞏', 'O': '🞐',
  'P': '🞑', 'Q': '🞒', 'R': '🞓', 'S': '🞔', 'T': '🞕',
  'U': '🞖', 'V': '🞗', 'W': '🞘', 'X': '🞙', 'Y': '🞚', 'Z': '🞛'
};

function encodeMasonic(str) {
  let encodedText = '';
  for (let char of str.toUpperCase()) {
    encodedText += masonicSymbols[char] || char;
  }
  return encodedText;
}

function decodeMasonic(str) {
  const decodingSymbols = Object.fromEntries(Object.entries(masonicSymbols).map(([key, value]) => [value, key]));
  let decodedText = '';
  let symbol = '';
  for (let char of str) {
    symbol += char;
    if (decodingSymbols[symbol]) {
      decodedText += decodingSymbols[symbol];
      symbol = '';
    }
  }
  return decodedText;
}

export default function MasonicCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [outputChars, setOutputChars] = useState([]);

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
        title={"Masonic Cipher"}
        setShowOverview={setShowOverview}
        encode={encodeMasonic}
        decode={decodeMasonic}
        keyComponentA={1}
      />
    </>
  );
}
