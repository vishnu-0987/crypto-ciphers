import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

//TODO: import components from overview component
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/BinaryCodeOverview";

export default function BinaryCode() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  function encode(text) {
    const explanationsArray = [];
    const binaryCodes = text
      .split("")
      .map((char) => {
        const binaryChar = char.charCodeAt(0).toString(2).padStart(8, "0");
        // Add explanation for this character
        explanationsArray.push(
          `<code>${char}</code> → <code>${binaryChar}</code><br>`
        );
        return binaryChar;
      })
      .join(" ");

    explanationsArray.unshift(
      `<strong>Text:</strong> <code>${text}</code><br>`
    );
    explanationsArray.push(
      `<strong>Final Binary Code:</strong> <code>${binaryCodes}</code><br>`
    );

    setExplanation(explanationsArray);
    return binaryCodes;
  }

  function decode(binary) {
    const explanationsArray = [];
    const decodedText = binary
      .split(" ")
      .map((bin) => {
        const char = String.fromCharCode(parseInt(bin, 2));
        // Add explanation for this binary code
        explanationsArray.push(
          `<code>${bin}</code> → <code>${char}</code><br>`
        );
        return char;
      })
      .join("");

    explanationsArray.unshift(
      `<strong>Decoding Process:</strong><br>Binary: <code>${binary}</code><br>`
    );
    explanationsArray.push(
      `<strong>Final Text:</strong> <code>${decodedText}</code><br>`
    );

    setExplanation(explanationsArray);
    return decodedText;
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
        title={"Binary Code"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
