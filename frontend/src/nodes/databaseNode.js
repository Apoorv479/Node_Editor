//databaseNOde.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { DATABASE_OPERATIONS } from "../constants/nodeOptions";


export const DatabaseNode = ({ id, data }) => {

    const [collection, setCollection] = useState(
        data?.collection || ""
    );

    const [operation, setOperation] = useState(
        data?.operation || "Find"
    );

    const connections = [

        {
            id: "query",
            type: "target",
            position: "left",
        },

        {
            id: "result",
            type: "source",
            position: "right",
        },

    ];

    return (

        <BaseNode
            id={id}
            title="Database"
            icon="🗄"
            accentColor="#6366F1"
            connections={connections}
        >

            <label htmlFor={`${id}-collection`}>
                Collection
            </label>

            <input
                id={`${id}-collection`}
                type="text"
                placeholder="users_collections"
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
            />

            <label htmlFor={`${id}-operation`}>
                Operation
            </label>

            <select
                id={`${id}-operation`}
                value={operation}
                onChange={(e) => setOperation(e.target.value)}
            >
                {DATABASE_OPERATIONS.map((databaseOperation) => (
                    <option
                        key={databaseOperation}
                        value={databaseOperation}
                    >
                        {databaseOperation}
                    </option>
                ))}
            </select>

        </BaseNode>

    );

};