// outputNode.js


import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";

export const OutputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(
        data?.outputName || id.replace("customOutput-", "output_")
    );
    const [outputType, setOutputType] = useState(
        data?.outputType || "Text"
    );
    const connections = [
        {
            id: "value",
            type: "target",
            position: "left",
        },
    ];

    return (

        <BaseNode
            id={id}
            title="Output"
            icon="📤"
            accentColor="#10B981"
            connections={connections}
        >

            <label>
                Name
                <input
                    value={currName}
                    onChange={(e) => setCurrName(e.target.value)}
                />
            </label>

            <label>
                Type
                <select
                    value={outputType}
                    onChange={(e) => setOutputType(e.target.value)} >

                    <option value="Text">
                        Text
                    </option>

                    <option value="Image">
                        Image
                    </option>

                </select>
            </label>

        </BaseNode>

    );

};