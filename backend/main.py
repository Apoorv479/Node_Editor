from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from schemas import PipelineRequest, PipelineResponse
from services.graph_service import GraphService

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post(
    "/pipelines/parse",
    response_model=PipelineResponse,
)
def parse_pipeline(
    pipeline: PipelineRequest,
):

    num_nodes = GraphService.count_nodes(pipeline.nodes)

    num_edges = GraphService.count_edges(pipeline.edges)

    is_dag = GraphService.is_dag(
        pipeline.nodes,
        pipeline.edges,
    )

    return PipelineResponse(
        num_nodes=num_nodes,
        num_edges=num_edges,
        is_dag=is_dag,
    )
