
let calcAverage = (a,b,c) => (a+b+c) /3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);



function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log("Doplhins won " + scoreDolphins + " vs " + scoreKoalas);
    }else if(avgKoalas >= 2 * avgDolphins)
    {
        console.log("Koalas won " + scoreDolphins + " vs " + scoreKoalas);
    }else
    {
        console.log(" no one won in this game");
    }
}
checkWinner(scoreDolphins,scoreKoalas);

scoreDolphins = calcAverage(85, 54,  41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins,scoreKoalas);