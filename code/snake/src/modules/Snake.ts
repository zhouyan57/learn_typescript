class Snake{
    // 蛇头元素
    head: HTMLElement;
    // 蛇身（包括蛇头）
    body: HTMLCollection; // 这个集合会实时刷新
    // 获取蛇的容器
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        // 返回NodeList节点列表 特点是获取完后不会变 每次添加元素要重新获取 不用
        // document.querySelectorAll('#snake > div')
        // 返回的是collection
        this.body = this.element.getElementsByTagName('div');
    }

    // 获取蛇(蛇头)坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头坐标
    set X(value){
        // 新旧值相同，直接返回
        if(this.X === value){
            return 
        }
        // X值的合法范围 0-290
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了！')
        }

        // 修改x时,不能掉头(当坐标与第二个身体元素重合时视为掉头)
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value){
            console.log('水平方向掉头了');
            if(value > this.X){
                // 左走向右掉头,让其继续左走
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
            
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }
    set Y(value){
        if(this.Y === value){
            return 
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了！')
        }

        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value){
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
            
        }

        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';
        // 检查有没有撞到自己
        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody(){
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }

    // 蛇身体移动的方法
    moveBody(){
        // 遍历获取所有身体
        for(let i = this.body.length-1; i>0; i--){
            // 获取前边身体的位置
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.body[i] as HTMLElement).style.left = X + 'px';
            (this.body[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查蛇头是否撞到身体
    checkHeadBody(){
        for(let i = 1; i < this.body.length; i++){
            let bd = this.body[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己!');
            }
        }
    }
}

export default Snake;