//inputNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";

export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data?.inputName || id.replace("customInput-", "input_")
    );
    const [inputType, setInputType] = useState(
        data?.inputType || "Text"
    );
    const connections = [
        {
            id: "value",
            type: "source",
            position: "right",
        },
    ];

    return (

        <BaseNode
            id={id}
            title="Input"
            icon="📥"
            accentColor="#2563EB"
            connections={connections}
        >

            <label>
                Name
                <input
                    type="text"
                    value={currName}
                    onChange={(e) => setCurrName(e.target.value)}
                />
            </label>

            <label>
                Type
                <select
                    value={inputType}
                    onChange={(e) => setInputType(e.target.value)}
                >
                    <option value="Text">
                        Text
                    </option>

                    <option value="File">
                        File
                    </option>

                </select>
            </label>

        </BaseNode>

    );

};