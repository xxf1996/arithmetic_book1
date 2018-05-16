const countries = ["Brazil", "Croatia", "Mexico", "Cameroon", "Spain", "Netherlands", "Chile", "Australia", "Colombia", "Greece", "Cote d'Ivoire", "Japan", "Uruguay", "Costa Rica", "England", "Italy", "Switzerland", "Ecuador", "France", "Honduras", "Argentina", "Bosnia and Herzegovina", "Iran", "Nigeria", "Germany", "Portugal", "Ghana", "USA", "Belgium", "Algeria", "Russia", "Korea Republic"];

const test = "Chinese-equal-letter-reach-handle-everything-glove-example-enjoy-young-goodbye-expect-throw-watch-happen-noodle-exist-thank-kitchen-normal-lucky-yesterday-yourself-follow-white-email-lunch-hopeless-success".split("-");

function for_question(str) {
    let info = {}; // 按首字符归类字符串，相同首字符的归为一组
    let maxPath = 0; // 最大路径长度
    let paths = []; // 最大路径
    let nearList = {}; // 邻接边表

    /*
     按首字符进行分类组合
     */
    for(let i in str){
        let country = str[i];
        let first = country[0].toLowerCase(); // 首字符

        if(info[first] === undefined){
            info[first] = [country];
        }else{
            info[first].push(country);
        }
    }

    // console.log(info);

    /*
    按照首字符的分类组合结果构建邻接表（方向图），即以国家名称为结点，其尾字符能够相连的国家即为邻接边
     */
    for(let key in info){
        let val = info[key];
        for(let idx in val){
            let name = val[idx];
            let last = name[name.length - 1].toLowerCase(); // 末尾字符
            nearList[name] = [];

            if(info[last] != undefined){
                info[last].forEach((item)=>{
                    if(item != name) nearList[name].push(item); // 避免出现自连接结点
                });
            }
        }
    }

    // console.log(nearList);

    function findMax(next, path){ // 深度优先搜索
        if(next.length){ // 判断邻接表表是否有结点
            next.forEach((val)=>{
                if(path.indexOf(val) === -1){ // 判断该结点是否已经出现在路径中，若已经出现在路径中则形成环，停止递归；反之则增加到路径中
                    let newPath = path.slice(0);
                    newPath.push(val);
                    findMax(nearList[val], newPath);
                }else if(path.length > maxPath){ // 这也是递归终止条件之一！
                    maxPath = path.length;
                    paths = path;
                }
            });
        }else if(path.length > maxPath){ // 若该结点无邻接边时，终止递归！
            maxPath = path.length;
            paths = path;
        }
    }

    for(let name in nearList){ // 以每个结点为出发点各自查找最长路径
        findMax(nearList[name], [name]);
    }

    console.log(paths);
}

console.log(test.length);
for_question(countries);
// for_question(test);