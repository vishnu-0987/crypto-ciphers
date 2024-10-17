// src/CipherList.jsx

import React, { useState, useImperativeHandle, forwardRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "./index.css"; // Ensure this CSS file is correctly imported

const CipherList = forwardRef(({ cipherNames, onCipherSelect, curr }, ref) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6; // Number of ciphers to display at once
  const itemWidth = 200; // Width of each cipher item including margin

  // Expose scrollToCipher method to parent via ref
  useImperativeHandle(ref, () => ({
    scrollToCipher: (name) => {
      const index = cipherNames.indexOf(name);
      if (index === -1) return; // Cipher not found

      let newStartIndex = startIndex;

      // If the cipher is before the current view, adjust startIndex
      if (index < startIndex) {
        newStartIndex = index;
      }
      // If the cipher is after the current view, adjust startIndex
      else if (index >= startIndex + itemsToShow) {
        newStartIndex = index - itemsToShow + 1;
      }

      // Ensure newStartIndex is within valid bounds
      newStartIndex = Math.max(
        0,
        Math.min(newStartIndex, cipherNames.length - itemsToShow)
      );

      setStartIndex(newStartIndex);
    },
  }));

  const handleNext = () => {
    if (startIndex + 1 <= cipherNames.length - itemsToShow) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const translateX = startIndex * itemWidth;

  const handleItemClick = (name) => {
    onCipherSelect(name);
  };

  return (
    <div className={`cipher-list-wrapper ${curr ? "background-adjust" : ""}`}>
      <button
        onClick={handlePrev}
        className="arrow-button"
        disabled={startIndex === 0}
        aria-label="Previous"
        style={{ marginLeft: "10px" }}
      >
        <FaArrowLeft />
      </button>
      <div className="cipher-list-container">
        <div
          className="cipher-list"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {cipherNames.map((cipher) => (
            <div
              key={cipher}
              className={`cipher-item`} // Conditionally apply selected class
              id={`${cipher === curr ? "selectedCipher" : ""}`}
              onClick={() => handleItemClick(cipher)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleItemClick(cipher);
              }}
            >
              {cipher}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="arrow-button"
        disabled={startIndex + itemsToShow >= cipherNames.length}
        aria-label="Next"
        style={{ marginRight: "10px" }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
});

export default CipherList;
