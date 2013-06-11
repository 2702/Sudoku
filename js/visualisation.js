function Visualisation() {
    
   var that = this;
   var MAX = 9;
   
   that.render = function(board, nodeId) {
       var htmlString = "";
       htmlString += '<table>';
       for (var i = 0; i < MAX; i++) {
           htmlString += '<tr '+ (i % 3 === 2 ? 'class="bottomBorder"' : '') + '>';
           for (var j = 0; j < MAX; j++) {
               htmlString += renderCell(board.getFieldValue(i,j), (j % 3 === 2 ? 'rightBorder' : ''));
           }
           htmlString += '</tr>';
       }
       htmlString += '</table>';
       document.getElementById(nodeId).innerHTML = htmlString;
   }
    
    function renderCell(number, classesString) {
        return '<td class="'+ classesString + '">' + (number !== 0 ? number : '') + '</td>';
    }
}
