var visualisation = new Visualisation();
var board = new Board();

board.setFields([
[0, 5, 3, 0, 0, 6, 4, 8, 9],
[7, 0, 4, 8, 0, 1, 0, 0, 5],
[0, 6, 2, 0, 0, 4, 0, 0, 0],
[5, 0, 0, 6, 0, 0, 0, 7, 0],
[0, 3, 0, 0, 0, 0, 8, 1, 0],
[6, 0, 0, 3, 9, 0, 5, 0, 0],
[3, 7, 0, 0, 8, 0, 6, 5, 0],
[0, 8, 5, 0, 0, 3, 0, 4, 7],
[4, 0, 0, 0, 7, 0, 3, 0, 0]  
]);

visualisation.render(board, 'puzzle');
var solver = new Solver(board);
solver.fillUnequivocalFields();

visualisation.render(board, 'solved');