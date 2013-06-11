function Solver(boardToSolve) {
    var that = this;
    var board = boardToSolve;
    var MAX = 9;
    var visualisation = new Visualisation();
    
    function getFieldPossibilities(rowIndex, columnIndex) {
        var possibleValues = [];
        for (var i = 1; i <= MAX; i++) {
            if (board.validateField(i, rowIndex, columnIndex)) {
                possibleValues.push(i);
            }
        }
        return possibleValues;
    }
    
    that.fillUnequivocalFields = function() {
        var isChanged = false;
        var operationCounter = 0;
        do {
            operationCounter++;
            visualisation.render(board, "solved");
            isChanged = false;
            for (var i = 0; i < MAX; i++) {
                for (var j = 0; j < MAX; j++) {
                    if (board.getFieldValue(i,j) === 0) { 
                        var possibilities = getFieldPossibilities(i, j);
                        if (possibilities.length === 1) {
                            board.setFieldValue(possibilities[0], i, j);
                            isChanged = true;
                        }
                    }
                }
            }
        } while (isChanged);
    }
}
