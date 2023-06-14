// 引入样式
import './style/index.less';

// Food类
class Food{
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor(){
        // 获取页面中的food元素
        this.element = document.getElementById('food')!;
    }

    // 获取食物x轴坐标
    get X(){
        return this.element.offsetLeft
    }

    get Y(){
        return this.element.offsetTop
    }

    changePosition(){
        this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
        this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
        
    }

}
