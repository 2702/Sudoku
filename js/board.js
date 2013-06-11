function Board() {
    var that = this;
    
    var MAX = 9;
    var fields = []; // [row][column]
    
    function validateRow (number, rowIndex) {
        for (var i = 0; i < MAX; i++) {
            if (fields[rowIndex][i] === number) {
                return false;
            }
        }
        return true;
    }
    
    function validateColumn (number, columnIndex) {
        for (var i = 0; i < MAX; i++) {
            if (fields[i][columnIndex] === number) {
                return false;
            }
        }
        return true;
    }
    
    function validateSquare(number, rowIndex, columnIndex) {
        rowCorner = rowIndex - (rowIndex % 3);
        columnCorner = columnIndex - (columnIndex % 3);
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (fields[rowCorner + i][columnCorner + j] === number) {
                    return false;
                }
            }
        }
        return true;
    }
    
    that.validateField = function(number, rowIndex, columnIndex) {
        return validateRow(number, rowIndex)
            && validateColumn(number, columnIndex)
            && validateSquare(number, rowIndex, columnIndex);
    }
    
    that.setFieldValue = function(number, rowIndex, columnIndex) {
        fields[rowIndex][columnIndex] = number;
    }
    
    that.getFieldValue = function(rowIndex, columnIndex) {
        return fields[rowIndex][columnIndex];
    }
    
    that.setFields = function(board) {
        fields = board;
    }
}


