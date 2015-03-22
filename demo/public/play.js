var complex = new Complex();

complex.addSimplex(['p0', 'p1', 'p2', 'p3']);

complex.addSimplex(['p0', 'p4', 'p2', 'p5', 'p6']);

complex.addSimplex(['p0', 'p1', 'p4']);

complex.render();

console.log(complex);