import React from "react";

const Button = ({ label, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color || "blue",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
