import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/PigPenCipherOverview";

class PigpenCipher {
    constructor() {
        this.charToSymbol = {
            'A': '🞀', 'B': '🞁', 'C': '🞂', 'D': '🞃', 'E': '🞄', 'F': '🞅',
            'G': '🞆', 'H': '🞇', 'I': '🞈', 'J': '🞉', 'K': '🞊', 'L': '🞋',
            'M': '🞌', 'N': '🞍', 'O': '🞎', 'P': '🞏', 'Q': '🞐', 'R': '🞑',
            'S': '🞒', 'T': '🞓', 'U': '🞔', 'V': '🞕', 'W': '🞖', 'X': '🞗',
            'Y': '🞘', 'Z': '🞙',
            'a': '🞀', 'b': '🞁', 'c': '🞂', 'd': '🞃', 'e': '🞄', 'f': '🞅',
            'g': '🞆', 'h': '🞇', 'i': '🞈', 'j': '🞉', 'k': '🞊', 'l': '🞋',
            'm': '🞌', 'n': '🞍', 'o': '🞎', 'p': '🞏', 'q': '🞐', 'r': '🞑',
            's': '🞒', 't': '🞓', 'u': '🞔', 'v': '🞕', 'w': '🞖', 'x': '🞗',
            'y': '🞘', 'z': '🞙'
        };
        this.symbolToChar = {};
        for (let char in this.charToSymbol) {
            if (this.charToSymbol.hasOwnProperty(char)) {
                this.symbolToChar[this.charToSymbol[char]] = char;
            }
        }
    }

    encrypt(text) {
        let encryptedMessage = "";
        for (let char of text) {
            if (this.charToSymbol[char]) {
                encryptedMessage += this.charToSymbol[char];
            } else {
                encryptedMessage += char; // Preserve non-alphabetic characters
            }
        }
        return encryptedMessage;
    }

    decrypt(text) {
        let decryptedMessage = "";
        let index = 0;
        while (index < text.length) {
            let symbol = text.substr(index, 2); // Pigpen symbols are represented by 2 characters
            if (this.symbolToChar[symbol]) {
                decryptedMessage += this.symbolToChar[symbol];
                index += 2;
            } else {
                decryptedMessage += text[index]; // Preserve non-Pigpen symbols
                index++;
            }
        }
        return decryptedMessage;
    }
}

export default function PigpenCipherComponent({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    const cipher = new PigpenCipher();

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
                title={"Pigpen Cipher"}
                setShowOverview={setShowOverview}
                encode={cipher.encrypt.bind(cipher)}
                decode={cipher.decrypt.bind(cipher)}
            />
        </>
    );
}
