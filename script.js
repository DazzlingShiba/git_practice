let part1=["Today is ", "Tomorrow will be ", "Yesterday was ", "The rest of your life will be "];
let part2=["a joyous day", "an endless suffering", "a cruel day", "a never-ending spiral of life and death", "a spiral of misfortune that perpetuates to eternity", "best time you could dream of", "a marry and thankful day", "a judicious day"];
let connect='. Your luckiness score for the next day will be: ';
let score=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const formSentence=()=>{
    let sentence="";
    sentence+=part1[Math.floor(Math.random()*part1.length)];
    sentence+=part2[Math.floor(Math.random()*part2.length)];
    sentence+=connect;
    sentence+=score[Math.floor(Math.random()*score.length)];
    return sentence;
}
const FortuneFactory = (id, fortune) =>{
    return{
        id,
        fortune
    };
}
let ans=[];//an array for storing id and fortune reading
for(let i=0;i<10;i++){
    ans[i]=FortuneFactory(i, formSentence());
}
console.log(ans);
