import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";

import {
  Header,
  Description,
  References,
  Example,
} from "../../overviews/Base64Overview";

export default function Base64Encoding() {
  // Encode a string using ASCII cipher
  const [showOverview, setShowOverview] = useState(false);
  function encode(str) {
    const asciiStringEncoded = btoa(str);
    return asciiStringEncoded;
  }

  // Decode a string using ASCII cipher
  function decode(str) {
    return atob(str);
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
        title={"Base64 Ecoding"}
        setShowOverview={setShowOverview}
        encode={encode}
        decode={decode}
      />
    </>
  );
}
