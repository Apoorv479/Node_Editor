//llmNode.js

import { BaseNode } from "../components/BaseNode/BaseNode";

export const LLMNode = ({ id }) => {
    const connections = [
        {
            id: "system",
            type: "target",
            position: "left",
            style: {
                top: "33%"
            }
        },
        {
            id: "prompt",
            type: "target",
            position: "left",
            style: {
                top: "66%"
            }
        },
        {
            id: "response",
            type: "source",
            position: "right"
        }

    ];

    return (

        <BaseNode
            id={id}
            title="LLM"
            icon="🤖"
            accentColor="#8B5CF6"
            connections={connections}
        >
            <p>
                This is an LLM.
            </p>
        </BaseNode>

    );

};