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

  function encode(text) {
    return text
      .split("")
      .map((char) => {
        return char.charCodeAt(0).toString(2).padStart(8, "0");
      })
      .join(" ");
  }

  function decode(binary) {
    return binary
      .split(" ")
      .map((bin) => {
        return String.fromCharCode(parseInt(bin, 2));
      })
      .join("");
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
        title={"BinaryCode"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}
