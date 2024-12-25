document.addEventListener('DOMContentLoaded', function() {
    const sudoku = document.getElementById('sudoku');
    const rows = 9;
    const cols = 9;
    let count=0;
    let initialPositions = [
        [8,3,null,1,null,null,6,null,5],
        [null,null,null,null,null,null,null,8,null],
        [null,null,null,7,null,null,9,null,null],
        [null,5,null,null,1,7,null,null,null],
        [null,null,3,null,null,null,2,null,null],
        [null,null,null,3,4,null,null,1,null],
        [null,null,4,null,null,8,null,null,null],
        [null,9,null,null,null,null,null,null,null],
        [3,null,2,null,null,6,null,4,7]
    ];

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            const cell = document.createElement('input');
            cell.type = 'number';
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.min=1;
            cell.max=9;
            cell.value = initialPositions[i][j]==null ? null : initialPositions[i][j];
            cell.readOnly=initialPositions[i][j]!==null;
            cell.addEventListener("input",(e)=>{

                const val=e.target.value;
                const row=e.target.dataset.row;
                const col=e.target.dataset.col;

                if(e.target.value=='') {
                    e.target.classList.remove('wrong');
                    e.target.classList.remove('correct');
                    initialPositions[row][col]=null;
                    return;
                }
                
                if(val<1 || val>9){
                    initialPositions[row][col]=null;
                    cell.classList.remove('correct');
                    cell.classList.add('wrong');
                    return;
                }
                else{
                    setTimeout(() => { validate(e.target,val, row, col); },2);
                }
                
            })
            sudoku.appendChild(cell);
            // continue;
        }
    }
    // console.log(count);
    function validate(cell,val,row,col){
        
        for(let i=0;i<9;i++){
            if(initialPositions[row][i]==val && i!=col){
                cell.classList.remove('correct');
                cell.classList.add('wrong');
                // initialPositions[row][col]='';
                return;
            }
            if(initialPositions[i][col]==val && i!=row){
                cell.classList.remove('correct');
                cell.classList.add('wrong');
                // initialPositions[row][col]='';
                return;
            }
        }
        let startRow=Math.floor(row/3)*3;
        let startCol=Math.floor(col/3)*3;
        for(let i=startRow;i<startRow+3;i++){
            for(let j=startCol;j<startCol+3;j++){
                if(initialPositions[i][j]==val && i!=row && j!=col){
                    cell.classList.remove('correct');
                    cell.classList.add('wrong');
                    // initialPositions[row][col]='';
                    return;
                }
            }
        }
        cell.classList.remove('wrong');
        cell.classList.add('correct');
        initialPositions[row][col]=val;
        let count=0;
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                if(initialPositions[i][j]!==null) count++;
                else continue;
            }
        }
        console.log(count);
        if(count===9*9){
            console.log(count);
            initialPositions = [
                [8,3,null,1,null,null,6,null,5],
                [null,null,null,null,null,null,null,8,null],
                [null,null,null,7,null,null,9,null,null],
                [null,5,null,null,1,7,null,null,null],
                [null,null,3,null,null,null,2,null,null],
                [null,null,null,3,4,null,null,1,null],
                [null,null,4,null,null,8,null,null,null],
                [null,9,null,null,null,null,null,null,null],
                [3,null,2,null,null,6,null,4,7]
            ];
            count=0;
            alert("😊YOU GOT!");
            location.reload(true);
        }
        // alert('Valid');
    }

    const but=document.getElementById("solve");
    but.addEventListener('click',(e)=>{
        document.getElementById("sudoku").innerHTML='';

        if (!document.getElementById('back')){
            const back = document.createElement('button');
            back.id = 'back'; back.textContent = 'Back';
            back.addEventListener('click', (e) => {
                location.reload(true); 
            });
            document.body.appendChild(back);
        }

        const sudoku = document.getElementById('sudoku');
        const rows = 9;
        const cols = 9;
        let initialPositions = [
            [8,3,null,1,null,null,6,null,5],
            [null,null,null,null,null,null,null,8,null],
            [null,null,null,7,null,null,9,null,null],
            [null,5,null,null,1,7,null,null,null],
            [null,null,3,null,null,null,2,null,null],
            [null,null,null,3,4,null,null,1,null],
            [null,null,4,null,null,8,null,null,null],
            [null,9,null,null,null,null,null,null,null],
            [3,null,2,null,null,6,null,4,7]
        ];
        
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < cols; j++) {
                const cell = document.createElement('input');
                cell.type = 'number';
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.min=1;
                cell.max=9;
                cell.id=`cell-${i}-${j}`;
                cell.value = initialPositions[i][j]==null ? null : initialPositions[i][j];
                cell.readOnly=initialPositions[i][j]!==null;
                cell.addEventListener("input",(e)=>{
                
                    const val=e.target.value;
                    const row=e.target.dataset.row;
                    const col=e.target.dataset.col;
                
                    if(e.target.value=='') {
                        e.target.classList.remove('wrong');
                        e.target.classList.remove('correct');
                        initialPositions[row][col]=null;
                        return;
                    }
                
                    if(val<1 || val>9){
                        initialPositions[row][col]=null;
                        cell.classList.remove('correct');
                        cell.classList.add('wrong');
                        return;
                    }
                    else{
                        setTimeout(() => { validate(e.target,val, row, col); },2);
                    }
                
                })
                
                sudoku.appendChild(cell);
            }
        }
        
        function validate(cell,val,row,col){
        
            for(let i=0;i<9;i++){
                if(initialPositions[row][i]==val && i!=col){
                    cell.classList.remove('correct');
                    cell.value=initialPositions[row][i];
                    cell.classList.add('wrong');
                    return false;
                }
                if(initialPositions[i][col]==val && i!=row){
                    cell.classList.remove('correct');
                    cell.value=initialPositions[i][col];
                    cell.classList.add('wrong');
                    return false;
                }
            }
            let startRow=Math.floor(row/3)*3;
            let startCol=Math.floor(col/3)*3;
            for(let i=startRow;i<startRow+3;i++){
                for(let j=startCol;j<startCol+3;j++){
                    if(initialPositions[i][j]==val && i!=row && j!=col){
                        cell.classList.remove('correct');
                        cell.value=initialPositions[i][j];
                        cell.classList.add('wrong');
                        return false;
                    }
                }
            }
            cell.classList.remove('wrong');
            cell.value=val;
            cell.classList.add('correct');
            return true;
        }
        function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
        async function backTrack(row,col){
            
            
            let cell=document.getElementById(`cell-${row}-${col}`);
            for(let i=1;i<=9;i++){
                await sleep(0);
                if(validate(cell,i,row,col)){
                    initialPositions[row][col]=i;
                    cell.value=i;
                    let emptyCell=findEmptyCell();
                    if(emptyCell==null){
                        return true;
                    }
                    console.log(row,col);
                    if(await backTrack(emptyCell[0],emptyCell[1])){
                        return true;
                    }
                    console.log(row,col);
                    initialPositions[row][col]=null;
                    document.getElementById(`cell-${row}-${col}`).value='';
                }
            }
            // console.log("ok");
            return false;
        }
        function findEmptyCell(){
            for(let i=0;i<9;i++){
                for(let j=0;j<9;j++){
                    if(initialPositions[i][j]==null){
                        return [i,j];
                    }
                }
            }
            return null;
        }
        
        backTrack(0,2);
        document.body.appendChild(back);
        // });
    });

});