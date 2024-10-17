// import React, { useState, useEffect } from 'react';
// import CipherFactory from '../../ui/EncryptDecrypt';

// // Function to encrypt a message using the Larabee Cipher with a keyword
// function encryptLarabee(message, keyword) {
//     if (typeof message !== 'string' || typeof keyword !== 'string') {
//         throw new TypeError('Message and keyword must be strings');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let encryptedMessage = '';

//     for (let i = 0; i < message.length; i++) {
//         let char = message[i].toUpperCase();
//         if (char === ' ') {
//             encryptedMessage += ' ';
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let keyChar = keyword[i % keyword.length].toUpperCase();
//         let keyIndex = alphabet.indexOf(keyChar);
//         let encryptedCharIndex = (charIndex + keyIndex) % 26; // Wrap around the alphabet
//         let encryptedChar = alphabet[encryptedCharIndex];
//         encryptedMessage += encryptedChar;
//     }

//     return encryptedMessage;
// }

// // Function to decrypt a message using the Larabee Cipher with a keyword
// function decryptLarabee(encryptedMessage, keyword) {
//     if (typeof encryptedMessage !== 'string' || typeof keyword !== 'string') {
//         throw new TypeError('Encrypted message and keyword must be strings');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let decryptedMessage = '';

//     for (let i = 0; i < encryptedMessage.length; i++) {
//         let char = encryptedMessage[i].toUpperCase();
//         if (char === ' ') {
//             decryptedMessage += ' ';
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let keyChar = keyword[i % keyword.length].toUpperCase();
//         let keyIndex = alphabet.indexOf(keyChar);
//         let decryptedCharIndex = (charIndex - keyIndex + 26) % 26; // Wrap around the alphabet
//         let decryptedChar = alphabet[decryptedCharIndex];
//         decryptedMessage += decryptedChar;
//     }

//     return decryptedMessage;
// }

// export default function LarabeeCipher({ ongetInfo }) {
//     const [keyword, setKeyword] = useState('');

//     // Function to display information about the Larabee cipher
//     const showInformation = () => {
//         const info = (
//             <>
//                 <p>The Larrabee Cipher is a polyalphabetic substitution cipher that uses a keyword to determine the shifting for each character in the plaintext.</p>
//                 <p>It enhances security by varying the Caesar cipher shift dynamically based on the keyword, making frequency analysis more difficult.</p>
//                 <ul>
//                     <li>To encrypt: Each letter in the plaintext is shifted according to the corresponding letter of the repeating keyword.</li>
//                     <li>To decrypt: Reverse the shift using the keyword to map the ciphertext back to the original plaintext.</li>
//                 </ul>
//             </>
//         );
//         ongetInfo(info);
//     };

//     // Display information when the component mounts
//     useEffect(() => {
//         showInformation();
//     }, []);

//     // JSX for input component to enter the keyword
//     const keyComponent = (
//         <div>
//             <label>
//                 Keyword:
//                 <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value.toUpperCase())} />
//             </label>
//         </div>
//     );
    
   
//     // Render the CipherFactory component with encode and decode functions
//     return (
//         <div>
//             {keyComponent}
//             <CipherFactory encode={(text) => encryptLarabee(text, keyword)} decode={(text) => decryptLarabee(text, keyword)} />
//         </div>
//     );
// }


// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
// import { Header, Description, References, Example } from "../../overviews/LarrabeeCipherOverview"; // Adjust the import path

// // Function to encrypt a message using the Larabee Cipher with a keyword
// function encryptLarabee(message, keyword) {
//     if (typeof message !== 'string' || typeof keyword !== 'string') {
//         throw new TypeError('Message and keyword must be strings');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let encryptedMessage = '';

//     for (let i = 0; i < message.length; i++) {
//         let char = message[i].toUpperCase();
//         if (char === ' ') {
//             encryptedMessage += ' ';
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let keyChar = keyword[i % keyword.length].toUpperCase();
//         let keyIndex = alphabet.indexOf(keyChar);
//         let encryptedCharIndex = (charIndex + keyIndex) % 26; // Wrap around the alphabet
//         let encryptedChar = alphabet[encryptedCharIndex];
//         encryptedMessage += encryptedChar;
//     }

//     return encryptedMessage;
// }

// // Function to decrypt a message using the Larabee Cipher with a keyword
// function decryptLarabee(encryptedMessage, keyword) {
//     if (typeof encryptedMessage !== 'string' || typeof keyword !== 'string') {
//         throw new TypeError('Encrypted message and keyword must be strings');
//     }

//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let decryptedMessage = '';

//     for (let i = 0; i < encryptedMessage.length; i++) {
//         let char = encryptedMessage[i].toUpperCase();
//         if (char === ' ') {
//             decryptedMessage += ' ';
//             continue;
//         }
//         let charIndex = alphabet.indexOf(char);
//         let keyChar = keyword[i % keyword.length].toUpperCase();
//         let keyIndex = alphabet.indexOf(keyChar);
//         let decryptedCharIndex = (charIndex - keyIndex + 26) % 26; // Wrap around the alphabet
//         let decryptedChar = alphabet[decryptedCharIndex];
//         decryptedMessage += decryptedChar;
//     }

//     return decryptedMessage;
// }

// // Your React component
// export default function LarabeeCipher({ ongetInfo }) {
//     const [showOverview, setShowOverview] = useState(false);
//     const [keyword, setKeyword] = useState('');

//     // Function to encode text using Larabee's Cipher with keyword
//     function encode(str) {
//         try {
//             return encryptLarabee(str, keyword);
//         } catch (error) {
//             console.error('Error encrypting:', error);
//             return ''; // Handle error gracefully, e.g., return empty string
//         }
//     }

//     // Function to decode text using Larabee's Cipher with keyword
//     function decode(str) {
//         try {
//             return decryptLarabee(str, keyword);
//         } catch (error) {
//             console.error('Error decrypting:', error);
//             return ''; // Handle error gracefully, e.g., return empty string
//         }
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
//                 title={"Larabee Cipher"}
//                 setShowOverview={setShowOverview}
//                 encode={encode}
//                 decode={decode}
//                 keyComponentA={1}
//             />
//         </>
//     );
// }
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import { Header, Description, References, Example } from "../../overviews/LarrabeeCipherOverview"; // Adjust the import path

// Function to encrypt a message using the Larabee Cipher with a keyword
function encryptLarabee(message, keyword) {
    if (typeof message !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Message and keyword must be strings');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i].toUpperCase();
        if (char === ' ') {
            encryptedMessage += ' ';
            continue;
        }
        let charIndex = alphabet.indexOf(char);
        let keyChar = keyword[i % keyword.length].toUpperCase();
        let keyIndex = alphabet.indexOf(keyChar);
        let encryptedCharIndex = (charIndex + keyIndex) % 26; // Wrap around the alphabet
        let encryptedChar = alphabet[encryptedCharIndex];
        encryptedMessage += encryptedChar;
    }

    return encryptedMessage;
}

// Function to decrypt a message using the Larabee Cipher with a keyword
function decryptLarabee(encryptedMessage, keyword) {
    if (typeof encryptedMessage !== 'string' || typeof keyword !== 'string') {
        throw new TypeError('Encrypted message and keyword must be strings');
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedMessage = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        let char = encryptedMessage[i].toUpperCase();
        if (char === ' ') {
            decryptedMessage += ' ';
            continue;
        }
        let charIndex = alphabet.indexOf(char);
        let keyChar = keyword[i % keyword.length].toUpperCase();
        let keyIndex = alphabet.indexOf(keyChar);
        let decryptedCharIndex = (charIndex - keyIndex + 26) % 26; // Wrap around the alphabet
        let decryptedChar = alphabet[decryptedCharIndex];
        decryptedMessage += decryptedChar;
    }

    return decryptedMessage;
}

// React component for Larabee Cipher
export default function LarabeeCipher({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);
    const [keyword, setKeyword] = useState('');

    // Function to encode text using Larabee's Cipher with keyword
    function encode(str) {
        try {
            return encryptLarabee(str, keyword);
        } catch (error) {
            console.error('Error encrypting:', error);
            return ''; // Handle error gracefully, e.g., return empty string
        }
    }

    // Function to decode text using Larabee's Cipher with keyword
    function decode(str) {
        try {
            return decryptLarabee(str, keyword);
        } catch (error) {
            console.error('Error decrypting:', error);
            return ''; // Handle error gracefully, e.g., return empty string
        }
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
                title={"Larabee Cipher"}
                setShowOverview={setShowOverview}
                encode={encode}
                decode={decode}
                keyComponentA={1}
            />
        </>
    );
}
