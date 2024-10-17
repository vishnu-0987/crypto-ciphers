import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import { Header, Description, References, Example } from "../../overviews/DaggerCipherOverview"; // Adjust the import path

export default function DaggerCipher({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    // Mapping of English letters to dagger symbols
    const daggerMap = {
        'A': '†', 'B': '‡', 'C': '†', 'D': '‡', 'E': '†', 'F': '‡', 'G': '†', 'H': '‡',
        'I': '†', 'J': '‡', 'K': '†', 'L': '‡', 'M': '†', 'N': '‡', 'O': '†', 'P': '‡',
        'Q': '†', 'R': '‡', 'S': '†', 'T': '‡', 'U': '†', 'V': '‡', 'W': '†', 'X': '‡',
        'Y': '†', 'Z': '‡', 'a': '†', 'b': '‡', 'c': '†', 'd': '‡', 'e': '†', 'f': '‡',
        'g': '†', 'h': '‡', 'i': '†', 'j': '‡', 'k': '†', 'l': '‡', 'm': '†', 'n': '‡',
        'o': '†', 'p': '‡', 'q': '†', 'r': '‡', 's': '†', 't': '‡', 'u': '†', 'v': '‡',
        'w': '†', 'x': '‡', 'y': '†', 'z': '‡', ' ': ' ',
    };

    // Function to encrypt text using Dagger's Cipher
    function encode(str) {
        let encodedChars = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const daggerChar = daggerMap[char];
            encodedChars += daggerChar ? daggerChar : char;
        }

        return encodedChars;
    }

    // Function to decrypt text using Dagger's Cipher
    function decode(str) {
        let decryptedText = '';

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            const originalChar = Object.keys(daggerMap).find(key => daggerMap[key] === char);
            decryptedText += originalChar ? originalChar : char;
        }

        return decryptedText;
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
                title={"Dagger Cipher"}
                setShowOverview={setShowOverview}
                encode={encode}
                decode={decode}
                            />
        </>
    );
}
