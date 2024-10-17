// TODO: import useState from react
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
// TODO: Import CipherOverview component
import CipherOverview from "../../ui/CipherOverview";

// TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/RailFenceCipherOverview"; // Assuming you have an overview component for RailFenceCipher

export default function RailFenceCipher(props) {
  const [showOverview, setShowOverview] = useState(false);
  const [railCount, setRailCount] = useState(3); // Default number of rails

  // Function to encode text using Rail Fence cipher
  function encode(str, rails) {
    const normalizedText = str.replace(/\s/g, ""); // Remove whitespace
    const fence = new Array(rails).fill().map(() => []);
    let rail = 0;
    let direction = 1;

    for (let char of normalizedText) {
      fence[rail].push(char);
      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }

    return fence.flat().join("");
  }

  // Function to decode text using Rail Fence cipher
  function decode(str, rails) {
    const normalizedText = str.replace(/\s/g, ""); // Remove whitespace
    const fence = new Array(rails).fill().map(() => []);
    let rail = 0;
    let direction = 1;
    let index = 0;

    for (let char of normalizedText) {
      fence[rail].push("*"); // Placeholder for non-space characters

      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }

    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < normalizedText.length; j++) {
        if (fence[i][j] === "*") {
          fence[i][j] = normalizedText[index++];
        }
      }
    }

    rail = 0;
    direction = 1;
    let decodedText = "";

    for (let i = 0; i < normalizedText.length; i++) {
      decodedText += fence[rail][i];
      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction;
      }
    }

    return decodedText;
  }

  // Function to handle rail count change
  const handleRailCountChange = (count) => {
    setRailCount(count);
  };

  // TODO:  Add the CipherOverview component in the return statement.
  // TODO:  Add title and setShowOverview attribute to the CipherFactory component.
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
        title={"Rail Fence Cipher"}
        setShowOverview={setShowOverview}
        encode={(str) => encode(str, railCount)}
        decode={(str) => decode(str, railCount)}
        keyComponentA={1} // Adjust as per your component structure
        extraSettings={{
          label: "Number of Rails:",
          value: railCount,
          onChange: handleRailCountChange,
          min: 2,
          max: 10,
          step: 1,
        }}
      />
    </>
  );
}