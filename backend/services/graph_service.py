from collections import defaultdict, deque


class GraphService:

    @staticmethod
    def count_nodes(nodes):

        return len(nodes)

    @staticmethod
    def count_edges(edges):

        return len(edges)

    @staticmethod
    def build_graph(nodes, edges):

        graph = defaultdict(list)

        indegree = {node.id: 0 for node in nodes}

        for edge in edges:

            graph[edge.source].append(edge.target)

            indegree[edge.target] += 1

        return graph, indegree

    @staticmethod
    def is_dag(nodes, edges):

        graph, indegree = GraphService.build_graph(
            nodes,
            edges,
        )

        queue = deque(node_id for node_id, degree in indegree.items() if degree == 0)

        visited = 0

        while queue:

            current = queue.popleft()

            visited += 1

            for neighbour in graph[current]:

                indegree[neighbour] -= 1

                if indegree[neighbour] == 0:

                    queue.append(neighbour)

        return visited == len(nodes)
