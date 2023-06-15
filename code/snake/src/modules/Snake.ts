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
        this.head.style.left = value + 'px';
    }
    set Y(value){
        this.head.style.top = value + 'px';
    }

    // 蛇增加身体的方法
    addBody(){
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
}

export default Snake;