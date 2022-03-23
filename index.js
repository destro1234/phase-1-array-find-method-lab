// code your solution here

function findWin(obj) {
    return obj.result === "W";
}


function superbowlWin (record) {
    let win = record.find(findWin)
    if (win) {
        return win.year;
    }
    else 
        return undefined;
}