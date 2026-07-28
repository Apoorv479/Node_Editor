//filterNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { FILTER_OPERATORS } from "../constants/nodeOptions";

export const FilterNode = ({ id, data }) => {

    const [operator, setOperator] = useState(
        data?.operator || "Contains"
    );

    const [value, setValue] = useState(
        data?.value || ""
    );

    const connections = [

        {
            id: "input",
            type: "target",
            position: "left",
        },

        {
            id: "output",
            type: "source",
            position: "right",
        },

    ];

    return (

        <BaseNode
            id={id}
            title="Filter"
            icon="🔀"
            accentColor="#F97316"
            connections={connections}
        >

            <label htmlFor={`${id}-operator`}>
                Condition
            </label>

            <select
                id={`${id}-operator`}
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
            >
                {FILTER_OPERATORS.map((condition) => (
                    <option
                        key={condition}
                        value={condition}
                    >
                        {condition}
                    </option>
                ))}
            </select>

            <label htmlFor={`${id}-value`}>
                Value
            </label>

            <input
                id={`${id}-value`}
                type="text"
                placeholder="Enter value..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

        </BaseNode>

    );

};