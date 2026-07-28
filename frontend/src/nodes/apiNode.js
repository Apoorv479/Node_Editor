//apiNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { HTTP_METHODS } from "../constants/nodeOptions";

export const ApiNode = ({ id, data }) => {

    const [url, setUrl] = useState(
        data?.url || ""
    );

    const [method, setMethod] = useState(
        data?.method || "GET"
    );

    const connections = [
        {
            id: "request",
            type: "target",
            position: "left",
        },
        {
            id: "response",
            type: "source",
            position: "right",
        },
    ];

    return (

        <BaseNode
            id={id}
            title="API"
            icon="🌐"
            accentColor="#06B6D4"
            connections={connections}
        >

            <label htmlFor={`${id}-url`}>
                URL
            </label>

            <input
                id={`${id}-url`}
                type="text"
                placeholder="https://api.example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />

            <label htmlFor={`${id}-method`}>
                Method
            </label>

            <select
                id={`${id}-method`}
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >

                {HTTP_METHODS.map((httpMethod) => (

                    <option
                        key={httpMethod}
                        value={httpMethod}
                    >
                        {httpMethod}
                    </option>

                ))}

            </select>

        </BaseNode>

    );

};