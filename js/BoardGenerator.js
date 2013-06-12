function BoardGenerator() {
	var that = this;
	var MAX = 9;
	
	that.generateFields = function() {
		var fields = generateEmptyBoard();
		fields[0] = shuffle([1,2,3,4,5,6,7,8,9]);
		fields = doGenerate(fields);
		return fields;
	}
	
	function generateEmptyBoard() {
		var fields = [];
		for (var i = 0; i < MAX; i++) {
            var row = [];
            for (var j = 0; j < MAX; j++) {
                row[j] = 0;
            }
            fields.push(row);
        }
		return fields;
	}
	
	function doGenerate(fields) {
		var generatedSuccessfully = false;
		var shouldBreak = false;
		var possibilities = [];
        var tempFields = [];
        var operationCounter = 0;
		do {
            operationCounter++;
			tempFields = fields.slice(0);
			shouldBreak = false;
			for (var i = 1; i < MAX; i++) {
				for (var j = 0; j < MAX; j++) {
					possibilities = shuffle(getFieldPossibilities(i,j,tempFields));
					if (possibilities.length === 0) {
						shouldBreak = true;
						break;
					} else {
						for (var k = 0; k < possibilities.length; k++) {
							if (validateField(possibilities[k], i, j, tempFields)) {
								tempFields[i][j] = possibilities[k];
								break;
							}
						}
					}
				}
				if (shouldBreak) {
                    break;
                }
				if (tempFields[8][8] !== 0) {
					generatedSuccessfully = true;
				}
			}
		} while (!generatedSuccessfully);
		return tempFields;
	}
	
	function getFieldPossibilities(rowIndex, columnIndex, fields) {
        var possibleValues = [];
        for (var i = 1; i <= MAX; i++) {
            if (validateField(i, rowIndex, columnIndex, fields)) {
                possibleValues.push(i);
            }
        }
        return possibleValues;
    }
	
	function shuffle(o){ //v1.0
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	
	function validateRow (number, rowIndex, fields) {
        for (var i = 0; i < MAX; i++) {
            if (fields[rowIndex][i] === number) {
                return false;
            }
        }
        return true;
    }
    
    function validateColumn (number, columnIndex, fields) {
        for (var i = 0; i < MAX; i++) {
            if (fields[i][columnIndex] === number) {
                return false;
            }
        }
        return true;
    }
    
    function validateSquare(number, rowIndex, columnIndex, fields) {
        var rowCorner = rowIndex - (rowIndex % 3);
        var columnCorner = columnIndex - (columnIndex % 3);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (fields[rowCorner + i][columnCorner + j] === number) {
                    return false;
                }
            }
        }
        return true;
    }
    
    function validateField(number, rowIndex, columnIndex, fields) {
        return validateRow(number, rowIndex, fields)
            && validateColumn(number, columnIndex, fields)
            && validateSquare(number, rowIndex, columnIndex, fields);
    }
}

var gen = new BoardGenerator();
var board = gen.generateFields();