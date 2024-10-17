// // //TODO: import useState from react
// // import React, { useState } from "react";
// // import CipherFactory from "../../ui/EncryptDecrypt";
// // //TODO: Import CipherOverview component
// // import CipherOverview from "../../ui/CipherOverview";

// // //TODO: import components from overview component
// // import {
// //   Header,
// //   Description,
// //   References,
// //   Example,
// // } from "../../overviews/ROT18CipherOverview"; // Assuming you have an overview component for ROT18Cipher

// // export default function ROT18Cipher(props) {
// //   const [showOverview, setShowOverview] = useState(false);

// //   // Function to encode text using ROT18 cipher
// //   function encode(str) {
// //     const chars = str.split("");

// //     const encodedChars = chars.map((char) => {
// //       const charCode = char.charCodeAt(0);
// //       let newCharCode = charCode + 18;
// //       if (charCode >= 65 && charCode <= 90) {
// //         if (newCharCode < 65) {
// //           newCharCode = 90 - (65 - newCharCode - 1);
// //         } else if (newCharCode > 90) {
// //           newCharCode = 65 + (newCharCode - 90 - 1);
// //         }
// //       } else if (charCode >= 97 && charCode <= 122) {
// //         if (newCharCode < 97) {
// //           newCharCode = 122 - (97 - newCharCode - 1);
// //         } else if (newCharCode > 122) {
// //           newCharCode = 97 + (newCharCode - 122 - 1);
// //         }
// //       }
// //       return String.fromCharCode(newCharCode);
// //     });

// //     return encodedChars.join("");
// //   }

// //   // Function to decode text using ROT18 cipher
// //   function decode(str) {
// //     return encode(str); // ROT18 is its own inverse
// //   }

// //   //TODO:  Add the CipherOverview component in the return statement.
// //   //TODO:  Add title and setShowOverview attribute to the CipherFactory component.
// //   return (
// //     <>
// //       {showOverview && (
// //         <CipherOverview
// //           setShowOverview={setShowOverview}
// //           Header={Header}
// //           Description={Description}
// //           Example={Example}
// //           References={References}
// //         />
// //       )}
// //       <CipherFactory
// //         title={"ROT18 Cipher"}
// //         setShowOverview={setShowOverview}
// //         encode={encode}
// //         decode={decode}
// //               />
// //     </>
// //   );
// // }
// import React, { useState } from "react";
// import CipherFactory from "../../ui/EncryptDecrypt";
// import CipherOverview from "../../ui/CipherOverview";
// import { Header, Description, References, Example } from "../../overviews/ROT18CipherOverview";

// class ROT18Cipher {
//     encrypt(text) {
//         return text.replace(/[a-zA-Z]/g, function (char) {
//             let baseCharCode = char <= 'Z' ? 65 : 97;
//             return String.fromCharCode((char.charCodeAt(0) - baseCharCode + 18) % 26 + baseCharCode);
//         });
//     }

//     decrypt(text) {
//         return this.encrypt(text); // ROT18 is its own inverse
//     }
// }

// export default function ROT18CipherComponent({ ongetInfo }) {
//     const [showOverview, setShowOverview] = useState(false);

//     const cipher = new ROT18Cipher();

//     return (
//         <>
//             {showOverview && (
//                 <CipherOverview
//                     setShowOverview={setShowOverview}
//                     Header={Header}
//                     Description={Description}
//                     Example={Example}
//                     References={References}
//                 />
//             )}
//             <CipherFactory
//                 title={"ROT18 Cipher"}
//                 setShowOverview={setShowOverview}
//                 encode={cipher.encrypt.bind(cipher)}
//                 decode={cipher.decrypt.bind(cipher)}
//             />
//         </>
//     );
// }
import React, { useState } from "react";
import CipherFactory from "../../ui/EncryptDecrypt";
import CipherOverview from "../../ui/CipherOverview";
import { Header, Description, References, Example } from "../../overviews/ROT18CipherOverview";

class ROT18Cipher {
    encrypt(text) {
        return text.replace(/[a-zA-Z]/g, function (char) {
            let baseCharCode = char <= 'Z' ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - baseCharCode + 18) % 26) + baseCharCode);
        });
    }

    decrypt(text) {
        return this.encrypt(text); // ROT18 is its own inverse
    }
}

export default function ROT18CipherComponent({ ongetInfo }) {
    const [showOverview, setShowOverview] = useState(false);

    const cipher = new ROT18Cipher();

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
                title={"ROT18 Cipher"}
                setShowOverview={setShowOverview}
                encode={cipher.encrypt.bind(cipher)}
                decode={cipher.decrypt.bind(cipher)}
            />
        </>
    );
}
