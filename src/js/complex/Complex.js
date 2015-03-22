
// A simplicial complex

function Complex() {

    this.simplexes = [];
    this.renderVertices = {};

    this.addSimplex = addSimplex;
    this.getRenderVertices = getRenderVertices;
    this.getRenderVertex = getRenderVertex;
    this.render = render;

    function addSimplex(verticesNames) {

        var simplex = newSimplex(verticesNames);
        this.simplexes.push(simplex);

    }

    function newSimplex(verticesNames) {

        return {
            verticesNames: verticesNames,
            dimension: verticesNames.length
        }

    }

    function getRenderVertices(verticesNames) {
        var complex = this;
        return verticesNames.map(renderVertex);

        function renderVertex(vertexName) {
            return complex.getRenderVertex(vertexName);
        }
    }

    function getRenderVertex(vertexName) {
        this.renderVertices[vertexName] = this.renderVertices[vertexName] || newRenderVertex(vertexName);
        return this.renderVertices[vertexName];

    }

    function newRenderVertex(vertexName) {
        return {
            name: vertexName
        }
    }

    function render() {
        var complex = this;

        var emptyGraph = { nodes: [], links: []};
        var graph = this.simplexes.reduce(mergeSimplexGraph, emptyGraph);

        console.log(graph);

        renderGraph(graph);

        function mergeSimplexGraph(graph, simplex) {
            return {
                nodes: _.union(graph.nodes, simplexGraph(simplex).nodes),
                links: _.union(graph.links, simplexGraph(simplex).links)
            };
        }
        function simplexGraph(simplex) {
            return getSimplexGraph(simplex, complex);
        }
    }

}