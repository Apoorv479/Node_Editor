//delayNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { TIME_UNITS } from "../constants/nodeOptions";

export const DelayNode = ({ id, data }) => {

    const [duration, setDuration] = useState(
        data?.duration || 5
    );

    const [unit, setUnit] = useState(
        data?.unit || "Seconds"
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
            title="Delay"
            icon="⏳"
            accentColor="#64748B"
            connections={connections}
        >

            <label htmlFor={`${id}-duration`}>
                Duration
            </label>

            <input
                id={`${id}-duration`}
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
            />

            <label htmlFor={`${id}-unit`}>
                Unit
            </label>

            <select
                id={`${id}-unit`}
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
            >
                {TIME_UNITS.map((timeUnit) => (
                    <option
                        key={timeUnit}
                        value={timeUnit}
                    >
                        {timeUnit}
                    </option>
                ))}
            </select>

        </BaseNode>

    );

};