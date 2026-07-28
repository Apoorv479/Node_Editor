//draggableNode.js

import "./draggableNode.css";

export const DraggableNode = ({
    type,
    title,
    description,
    icon,
}) => {

    const onDragStart = (event, nodeType) => {

        const appData = {
            nodeType,
        };

        event.target.style.cursor = "grabbing";

        event.dataTransfer.setData(
            "application/reactflow",
            JSON.stringify(appData)
        );

        event.dataTransfer.effectAllowed = "move";

    };

    const onDragEnd = (event) => {

        event.target.style.cursor = "grab";

    };

    return (

        <div

            className="draggable-node"

            draggable

            onDragStart={(event) =>
                onDragStart(event, type)
            }

            onDragEnd={onDragEnd}

        >

            <div className="draggable-node-icon">

                {icon}

            </div>

            <div className="draggable-node-content">

                <h3>{title}</h3>

                <p>{description}</p>

            </div>

        </div>

    );

};