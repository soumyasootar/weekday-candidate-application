import React, { useState } from "react";
import { Stack, Box, Typography, Button, autocompleteClasses } from "@mui/material";

const TruncatedText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleText = isExpanded ? "Collapse" : "View More";

    if (text.length <= maxLength || isExpanded) {
        return (
            <div>
                <Typography>{text}</Typography>
                {isExpanded && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={toggleExpansion}>{toggleText}</Button>
                    </div>
                )}
            </div>
        );
    }

    const truncatedText = text.slice(0, maxLength) + "...";

    return (
        <div>
            <div
                className={isExpanded ? "" : "faded-text"}
                style={{
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Typography>{truncatedText}</Typography>
                {!isExpanded && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "40px",
                            background:
                                "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
                            pointerEvents: "none",
                            transition: "height 0.3s ease",
                        }}
                    />
                )}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={toggleExpansion}>{toggleText}</Button>
            </div>
        </div>
    );
};


export default TruncatedText;
