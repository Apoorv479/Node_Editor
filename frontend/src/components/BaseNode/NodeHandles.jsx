import { Handle, Position } from "reactflow";

const positionMap = {
    left: Position.Left,
    right: Position.Right,
    top: Position.Top,
    bottom: Position.Bottom,
};

export const NodeHandles = ({ connections = [] }) => {

    const handleCounts = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    };

    return (
        <>
            {connections.map((connection) => {

                const currentIndex =
                    handleCounts[connection.position]++;

                const style = {
                    ...connection.style,
                };

                switch (connection.position) {

                    case "left":
                    case "right":
                        style.top = `${30 + currentIndex * 30}px`;
                        break;

                    case "top":
                    case "bottom":
                        style.left = `${40 + currentIndex * 40}px`;
                        break;

                    default:
                        break;
                }

                return (
                    <Handle
                        key={connection.id}
                        id={connection.id}
                        type={connection.type}
                        position={positionMap[connection.position]}
                        style={style}
                    />
                );

            })}
        </>
    );

};