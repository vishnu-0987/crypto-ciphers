import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/OctalCipherOverview";

export default function OctalCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [outputChars, setOutputChars] = useState([]);

  // Function to encode using the Octal cipher
  const encode = (text) => {
    let encodedMessage = "";
    for (let i = 0; i < text.length; i++) {
      const char = text.charAt(i);
      const asciiValue = char.charCodeAt(0);
      const octalValue = asciiValue.toString(8);
      encodedMessage += octalValue;
    }
    return encodedMessage;
  };

  // Function to decode using the Octal cipher
  const decode = (text) => {
    let decodedMessage = "";
    for (let i = 0; i < text.length; i += 3) {
      const octalValue = text.substr(i, 3);
      const asciiValue = parseInt(octalValue, 8);
      decodedMessage += String.fromCharCode(asciiValue);
    }
    return decodedMessage;
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
        title={"Octal Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}

