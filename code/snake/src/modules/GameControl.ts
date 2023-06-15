import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他所有类
class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 存储蛇的移动方向（按键方向）
    direction: string = '';


    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    // 游戏的初始化方法
    init(){
        // 绑定键盘按键按下的事件
        // document.addEventListener('keydown',this.keydownHandler) // 这里的this是document，需要是gamecontrol对象       
        document.addEventListener('keydown',this.keydownHandler.bind(this))
    }

    // 键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 需检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }    


}
export default GameControl;