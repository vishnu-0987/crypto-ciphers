import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/ROT13CipherOverview";

class ROT13Cipher {
    encrypt(text) {
        return text.replace(/[a-zA-Z]/g, function (char) {
            let baseCharCode = char <= 'Z' ? 65 : 97;
            return String.fromCharCode((char.charCodeAt(0) - baseCharCode + 13) % 26 + baseCharCode);
        });
    }

    decrypt(text) {
        return this.encrypt(text); // ROT13 is its own inverse
    }
}

export default function ROT13CipherComponent({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    const cipher = new ROT13Cipher();

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
                title={"ROT13 Cipher"}
                setShowOverview={setShowOverview}
                encode={cipher.encrypt.bind(cipher)}
                decode={cipher.decrypt.bind(cipher)}
            />
        </>
    );
}
