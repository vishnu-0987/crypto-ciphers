// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/PermutationCipherOverview";

// export default function PermutationCipher(props) {
//   const [showOverview, setShowOverview] = useState(false);
//   const [inputText, setInputText] = useState('');
//   const [key, setKey] = useState('');
//   const [outputText, setOutputText] = useState('');

// //   // Function to encode using the Permutation cipher
// //   const encode = (text, key) => {
// //     const numRows = Math.ceil(text.length / key.length);
// //     const paddedText = text.padEnd(numRows * key.length, ' ');

// //     let grid = [];
// //     for (let i = 0; i < numRows; i++) {
// //       grid.push(paddedText.slice(i * key.length, (i + 1) * key.length));
// //     }

// //     const sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
// //     let encodedMessage = '';
// //     sortedKey.forEach(({ index }) => {
// //       grid.forEach(row => {
// //         encodedMessage += row[index];
// //       });
// //     });

// //     return encodedMessage;
// //   };

// //   // Function to decode using the Permutation cipher
// //   const decode = (text, key) => {
// //     const numRows = Math.ceil(text.length / key.length);
// //     const numCols = key.length;

// //     let grid = Array.from({ length: numCols }, () => Array(numRows).fill(''));

// //     const sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
// //     let counter = 0;

// //     sortedKey.forEach(({ index }) => {
// //       for (let i = 0; i < numRows; i++) {
// //         grid[index][i] = text[counter++];
// //       }
// //     });

// //     let decodedMessage = '';
// //     for (let i = 0; i < numRows; i++) {
// //       for (let j = 0; j < numCols; j++) {
// //         decodedMessage += grid[j][i];
// //       }
// //     }

// //     return decodedMessage.trimEnd();
// //   };
// // Function to encode using the Permutation cipher
// function encodePermutationCipher(text, key) {
//     // Calculate number of columns needed
//     const columns = key.length;
    
//     // Pad the text to fit evenly into columns
//     let paddedText = text.padEnd(Math.ceil(text.length / columns) * columns, ' ');
  
//     // Create an array to hold the columns
//     let grid = Array.from({ length: columns }, (_, rowIndex) =>
//       paddedText.slice(rowIndex * columns, (rowIndex + 1) * columns)
//     );
  
//     // Create a sorted array of key indices
//     let sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
  
//     // Initialize the encoded message
//     let encodedMessage = '';
    
//     // Traverse the columns based on sorted key
//     sortedKey.forEach(({ index }) => {
//       grid.forEach(row => {
//         encodedMessage += row[index];
//       });
//     });
  
//     return encodedMessage.trimEnd();
//   }
  
//   // Function to decode using the Permutation cipher
//   function decodePermutationCipher(text, key) {
//     // Calculate number of columns needed
//     const columns = key.length;
    
//     // Create a sorted array of key indices
//     let sortedKey = key.split('').map((char, index) => ({ char, index })).sort((a, b) => a.char.localeCompare(b.char));
    
//     // Calculate number of rows
//     const rows = Math.ceil(text.length / columns);
  
//     // Initialize the grid
//     let grid = Array.from({ length: rows }, () => Array(columns).fill(''));
  
//     // Populate the grid with the ciphertext
//     let counter = 0;
//     sortedKey.forEach(({ index }) => {
//       for (let i = 0; i < rows; i++) {
//         grid[i][index] = text[counter++];
//       }
//     });
  
//     // Initialize the decoded message
//     let decodedMessage = '';
  
//     // Read the plaintext from the grid
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < columns; j++) {
//         decodedMessage += grid[i][j];
//       }
//     }
  
//     return decodedMessage.trimEnd();
//   }
//   const handleEncode = () => {
//     setOutputText(encode(inputText, key));
//   };

//   const handleDecode = () => {
//     setOutputText(decode(inputText, key));
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
//         title={"Permutation Cipher"}
//         setShowOverview={setShowOverview}
//         encode={handleEncode}
//         decode={handleDecode}
//       >
//         <div>
//           <label>Key: </label>
//           <input type="text" value={key} onChange={e => setKey(e.target.value)} />
//         </div>
//         <div>
//           <label>Input Text: </label>
//           <textarea value={inputText} onChange={e => setInputText(e.target.value)} />
//         </div>
//         <div>
//           <label>Output Text: </label>
//           <textarea value={outputText} readOnly />
//         </div>
//       </CipherFactory>
//     </>
//   );
// }

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/PermutationCipherOverview";

const PermutationCipher = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [outputText, setOutputText] = useState('');

  // Function to encode using the Permutation cipher
  const encode = (text, key) => {
    // Remove spaces from the key and convert to array of digits
    const cleanedKey = key.replace(/\s/g, '');
    const keyArray = Array.from(cleanedKey).map(Number);

    // Calculate number of columns needed
    const columns = keyArray.length;
    const paddedText = text.padEnd(Math.ceil(text.length / columns) * columns, ' ');

    // Arrange plaintext into columns based on key
    let grid = Array.from({ length: columns }, (_, rowIndex) => 
      paddedText.slice(rowIndex * columns, (rowIndex + 1) * columns)
    );

    // Order columns according to key
    const sortedColumns = keyArray.map((num, index) => ({ column: grid[num - 1], order: index }))
                                  .sort((a, b) => a.order - b.order);
    
    // Combine columns to form ciphertext
    let ciphertext = '';
    for (let i = 0; i < grid.length; i++) {
      sortedColumns.forEach(({ column }) => {
        ciphertext += column[i];
      });
    }
    
    return ciphertext.trimEnd();
  };

  // Function to decode using the Permutation cipher
  const decode = (text, key) => {
    // Remove spaces from the key and convert to array of digits
    const cleanedKey = key.replace(/\s/g, '');
    const keyArray = Array.from(cleanedKey).map(Number);

    // Calculate number of columns needed
    const columns = keyArray.length;
    const numRows = Math.ceil(text.length / columns);

    // Create grid to store characters
    let grid = Array.from({ length: numRows }, () => Array(columns).fill(''));

    // Arrange ciphertext into columns based on key
    let counter = 0;
    keyArray.forEach((num, index) => {
      for (let i = 0; i < numRows; i++) {
        grid[i][num - 1] = text[counter++];
      }
    });

    // Read rows in key order to get plaintext
    let plaintext = '';
    grid.forEach(row => {
      plaintext += row.join('');
    });

    return plaintext.trimEnd();
  };

  // Handlers for encoding and decoding
  const handleEncode = () => {
    setOutputText(encode(inputText.toUpperCase(), key));
  };

  const handleDecode = () => {
    setOutputText(decode(inputText.toUpperCase(), key));
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
        title={"Permutation Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
      >
        <div>
          <label>Key: </label>
          <input type="text" value={key} onChange={e => setKey(e.target.value)} />
        </div>
        <div>
          <label>Input Text: </label>
          <textarea value={inputText} onChange={e => setInputText(e.target.value)} />
        </div>
        <div>
          <label>Output Text: </label>
          <textarea value={outputText} readOnly />
        </div>
      </CipherFactory>
    </>
  );
};

export default PermutationCipher;

