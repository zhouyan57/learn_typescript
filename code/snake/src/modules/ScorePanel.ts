// 表示计分牌的类
class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel:number;
    // 设置一个变量表示多少分时升级
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 加分
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 提升等级
    levelUp(){
        // 限制等级
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;

// test
// const scorePanel = new ScorePanel(10,2);
// for(let i=0; i<13; i++){
//     scorePanel.addScore();
// }