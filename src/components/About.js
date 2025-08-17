import React from "react";

export default function About(props) {
  return (
    <div className="center-screen">
      <div
        style={{
          backgroundColor: props.mode === "dark" ? "#03233dff" : "white",
          color: props.mode === "dark" ? "white" : "#03233dff",
        }}
      >
        <div
          className="container"
          style={{
            backgroundColor: props.mode === "dark" ? "#03233dff" : "white",
            color: props.mode === "dark" ? "white" : "#03233dff",
            border: "2px solid #e3e0e0ff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 3px 14px rgba(203, 206, 216, 0.69)",
          }}
        >
          <h2>About Us</h2>
          <p className="my-3">
            TextUtils is a word counter, character counter, and text
            manipulation tool built using React. It allows users to convert text
            to uppercase, lowercase, clear text, and even listen to the entered
            text. This app is designed to be fast, easy to use, and responsive
            for all devices.
          </p>
          <p className="my-3">
            It is designed for 👨‍🎓 students, ✍️ writers, and 💼 professionals who
            want to save time ⏳ in formatting and analyzing text. With features
            like 🔤 word and 📝 character count, ⏱️ reading time estimation, and
            ⚡ easy-to-use tools, TextUtils makes text editing faster 🚀 and
            smarter 🤓.
          </p>
        </div>
      </div>
    </div>
  );
}
