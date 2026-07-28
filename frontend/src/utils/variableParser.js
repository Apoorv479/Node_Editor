// src/utils/variableParser.js

export const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)];
    const variables = matches.map(match => match[1]);
    return [...new Set(variables)];

};