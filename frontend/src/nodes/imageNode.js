//imageNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode/BaseNode";
import { IMAGE_FORMATS } from "../constants/nodeOptions";

export const ImageNode = ({ id, data }) => {

    const [imageUrl, setImageUrl] = useState(
        data?.imageUrl || ""
    );

    const [format, setFormat] = useState(
        data?.format || "PNG"
    );

    const connections = [

        {
            id: "image-input",
            type: "target",
            position: "left",
        },

        {
            id: "image-output",
            type: "source",
            position: "right",
        },

    ];

    return (

        <BaseNode
            id={id}
            title="Image"
            icon="🖼"
            accentColor="#EC4899"
            connections={connections}
        >

            <label htmlFor={`${id}-image-url`}>
                Image URL
            </label>

            <input
                id={`${id}-image-url`}
                type="text"
                placeholder="https://images.example.com/photo.png"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <label htmlFor={`${id}-format`}>
                Format
            </label>

            <select
                id={`${id}-format`}
                value={format}
                onChange={(e) => setFormat(e.target.value)}
            >
                {IMAGE_FORMATS.map((imageFormat) => (
                    <option
                        key={imageFormat}
                        value={imageFormat}
                    >
                        {imageFormat}
                    </option>
                ))}
            </select>

        </BaseNode>

    );

};