import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/Base64Overview";

// Base64 index table
const base64IndexTable =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export default function Base64Encoding() {
  const [showOverview, setShowOverview] = useState(false);
  const [explanation, setExplanation] = useState([]); // Explanation state

  // Helper function to split a string into chunks of a specific length
  function chunkString(str, length) {
    return str.match(new RegExp(".{1," + length + "}", "g")) || [];
  }

  // Helper function to convert a character to its binary representation
  function charToBinary(char) {
    return char.charCodeAt(0).toString(2).padStart(8, "0");
  }

  // Helper function to divide a binary string into 6-bit chunks
  function chunkBinaryString(binaryStr) {
    return chunkString(binaryStr, 6).map(
      (chunk) => chunk.padEnd(6, "0") // Pad to ensure all chunks are 6 bits
    );
  }

  // Helper function to map 6-bit binary strings to Base64 characters
  function binaryToBase64Char(binaryChunk) {
    const decimalValue = parseInt(binaryChunk, 2); // Convert binary to decimal
    return base64IndexTable[decimalValue]; // Map to Base64 character
  }

  // Encode a string using Base64 encoding
  function encode(str) {
    let explanationsArray = [];

    explanationsArray.push(
      `<strong>Step 1:  </strong>The input string is: ${str}<br>`
    );

    // Convert each character to ASCII and then to binary
    const inputChunks = chunkString(str, 1); // Split input into individual characters
    const binaryChunks = inputChunks.map((char, index) => {
      const asciiValue = char.charCodeAt(0); // Get ASCII value
      const binaryRepresentation = charToBinary(char); // Get binary form of the character
      explanationsArray.push(
        `Character <code>${char}</code> (ASCII: <code>${asciiValue}</code>) is represented in binary as: <code>${binaryRepresentation}</code><br>`
      );
      return binaryRepresentation;
    });

    // Concatenate all binary strings
    const fullBinaryString = binaryChunks.join("");
    explanationsArray.push(
      `<strong>Step 2:   </strong> Concatenating all binary values gives: <code>${fullBinaryString}</code><br>`
    );

    // Divide binary string into 6-bit chunks
    const sixBitChunks = chunkBinaryString(fullBinaryString);
    explanationsArray.push(
      `<strong>Step 3:   </strong>Dividing the binary string into 6-bit chunks: <code> ${sixBitChunks.join(
        " "
      )}</code><br>`
    );

    // Map each 6-bit chunk to Base64 characters
    const base64EncodedChars = sixBitChunks.map(binaryToBase64Char);
    explanationsArray.push(
      `<strong>Step 4:   </strong>Mapping each 6-bit chunk to Base64 characters: <code> ${base64EncodedChars.join(
        " "
      )} <strong>(---Please Refer to Overview for Base64 table ---)</strong></code><br>`
    );

    const asciiStringEncoded = base64EncodedChars.join("");

    explanationsArray.push(
      `<strong>The entire encoded Base64 string is: </strong><code>${asciiStringEncoded}</code><br>`
    );

    setExplanation(explanationsArray);
    return asciiStringEncoded;
  }

  // Decode a string using Base64 encoding
  // Decode a string using Base64 encoding
  // Decode a string using Base64 encoding
  function decode(str) {
    let explanationsArray = [];

    try {
      // Check if the input is valid Base64
      if (!isBase64(str)) {
        throw new Error("Invalid Base64 string");
      }

      explanationsArray.push(
        `<strong>Step 1:  </strong>The Base64 encoded string is: <code>${str}</code><br>`
      );

      // Decode Base64 to ASCII
      const decodedString = atob(str);

      explanationsArray.push(
        `<strong>Step 2:  </strong>Decoding the Base64 string into ASCII: <code>${decodedString}</code><br>`
      );

      // Convert the decoded ASCII string to binary for explanation
      const binaryChunks = chunkString(decodedString, 1).map((char, index) => {
        const asciiValue = char.charCodeAt(0); // Get ASCII value
        const binaryRepresentation = charToBinary(char); // Convert to binary
        explanationsArray.push(
          `Character <code>${char}</code> (ASCII: <code>${asciiValue}</code>) is represented in binary as: <code>${binaryRepresentation}</code><br>`
        );
        return binaryRepresentation;
      });

      // Concatenate binary values
      const fullBinaryString = binaryChunks.join("");
      explanationsArray.push(
        `<strong>Step 3:  </strong>Concatenating all binary values: <code>${fullBinaryString}</code><br>`
      );

      setExplanation(explanationsArray);
      return decodedString;
    } catch (error) {
      // Handle errors gracefully
      console.error("Failed to decode Base64:", error.message);
      explanationsArray.push(
        `<strong>Error:</strong> The string is not valid Base64. Please check your input.<br>`
      );
      setExplanation(explanationsArray);
      return ""; // Return an empty string on error
    }
  }

  // Helper function to check if a string is valid Base64
  function isBase64(str) {
    const base64Regex = /^[A-Za-z0-9+/=]+$/;
    return base64Regex.test(str) && str.length % 4 === 0; // Ensure it is divisible by 4
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
        title={"Base64 Encoding"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
        explanation={explanation} // Pass explanation to CipherFactory
      />
    </>
  );
}
