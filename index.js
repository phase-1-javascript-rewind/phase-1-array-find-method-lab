function superbowlWin(record){
    const result= record.find(record=>record.result=="W");
    if(!!result == true){
        return result.year
    }else{
        return undefined;
    }
}

