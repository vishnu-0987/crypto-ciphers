import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/NullCipherOverview";

export default function NullCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Function to encode using the Null cipher (combine first letters)
  const encode = (text) => {
    const words = text.split(" ");
    const explanations = []; // Temporary array to hold explanations

    const combinedLetters = words.reduce((acc, word) => {
      if (word.length > 0) {
        const firstLetter = word.charAt(0).toUpperCase();
        // Add explanation for the current word
        explanations.push(
          `<strong>'${firstLetter}'</strong> from <strong>'${word}'</strong></br>`
        );
        return acc + firstLetter;
      } else {
        return acc;
      }
    }, "");

    // Update the explanation state with the latest explanations
    setExplanation(explanations);

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
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
