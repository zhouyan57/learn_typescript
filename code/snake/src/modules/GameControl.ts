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
    // 记录游戏是否结束
    isLive = true;


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
        // 调用run方法，使蛇移动
        this.run();
    }

    // 键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 需检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }    

    // 控制蛇移动的方法
    run(){
         /*
        *   根据方向（this.direction）来使蛇的位置改变
        *       向上 top 减少
        *       向下 top 增加
        *       向左  left 减少
        *       向右  left 增加
        * */
        // 获取蛇坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

         // 根据按键方向来修改X值和Y值
         switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);

        //修改蛇的X和Y值
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:any){
            // 进入catch，说明出现异常，游戏结束
            alert(e.message + 'GAME OVER');
            this.isLive = false;
        }

        
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1)*30);

    }
    // 检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            // 改变食物位置
            this.food.changePosition();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇增加一节
            this.snake.addBody()
        }
    }
}

export default GameControl;