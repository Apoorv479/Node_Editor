import "./BaseNode.css";
import { NodeHeader } from "./NodeHeader";
import { NodeHandles } from "./NodeHandles";
import { generateHandles } from "../../utils/handleUtils";

export const BaseNode = ({
    id,
    title,
    icon,
    connections = [],
    accentColor = "#3B82F6",
    children,
}) => {

    const generatedConnections = generateHandles(
        id,
        connections
    );

    return (

        <div
         className="base-node"
        style={{
        "--accent-color": accentColor,
          }}
          >


            <NodeHeader
                title={title}
                icon={icon}
            />

            <div className="node-content">
                {children}
            </div>

            <NodeHandles
                connections={generatedConnections}
            />

        </div>

    );

};