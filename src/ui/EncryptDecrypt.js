// EncryptDecrypt.js
import {
  Row,
  InputNumber,
  Input,
  Button,
  Tooltip,
  Typography,
  Space,
  Card,
} from "antd";
import React, { useState } from "react";
import SmoothTextInput from "./SmoothText";
import { InfoOutlined } from "@ant-design/icons";
import "./EncryptDecrypt.css";

const { Title } = Typography;

export default function CipherFactory({
  title = "Cipher Name",
  setShowOverview,
  encode,
  decode,
  keyComponentA,
  keyComponentB,
  explanation, // New prop for explanations
}) {
  const [leftText, setLeftText] = useState("");
  const [rightText, setRightText] = useState("");
  const [shift1, setShift1] = useState(keyComponentA === "STR" ? "" : 0);
  const [shift2, setShift2] = useState(keyComponentB === "STR" ? "" : 0);

  const setKey1 = (userKeyInput) => {
    let text =
      keyComponentA === "STR" ? userKeyInput.target.value : userKeyInput;
    const newShift1 = keyComponentA === "STR" ? text : Number(userKeyInput);
    setShift1(newShift1);
    // Update ciphered text with new key
    setRightText(encode(leftText, newShift1, shift2));
  };

  const setKey2 = (userKeyInput) => {
    const newKey2 =
      keyComponentB === "STR"
        ? userKeyInput.target.value
        : Number(userKeyInput);
    setShift2(newKey2);
    // Update ciphered text with new key
    setRightText(encode(leftText, shift1, newKey2));
  };

  const handleLeftTextChange = (event) => {
    let text = event.target.value;
    setLeftText(text);
    setRightText(encode(text, shift1, shift2));
  };

  const handleRightTextChange = (event) => {
    let text = event.target.value;
    setRightText(text);
    setLeftText(decode(text, shift1, shift2));
  };

  return (
    <Card className="cipher-container">
      <div className="header">
        <Space
          direction="horizontal"
          align="center"
          className="title-tooltip-container"
        >
          <Title level={1} className="cipher-title">
            {title}
          </Title>
          <Tooltip title="Click to view overview">
            <Button
              type="primary"
              shape="circle"
              size="medium"
              className="info-button"
              icon={<InfoOutlined />}
              onClick={() => setShowOverview(true)}
            />
          </Tooltip>
        </Space>
      </div>

      <div className="key-inputs">
        {keyComponentA && (
          <Row className="input-secret-key-row">
            {keyComponentA === "STR" ? (
              <Input
                addonAfter="Cipher Key A"
                placeholder="Enter Key A"
                value={shift1}
                onChange={setKey1}
                className="input-secret-key"
              />
            ) : (
              <InputNumber
                addonBefore="Cipher Key A"
                placeholder="Shift value"
                value={shift1}
                onChange={setKey1}
                className="input-secret-key-number"
              />
            )}
          </Row>
        )}
        {keyComponentB && (
          <Row className="input-secret-key-row">
            {keyComponentB === "STR" ? (
              <Input
                addonAfter="Cipher Key B"
                placeholder="Enter Key B"
                value={shift2}
                onChange={setKey2}
                className="input-secret-key"
              />
            ) : (
              <InputNumber
                addonBefore="Cipher Key B"
                placeholder="Shift value"
                value={shift2}
                onChange={setKey2}
                className="input-secret-key-number"
              />
            )}
          </Row>
        )}
      </div>

      <Row className="text-inputs">
        <SmoothTextInput
          value={leftText}
          isLeft={true}
          onChange={handleLeftTextChange}
          placeholder="Enter text to Encrypt"
          className="text-input"
        />
        <SmoothTextInput
          value={rightText}
          isLeft={false}
          onChange={handleRightTextChange}
          placeholder="Enter text to Decrypt"
          className="text-input"
        />
      </Row>

      {/* Dynamic Explanation Section */}
      {explanation && explanation.length > 0 && (
        <div className="explanation-section">
          <Title level={3}>Encryption Explanation:</Title>
          <ul>
            {explanation.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
