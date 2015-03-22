var DEFAULT_CONFIG = {
    force: {
        charge: -20,
        linkDistance: 80
    },
    size: {
        width: 960,
        height:500
    }
}

function renderGraph(graph, config, containerSelector) {

    config = config || DEFAULT_CONFIG;

    var forceConfig = {
        charge: config.force.charge,
        linkDistance: config.force.linkDistance,
        size: config.size
    };

    var force = getForceLayout(forceConfig);

    var svg = getSVG( containerSelector || 'body',
                        config.size.width,
                        config.size.height);

    var links = drawLinks(svg, graph.links);

    var nodes = drawNodes(svg, graph.nodes, force);

    startForceLayout(force, graph);

    force.on('tick', getTickFunction(links, nodes));

}

function getTickFunction(links, nodes) {

    return tick;

    function tick() {
        links.attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        nodes.attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }
}

function drawNodes(svg, nodes, force) {

    return svg.selectAll(".node")
            .data(nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", 5)
            .style("fill", 'red')
            .call(force.drag);
}

function drawLinks(svg, links) {

    return svg.selectAll(".link")
            .data(links)
            .enter().append("line")
            .attr("class", "link")
            ;
}

function getForceLayout(config) {

    return  d3.layout.force()
                .charge(config.charge)
                .linkDistance(config.linkDistance)
                .size([config.size.width, config.size.height]);

}

function getSVG(containerSelector, width, height) {

    return d3.select(containerSelector)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

}

function startForceLayout(force, graph) {

    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

}

function addTitles(nodes) {
    nodes.append('title')
        .text(function(d) { return d.name; });
}
