import React from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  Example,
  References,
} from "../../overviews/AsciiOverview";

export default function CipherAscii() {
  const [showOverview, setShowOverview] = React.useState(false);
  const [explanation, setExplanation] = React.useState([]); // Explanation state

  // Encode a string using ASCII cipher with explanation
  function encode(str) {
    let result = "";
    let explanationsArray = []; // To store explanations

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      result += charCode + "-"; // Append the ASCII value followed by a hyphen
      explanationsArray.push(
        `<strong>'${str[i]}'</strong> -> <code>${charCode}</code></br>` // Explanation for each character with strong and code tags
      );
    }

    setExplanation(explanationsArray); // Set the explanations state
    return result.slice(0, -1); // Remove the trailing hyphen
  }

  // Decode a string using ASCII cipher with explanation
  function decode(str) {
    let result = "";
    let explanationsArray = []; // To store explanations
    const elements = str.split("-"); // Split by hyphen to get ASCII values

    for (let i = 0; i < elements.length; i++) {
      if (elements[i]) {
        const char = String.fromCharCode(elements[i]);
        result += char;
        explanationsArray.push(
          `<code>${elements[i]}</code> -> <strong>'${char}'</strong></br>` // Explanation for each ASCII value with strong and code tags
        );
      }
    }

    setExplanation(explanationsArray); // Set the explanations state
    return result;
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
        title={"Ascii Cipher"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass the explanations to the CipherFactory
      />
    </>
  );
}
