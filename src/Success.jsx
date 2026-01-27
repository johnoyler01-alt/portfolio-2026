import React from "react";

const Success = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#4f46e5" }}>Success!</h1>
      <p>Thanks for reaching out, John. Your message is in my inbox!</p>
      <p>I'll get back to you as soon as I can.</p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#4f46e5",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Return to Portfolio
      </a>
    </div>
  );
};

export default Success;
