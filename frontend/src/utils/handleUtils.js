// src/utils/ handlesUtils.js

export const generateHandles = (nodeId, handles = []) => {
    return handles.map((handle) => ({
        ...handle,
        id: `${nodeId}-${handle.id}`,
    }));
};