// toolbar.js

import "./toolbar.css";

import { NODE_LIBRARY } from "./config/nodeLibrary";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {

    return (

        <div className="toolbar">

            <h2 className="toolbar-title">

                Nodes

            </h2>

            <div className="toolbar-list">

                {

                    NODE_LIBRARY.map((node) => (

                        <DraggableNode

                            key={node.type}

                            type={node.type}

                            title={node.title}

                            description={node.description}

                            icon={node.icon}

                        />

                    ))

                }

            </div>

        </div>

    );

};
