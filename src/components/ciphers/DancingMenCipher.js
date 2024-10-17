import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview"; // Adjust the import path if necessary
import { Header, Description, References, Example } from "../../overviews/DancingMenCipherOverview"; // Adjust the import path

// Define the mapping between the alphabet and dancing men symbols
const dancingMenAlphabet = {
    'A': '🕺', 'B': '💃', 'C': '👯', 'D': '🕴️', 'E': '🧍', 'F': '🧎',
    'G': '🕺🏽', 'H': '💃🏽', 'I': '👯🏽', 'J': '🕴️🏽', 'K': '🧍🏽', 'L': '🧎🏽',
    'M': '🕺🏿', 'N': '💃🏿', 'O': '👯🏿', 'P': '🕴️🏿', 'Q': '🧍🏿', 'R': '🧎🏿',
    'S': '🕺🏻', 'T': '💃🏻', 'U': '👯🏻', 'V': '🕴️🏻', 'W': '🧍🏻', 'X': '🧎🏻',
    'Y': '🕺🏾', 'Z': '💃🏾'
};

const reverseDancingMenAlphabet = Object.keys(dancingMenAlphabet).reduce((obj, key) => {
    obj[dancingMenAlphabet[key]] = key;
    return obj;
}, {});

// Function to encrypt a message using the Dancing Men Cipher
function encryptDancingMen(message) {
    return message.toUpperCase().split('').map(char => 
        dancingMenAlphabet[char] || char
    ).join('');
}

// Function to decrypt a message using the Dancing Men Cipher
function decryptDancingMen(encryptedMessage) {
    return encryptedMessage.split('').map(symbol => 
        reverseDancingMenAlphabet[symbol] || symbol
    ).join('');
}

export default function DancingMenCipher({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    const encode = (str) => encryptDancingMen(str);
    const decode = (str) => decryptDancingMen(str);

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
                title={"Dancing Men Cipher"}
                setShowOverview={setShowOverview}
                encode={encode}
                decode={decode}
               
            />
        </>
    );
}
