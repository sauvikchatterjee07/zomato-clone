import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const errorPageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const errorHeadingStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
  };

  const errorMessageStyle = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  };

  const linkStyle = {
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "rgb(227, 52, 66)",
    border: "none",
    fontFamily: "Arial, sans-serif",
    borderRadius: "5px",
    color: "white",
  };

  return (
    <div style={errorPageStyle}>
      <h1 style={errorHeadingStyle}>Oops! Something Went Wrong</h1>
      <p style={errorMessageStyle}>
        We apologize, but it looks like there was an error processing your
        request.
      </p>
      <p>
        Please try again later or contact customer support if the problem
        persists.
      </p>
      <Link to="/" style={linkStyle}>
        <button style={buttonStyle}>Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
