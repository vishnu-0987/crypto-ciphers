import React, { useEffect, useRef } from "react";
import { Divider, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "./CipherOverview.css";

const CipherOverview = ({
  setShowOverview,
  Header,
  Description,
  Example,
  References,
}) => {
  const modalRef = useRef(null);

  const closeModal = () => {
    setShowOverview(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    // Focus the modal when it opens
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Cleanup on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="modal"
      onClick={closeModal}
      aria-modal="true"
      role="dialog"
      aria-labelledby="cipher-overview-title"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <div
        className="modal-overlay"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        ref={modalRef}
        tabIndex="-1"
      >
        <div className="modal-header">
          <Header id="cipher-overview-title" />
          <Button
            type="text"
            icon={<LeftOutlined />}
            shape="round"
            onClick={closeModal}
            className="back-button"
          >
            Back
          </Button>
        </div>
        <Divider
          className="divider"
          style={{ borderColor: "#bdbebf", color: "#1890ff" }}
        >
          Description
        </Divider>

        <Description />
        <Divider
          className="divider"
          style={{ borderColor: "#bdbebf", color: "#1890ff" }}
        >
          Example
        </Divider>
        <Example />
        <Divider
          className="divider"
          style={{ borderColor: "#bdbebf", color: "#1890ff" }}
        >
          References
        </Divider>
        <References style={{ color: "red" }} />
      </div>
    </div>
  );
};

export default CipherOverview;
