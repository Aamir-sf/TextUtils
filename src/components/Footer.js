import React from "react"
export default function Footer(props){
    return(
            <footer style={{
                background: props.mode === "dark" ? "#03233dff": "#f1f1f1",
              color: props.mode === "dark" ? "white" : "#000000ff",
              textAlign: "center",
              padding:"0px",
              position: "fixed",
              bottom: "0",
              width: "100%"
            }}>
                © 2025 | Made with 🚀 by Aamir {" "}
                <a
        href="https://github.com/Aamir-sf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: props.mode === "dark" ? "white" : "black",  }}
      >
        <i className="fa-brands fa-square-github" style={{ fontSize: "22px" }}></i>
      </a>
            </footer>
        
    )
}
