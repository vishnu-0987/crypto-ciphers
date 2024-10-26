import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/OmniBookCipherOverview";

export default function OmniBookCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to encode using the Omni Book Cipher
  const encode = (text, book) => {
    const words = text.split(" ");
    const encodedWords = [];
    const explanationsArray = []; // To store explanations

    words.forEach((word, index) => {
      const encodedWord = `${book}-${index}`;
      encodedWords.push(encodedWord);

      // Add explanation for each encoded word
      explanationsArray.push(
        `<strong>'${word}'</strong> -> <code>${encodedWord}</code></br>`
      );
    });

    setExplanation(explanationsArray); // Set the explanations state after processing all words
    return encodedWords.join(" ");
  };

  // Function to decode using the Omni Book Cipher
  const decode = (text, book) => {
    const words = text.split(" ");
    const decodedWords = [];
    const explanationsArray = []; // To store explanations

    words.forEach((encodedWord) => {
      const [bookKey, index] = encodedWord.split("-");
      let decodedWord = encodedWord; // Default to original encoded word

      if (bookKey === book) {
        decodedWord = `word${index}`;
      }

      decodedWords.push(decodedWord);

      // Add explanation for each decoded word
      explanationsArray.push(
        `<code>${encodedWord}</code> -> <strong>'${decodedWord}'</strong></br>`
      );
    });

    setExplanation(explanationsArray); // Set the explanations state after processing all words
    return decodedWords.join(" ");
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
        title={"Omni Book Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass the explanations to the CipherFactory
        keyComponentA="STR"
      />
    </>
  );
}
