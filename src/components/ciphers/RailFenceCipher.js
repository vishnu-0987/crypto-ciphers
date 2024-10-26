import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/RailFenceCipherOverview";

export default function RailFenceCipher() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state
  const [railCount, setRailCount] = useState(3); // Default number of rails

  // Function to encode text using Rail Fence cipher
  function encode(str, rails) {
    const normalizedText = str.replace(/\s/g, ""); // Remove whitespace
    const fence = new Array(rails).fill("").map(() => []);
    let rail = 0;
    let direction = 1;
    const explanationsArray = []; // Array to store explanations

    explanationsArray.push(
      `<strong>Plaintext: </strong><code>${str}</code><br>`
    );
    explanationsArray.push(
      `<strong>Number of Rails: </strong><code>${rails}</code><br><br>`
    );

    // Build the fence
    for (let char of normalizedText) {
      explanationsArray.push(
        `<strong>Placing:</strong> <code>${char}</code> on Rail <code>${
          rail + 1
        }</code><br>`
      );
      fence[rail].push(char);
      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction; // Change direction
      }
    }

    // Construct the encoded message
    const encodedText = fence.flat().join("");
    explanationsArray.push(
      `<br><strong>Encoded Rails:</strong><br>${fence
        .map(
          (railArr, index) =>
            `<code>Rail ${index + 1}: ${railArr.join("")}</code>`
        )
        .join("<br>")}`
    );
    explanationsArray.push(
      `<br><strong>Final Ciphertext:</strong> <code>${encodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return encodedText;
  }

  // Function to decode text using Rail Fence cipher
  function decode(str, rails) {
    const normalizedText = str.replace(/\s/g, ""); // Remove whitespace
    const fence = new Array(rails).fill("").map(() => []);
    let rail = 0;
    let direction = 1;
    let index = 0;
    const explanationsArray = []; // Array to store explanations

    explanationsArray.push(
      `<strong>Ciphertext: </strong><code>${str}</code><br>`
    );
    explanationsArray.push(
      `<strong>Number of Rails: </strong><code>${rails}</code><br><br>`
    );

    // Prepare the fence with placeholders
    for (let i = 0; i < normalizedText.length; i++) {
      fence[rail].push("*"); // Placeholder for non-space characters
      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction; // Change direction
      }
    }

    // Fill in the fence with actual characters
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < normalizedText.length; j++) {
        if (fence[i][j] === "*") {
          fence[i][j] = normalizedText[index++];
        }
      }
    }

    explanationsArray.push(
      `<strong>Filled Rails:</strong><br>${fence
        .map(
          (railArr, index) =>
            `<code>Rail ${index + 1}: ${railArr.join("")}</code>`
        )
        .join("<br>")}`
    );

    // Construct the decoded message
    rail = 0;
    direction = 1;
    let decodedText = "";

    for (let i = 0; i < normalizedText.length; i++) {
      decodedText += fence[rail][i];
      rail += direction;

      if (rail === rails - 1 || rail === 0) {
        direction = -direction; // Change direction
      }
    }

    explanationsArray.push(
      `<br><strong>Final Plaintext:</strong> <code>${decodedText}</code><br>`
    );
    setExplanation(explanationsArray);
    return decodedText;
  }

  // Function to handle rail count change
  const handleRailCountChange = (count) => {
    setRailCount(count);
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
        title={"Rail Fence Cipher"}
        setShowOverview={setShowOverview}
        encode={(str) => encode(str, railCount)}
        decode={(str) => decode(str, railCount)}
        explanation={explanation} // Pass the explanations to the CipherFactory
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
