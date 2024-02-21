import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const colorAnimation = keyframes`
  0% { color: #00FFFF; }
  25% { color: #FF1493; }
  50% { color: #00FA9A; }
  75% { color: #FFF00; }
  100% { color: #000CD0; }
`;

const LoadingText = styled.h1`
  font-size: 50px;
  font-weight: bold;
  animation: ${colorAnimation} 4s infinite;
`;

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(loadingTimeout); // Clear the timeout on component unmount
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(rgb(0, 0, 50), rgb(0, 0, 255))" /* Gradient from dark blue to light blue */,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        letterSpacing: "2px",
      }}
    >
      <LoadingText>BLUE-PRINT</LoadingText>
    </div>
  );
};

export default LoadingPage;
