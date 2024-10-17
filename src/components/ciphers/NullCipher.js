import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/NullCipherOverview";

export default function NullCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [inputText, setInputText] = useState('');
  const [inputChars, setInputChars] = useState([]);
  const [outputChars, setOutputChars] = useState([]);

  // Function to encode using the Null cipher (combine first letters)
  const encode = (text) => {
    const words = text.split(' ');
    const combinedLetters = words.reduce((acc, word) => {
      if (word.length > 0) {
        return acc + word.charAt(0).toUpperCase();
      } else {
        return acc;
      }
    }, '');
    return combinedLetters;
  };

  // Function to decode using the Null cipher (remove combined letters)
  const decode = (text) => {
    // Decoding is the same as encoding in this case
    return encode(text);
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
        title={"Null Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
   
      />
    </>
  );
}
