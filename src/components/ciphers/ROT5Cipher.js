import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/ROT5CipherOverview";

class ROT5Cipher {
    encrypt(text) {
        return text.replace(/[0-9]/g, function (char) {
            let shiftedDigit = (parseInt(char) + 5) % 10;
            return shiftedDigit.toString();
        });
    }

    decrypt(text) {
        return text.replace(/[0-9]/g, function (char) {
            let shiftedDigit = (parseInt(char) + 5) % 10;
            return shiftedDigit.toString();
        });
    }
}

export default function ROT5CipherComponent({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    const cipher = new ROT5Cipher();

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
                title={"ROT5 Cipher"}
                setShowOverview={setShowOverview}
                encode={cipher.encrypt.bind(cipher)}
                decode={cipher.decrypt.bind(cipher)}
            />
        </>
    );
}
