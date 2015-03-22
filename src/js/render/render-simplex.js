function getSimplexGraph(simplex, Complex) {

    var vertices = Complex.getRenderVertices(simplex.verticesNames);
    var edges = getAllPairs(vertices, formatLink);
    var graph = {
        nodes: vertices,
        links: edges
    };
    return graph;
}

function formatLink(source, target) {
    return {
        source: source,
        target: target
    }
}