import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/ROT5CipherOverview";

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

export default function ROT5CipherComponent() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  const cipher = new ROT5Cipher();

  const handleEncode = (text) => {
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${text}</code><br>`
    );

    const encodedText = cipher.encrypt(text);
    explanationsArray.push(`<br><strong>Encoded Digits:</strong><br>`);

    text.split("").forEach((char) => {
      if (/\d/.test(char)) {
        let shiftedDigit = (parseInt(char) + 5) % 10;
        explanationsArray.push(
          `<code>${char}</code> → <code>${shiftedDigit}</code><br>`
        );
      } else {
        explanationsArray.push(
          `<code>${char}</code> is not a digit and remains unchanged.<br>`
        );
      }
    });

    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return encodedText;
  };

  const handleDecode = (text) => {
    const explanationsArray = []; // Array to store explanations
    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${text}</code><br>`
    );

    const decodedText = cipher.decrypt(text);
    explanationsArray.push(`<br><strong>Decoded Digits:</strong><br>`);

    text.split("").forEach((char) => {
      if (/\d/.test(char)) {
        let shiftedDigit = (parseInt(char) + 5) % 10;
        explanationsArray.push(
          `<code>${char}</code> → <code>${shiftedDigit}</code><br>`
        );
      } else {
        explanationsArray.push(
          `<code>${char}</code> is not a digit and remains unchanged.<br>`
        );
      }
    });

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return decodedText;
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
        title={"ROT5 Cipher"}
        setShowOverview={setShowOverview}
        encode={handleEncode}
        decode={handleDecode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
