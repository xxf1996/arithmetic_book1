const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
];

const N = 12;

function move(path) {
    if(path.length == (N + 1)){
        return 1;
    }else{
        let count = 0;
        for(let i in direction){
            let newPath = [path[path.length - 1][0] + direction[i][0], path[path.length - 1][1] + direction[i][1]];
            let isExist = path.some((elem)=>{
                return elem[0] == newPath[0] && elem[1] == newPath[1];
            });
            if(!isExist){
                let p = path.slice(0);
                p.push(newPath);
                count += move(p);
            }
        }

        return count;
    }
}

console.log(move([[0, 0]]));
console.log(direction.includes([1, 0]));
console.log(direction.indexOf([1, 0]));