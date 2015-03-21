var complex = new Complex();

complex.addSimplex(['p0', 'p1', 'p2', 'p3']);

complex.addSimplex(['p0', 'p4']);

complex.addSimplex(['p0', 'p1', 'p4']);

complex.render();

var p0 = {
    name: 'p0'
}

var p1 = {
    name: 'p1'
}

var p2 = {
    name: 'p2'
}

var p3 = {
    name: 'p3'
}

var p4 = {
    name: 'p3'
}

var graph = {
    nodes: [
        p0,
        p1,
        p2,
        p3,
        p4
    ],

    links: [
        {
            source: p0,
            target: p1
        },
        {
            source: p0,
            target: p2
        },
        {
            source: p1,
            target: p2
        },
        {
            source: p0,
            target: p3
        },
        {
            source: p1,
            target: p3
        },
        {
            source: p2,
            target: p3
        },
        {
            source: p0,
            target: p4
        },
        {
            source: p1,
            target: p4
        },
        {
            source: p2,
            target: p4
        },
        {
            source: p3,
            target: p4
        }
    ]
}

var config = {
    force: {
        charge: -20,
        linkDistance: 80
    },
    size: {
        width: 960,
        height:500
    }
}

render(graph, config);
