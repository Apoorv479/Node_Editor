from pydantic import BaseModel
from typing import List


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class PipelineRequest(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool
