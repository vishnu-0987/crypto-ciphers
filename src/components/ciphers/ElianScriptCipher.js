// 

import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/ElianScriptCipherOverview";

export default function ElianScriptCipher({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    // Mapping of English letters to Elian script symbols
    const elianCipherMap = {
        'A': "ﬧ", 'B': "コ", 'C': "┘", 'D': "п", 'E': "ߛ", 'F': "ப",
        'G': "厂", 'H': "ⵎ", 'I': "ட", 'J': "ᒣ", 'K': "ᓗ", 'L': "ᒧ",
        'M': "ᒉ", 'N': "ᑭ", 'O': "ᘂ", 'P': "ᒥ", 'Q': "ᓕ", 'R': "ᒪ",
        'S': "ᒭ", 'T': "ᓘ", 'U': "ᒨ", 'V': "ᒕ", 'W': "ᑮ", 'X': "ᒎ",
        'Y': "ᓟ", 'Z': "ᓛ"
    };

    // Reverse mapping for decoding
    const reverseElianCipherMap = Object.fromEntries(
        Object.entries(elianCipherMap).map(([key, value]) => [value, key])
    );

    // Function to encode text using Elian Script Cipher
    const encode = (text) => {
        let encoded = '';
        text = text.toUpperCase();

        for (let char of text) {
            if (elianCipherMap[char]) {
                encoded += elianCipherMap[char];
            } else {
                encoded += char; // Keep unknown characters as they are
            }
        }

        return encoded;
    };

    // Function to decode text using Elian Script Cipher
    const decode = (text) => {
        let decoded = '';

        for (let char of text) {
            if (reverseElianCipherMap[char]) {
                decoded += reverseElianCipherMap[char];
            } else {
                decoded += char; // Keep unknown characters as they are
            }
        }

        return decoded;
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
                title={"Elian Script Cipher"}
                setShowOverview={setShowOverview}
                encode={encode}
                decode={decode}
                
            />
        </>
    );
}
