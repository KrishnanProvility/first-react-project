import React from "react";

const Spinner = () => {
    const size = 48;
    const borderWidth = 5;

    // Outer spinner style (rotates)
    const spinnerStyle = {
        width: size,
        height: size,
        borderRadius: "50%",
        position: "relative",
        display: "inline-block",
        animation: "rotate 1s linear infinite",
    };

    // Inner circles style (replaces ::before and ::after)
    const circleBaseStyle = {
        boxSizing: "border-box",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "50%",
        border: `${borderWidth}px solid #FFF`,
        animation: "prixClipFix 2s linear infinite",
    };

    const circleAfterStyle = {
        ...circleBaseStyle,
        transform: "rotate3d(90, 90, 0, 180deg)",
        borderColor: "#FF3D00",
    };

    return (
        <>
            <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes prixClipFix {
          0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
          50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
          75%, 100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
        }
      `}</style>

            <span style={spinnerStyle}>
        <span style={circleBaseStyle}></span>
        <span style={circleAfterStyle}></span>
      </span>
        </>
    );
};

export default Spinner;
