import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path
import { Header, Description, References, Example } from "../../overviews/MorseCipherOverview"; // Adjust the import path

export default function MorseCipher({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    // Mapping of English letters to Morse code
    const morseMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', ' ': '/', '.': '.-.-.-', ',': '--..--',
        '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.',
        ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
        '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
        '@': '.--.-.'
    };

    // Function to encode text into Morse code
    function encode(str) {
        return str.toUpperCase().split('').map(char => morseMap[char] || char).join(' ');
    }

    // Reverse mapping of Morse code to English letters
    const reverseMorseMap = Object.fromEntries(Object.entries(morseMap).map(([k, v]) => [v, k]));

    // Function to decode Morse code back into text
    function decode(morseCode) {
        return morseCode.split(' ').map(code => reverseMorseMap[code] || code).join('');
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
                title={"Morse Cipher"}
                setShowOverview={setShowOverview}
                encode={encode}
                decode={decode}
                
            />
        </>
    );
}
