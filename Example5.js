function pattern(n){
    var string="";
    for (let i=0;i<=n;i++){
        for (let j=0;j<=i;j++){
             string+="*";
        }
        string+="\n";
    }
    console.log(string)
}
function pattern2(n){
    var string="";
    for (let i=0;i<=n;i++){
        for (let j=0;j<=n;j++){
             string+="*";
        }
        string+="\n";
    }
    console.log(string)
}
pattern(5);
console.log("\n");
pattern2(5);