//nodeTypes.js

import { InputNode } from "./nodes/inputNode";
import { OutputNode } from "./nodes/outputNode";
import { LLMNode } from "./nodes/llmNode";
import { TextNode } from "./nodes/textNode";
import { ApiNode } from "./nodes/apiNode";
import { DatabaseNode } from "./nodes/databaseNode";
import { ImageNode } from "./nodes/imageNode";
import { FilterNode } from "./nodes/filterNode";
import { DelayNode } from "./nodes/delayNode";

export const nodeTypes = {

    customInput: InputNode,

    llm: LLMNode,

    customOutput: OutputNode,

    text: TextNode,

    api: ApiNode,

    database: DatabaseNode,

    image: ImageNode,

    filter: FilterNode,

    delay: DelayNode,
    

};