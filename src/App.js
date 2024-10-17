// src/App.jsx

import React, { useState, useRef } from "react";
import {
  Layout,
  Typography,
  Watermark,
  Spin,
  Button,
  AutoComplete,
  Input,
} from "antd";

import "./App.css";

// Import all cipher components
import AtbashCipher from "./components/ciphers/atbash";
import CaesarCipher from "./components/ciphers/caesar";
import BinaryEncoding from "./components/ciphers/binary";
import AffineCipher from "./components/ciphers/AffineCipher";
import CipherAscii from "./components/ciphers/CipherAscii";
import AMSCO from "./components/ciphers/AMSCO";
import AutoKey from "./components/ciphers/AutoKey";
import BaconianCipher from "./components/ciphers/Baconian";
import Base64Encoding from "./components/ciphers/Base64";
import BinaryEncodedDecimal from "./components/ciphers/BCD";
import BeaufortCipher from "./components/ciphers/Beaufort";
import BellasoCipher from "./components/ciphers/Bellaso";
import BifidCipher from "./components/ciphers/Bifid";
import ADFGVX from "./components/ciphers/ADFGVX";
import BinaryCode from "./components/ciphers/BinaryCode";
import Checkerboard from "./components/ciphers/Checkerboard";
import ChaoCipher from "./components/ciphers/Chaocipher";
import Cipher94 from "./components/ciphers/94 Cipher";
import BookCipher from "./components/ciphers/BookCipher";
import Masonic from "./components/ciphers/MasonicCipher";

// Add the new cipher files
import DaggerCipher from "./components/ciphers/DaggerCipher";
import DancingMenCipher from "./components/ciphers/DancingMenCipher";
import ElianScriptCipher from "./components/ciphers/ElianScriptCipher";
import GiovanBattistaBellasoCipher from "./components/ciphers/GiovanBattistaBellasoCipher";
import GrayCodeCipher from "./components/ciphers/GrayCodeCipher";
import GronsfeldCipher from "./components/ciphers/GronsfeldCipher";
import HexCodeCipher from "./components/ciphers/HexCodeCipher";
import HillCipher from "./components/ciphers/HillCipher";
import HomophonicSubstitutionCipher from "./components/ciphers/HomphonicSubstitutionCipher";
import ImperialCipher from "./components/ciphers/ImperialCipher";
import JuliusCipher from "./components/ciphers/JuliusCipher";
import KeywordCipher from "./components/ciphers/KeywordCipher";
import LarrabeeCipher from "./components/ciphers/LarrabeeCipher";

import MorseCipher from "./components/ciphers/MorseCipher";
import NihilistCipher from "./components/ciphers/NihilistCipher";
import NihilistSubstitutionCipher from "./components/ciphers/NihilistSubstitutionCipher";
import NullCipher from "./components/ciphers/NullCipher";
import OctalCipher from "./components/ciphers/OctalCipher";
import OmniBookCipher from "./components/ciphers/OmniBookCipher";
import OneTimePadCipher from "./components/ciphers/OneTimePadCipher";
import PermutationCipher from "./components/ciphers/PermutationCipher";
import PigPenCipher from "./components/ciphers/PigPenCipher";
import PortaCipher from "./components/ciphers/PortaCipher";
import RailFenceCipher from "./components/ciphers/RailFenceCipher";
import ROT5Cipher from "./components/ciphers/ROT5Cipher";
import ROT13Cipher from "./components/ciphers/ROT13Cipher";
import ROT18Cipher from "./components/ciphers/ROT18Cipher";
import ROT47Cipher from "./components/ciphers/ROT47Cipher";

// Import the CipherList component
import CipherList from "./CipherList";

const { Content, Footer, Header } = Layout;

const App = () => {
  const [isVerified, setIsVerified] = useState(false);

  // Define your cipher items as an array of objects
  const cipherItems = [
    { name: "Caesar Cipher", component: <CaesarCipher /> },
    { name: "Atbash Cipher", component: <AtbashCipher /> },
    { name: "Binary Conversion", component: <BinaryEncoding /> },
    { name: "Affine Cipher", component: <AffineCipher /> },
    { name: "Cipher Ascii", component: <CipherAscii /> },
    { name: "AMSCO Cipher", component: <AMSCO /> },
    { name: "AutoKey Cipher", component: <AutoKey /> },
    { name: "Baconian Cipher", component: <BaconianCipher /> },
    { name: "Base64 Encoding", component: <Base64Encoding /> },
    { name: "BCD Encoding", component: <BinaryEncodedDecimal /> },
    { name: "Beaufort Cipher", component: <BeaufortCipher /> },
    { name: "Bellaso Cipher", component: <BellasoCipher /> },
    { name: "Bifid Cipher", component: <BifidCipher /> },
    { name: "ADFGVX Cipher", component: <ADFGVX /> },
    { name: "BinaryCode", component: <BinaryCode /> },
    { name: "Checkerboard Cipher", component: <Checkerboard /> },
    { name: "94 Cipher", component: <Cipher94 /> },
    { name: "ChaoCipher", component: <ChaoCipher /> },
    { name: "BookCipher", component: <BookCipher /> },
    { name: "MasonicCipher", component: <Masonic /> },
    { name: "Dagger Cipher", component: <DaggerCipher /> },
    { name: "Dancing Men Cipher", component: <DancingMenCipher /> },
    { name: "Elian Script Cipher", component: <ElianScriptCipher /> },
    {
      name: "Giovan Battista Bellaso Cipher",
      component: <GiovanBattistaBellasoCipher />,
    },
    { name: "Gray Code Cipher", component: <GrayCodeCipher /> },
    { name: "Gronsfeld Cipher", component: <GronsfeldCipher /> },
    { name: "Hex Code Cipher", component: <HexCodeCipher /> },
    { name: "Hill Cipher", component: <HillCipher /> },
    {
      name: "Homophonic Substitution Cipher",
      component: <HomophonicSubstitutionCipher />,
    },
    { name: "Imperial Cipher", component: <ImperialCipher /> },
    { name: "Julius Cipher", component: <JuliusCipher /> },
    { name: "Keyword Cipher", component: <KeywordCipher /> },
    { name: "Larrabee Cipher", component: <LarrabeeCipher /> },
    // New Cipher Components
    { name: "Morse Cipher", component: <MorseCipher /> },
    { name: "Nihilist Cipher", component: <NihilistCipher /> },
    {
      name: "Nihilist Substitution Cipher",
      component: <NihilistSubstitutionCipher />,
    },
    { name: "Null Cipher", component: <NullCipher /> },
    { name: "Octal Cipher", component: <OctalCipher /> },
    { name: "Omni Book Cipher", component: <OmniBookCipher /> },
    { name: "One Time Pad Cipher", component: <OneTimePadCipher /> },
    { name: "Permutation Cipher", component: <PermutationCipher /> },
    { name: "Pig Pen Cipher", component: <PigPenCipher /> },
    { name: "Porta Cipher", component: <PortaCipher /> },
    { name: "Rail Fence Cipher", component: <RailFenceCipher /> },
    { name: "ROT5 Cipher", component: <ROT5Cipher /> },
    { name: "ROT13 Cipher", component: <ROT13Cipher /> },
    { name: "ROT18 Cipher", component: <ROT18Cipher /> },
    { name: "ROT47 Cipher", component: <ROT47Cipher /> },
  ];

  const [current, setCurrent] = useState(null); // No default selection
  const [comp, setComp] = useState(null); // Start with no component
  const [title, setTitle] = useState("Welcome to CipherWorld");

  // Create a ref for CipherList
  const cipherListRef = useRef(null);

  // State for search functionality
  const [searchValue, setSearchValue] = useState("");
  const [options, setOptions] = useState([]);

  // Handle cipher selection
  const handleCipherSelect = (selectedName) => {
    const selectedItem = cipherItems.find((item) => item.name === selectedName);
    if (selectedItem) {
      setCurrent(selectedName);
      setComp(selectedItem.component);
      setTitle(selectedItem.name);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // For smooth scrolling
      });

      // Scroll CipherList to the selected cipher
      if (cipherListRef.current) {
        cipherListRef.current.scrollToCipher(selectedName);
      }
    }
  };

  // Handle header click to reset selection
  const handleHeaderClick = () => {
    setCurrent(null);
    setComp(null);
    setTitle("Welcome to CipherWorld");
    setSearchValue(""); // Optionally clear the search input
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle search input changes
  const handleSearch = (value) => {
    setSearchValue(value);
    if (value) {
      const filteredOptions = cipherItems
        .filter((item) =>
          item.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((item) => ({
          value: item.name,
        }));
      setOptions(filteredOptions);
    } else {
      setOptions([]);
    }
  };

  // Handle selection from autocomplete
  const handleSelect = (value) => {
    setSearchValue(value); // Display the selected value in the input
    handleCipherSelect(value); // Update the component state
  };

  return (
    <>
      <Layout>
        <Header
          onClick={handleHeaderClick} // Attach the click handler
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            textAlign: "center",
            color: "black",
            fontWeight: "500",
            background: "#ffc105",
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
            cursor: "pointer", // Change cursor to pointer on hover
            transition: "background-color 0.3s ease", // Optional: Add transition
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            EN | CRYPTO | DE <Spin className="custom-spin" /> PlayGround
          </div>

          {/* Add AutoComplete Search Bar */}
          <div
            className="search-bar-container" // Optional: Add a class for better styling
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up
          >
            <AutoComplete
              className="cipher-search-autocomplete" // Custom class name
              style={{ width: 200 }}
              options={options}
              value={searchValue}
              onChange={handleSearch}
              onSelect={handleSelect}
              placeholder="Search Ciphers"
              allowClear
            >
              <Input.Search
                size="middle"
                placeholder="Search Ciphers"

                // Removed textAlign inline style
              />
            </AutoComplete>
          </div>
        </Header>

        {/* Replace Menu with CipherList */}
        <CipherList
          ref={cipherListRef} // Pass the ref to CipherList
          cipherNames={cipherItems.map((item) => item.name)}
          onCipherSelect={handleCipherSelect}
          curr={current}
        />

        <Watermark content="" className="watermark">
          <Content
            style={{
              padding: "50px",
              // Adjusted to accommodate Header and CipherList
              backgroundColor: "white", // Fixed background color
              minHeight: "calc(100vh - 160px - 100px)", // Ensure Content takes remaining space
            }}
          >
            {/* Check if an item is selected */}
            {current !== null ? (
              <div>{comp}</div>
            ) : (
              <div className="initial-main-content">
                <h1>Welcome to CipherWorld</h1>
                <p>
                  Welcome to CipherWorld, your ultimate resource for exploring a
                  wide range of encryption techniques. Dive into the fascinating
                  world of cryptography, where you can experiment with different
                  cipher methods and see how they transform your plaintext into
                  encrypted messages. Whether you're a beginner or an expert,
                  our hands-on tools will help you understand and apply
                  encryption in a practical way.
                </p>
                <div className="images-container-students">
                  <img
                    src="./image1.png"
                    alt="Image 1"
                    style={{ marginRight: "25px" }}
                  />
                  <img src="./image.png" alt="Image 2" />
                </div>
                <div className="various-ciphers">
                  <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
                    Choose a Cipher to Explore
                  </h1>
                  <div className="cipher-button-container">
                    {cipherItems.map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => handleCipherSelect(item.name)}
                        style={{
                          margin: "7px",
                        }}
                        className={`cipher-button-initial ${
                          current === item.name ? "selected-cipher-button" : ""
                        }`} // Conditionally apply selected class
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Content>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#ffc105",
              color: "black",
              fontSize: "17px",
            }}
          >
            {" "}
            - with Love from ZBST
          </Footer>
        </Watermark>
      </Layout>
    </>
  );
};

export default App;
