//textNode.js

import { useState, useEffect, useRef, useMemo } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { extractVariables } from "../utils/variableParser";

export const TextNode = ({ id, data }) => {

    const [currText, setCurrText] = useState(
        data?.text || "{{input}}"
    );

    const textAreaRef = useRef(null);

    const handleTextChange = (event) => {
        setCurrText(event.target.value);
    };

    const resizeTextarea = () => {

        const textarea = textAreaRef.current;

        if (!textarea) return;

        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;

    };

    useEffect(() => {
        resizeTextarea();
    }, [currText]);

    const variables = useMemo(() => {
        return extractVariables(currText);
    }, [currText]);

    const connections = useMemo(() => {

        return [

            ...variables.map((variable) => ({
                id: variable,
                type: "target",
                position: "left",
            })),

            {
                id: "output",
                type: "source",
                position: "right",
            },

        ];

    }, [variables]);

    return (

        <BaseNode
            id={id}
            title="Text"
            icon="📝"
            accentColor="#F59E0B"
            connections={connections}
        >

            <label htmlFor={`${id}-text`}>
                Text
            </label>

            <textarea
                id={`${id}-text`}
                ref={textAreaRef}
                value={currText}
                onChange={handleTextChange}
                placeholder="Type text here..."
            />

        </BaseNode>

    );

};