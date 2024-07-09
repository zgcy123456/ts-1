import { ITodoData } from "./js/typing";
import TodoEvent from "./js/TodoEvent"

;((doc) => {

    const oInput: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
    const oAddBtn: HTMLElement = document.querySelector('button') as HTMLElement;
    const oTodoList: HTMLElement = document.querySelector('.todo-list') as HTMLElement;


    const todoData: ITodoData[] = [

        {
            id : 1,
            content : '123',
            completed:false
        },
        {
            id : 2,
            content : '234',
            completed:false
        },
        {
            id : 3,
            content : '345',
            completed:false
        }
    ];

    const todoEvent : TodoEvent = new TodoEvent(todoData, oTodoList);

    const init =():void =>{
        bindEvent();
    }

    function bindEvent (): void {
        oAddBtn.addEventListener('click', handleAddBtnClick, false);
        oTodoList.addEventListener('click', handleListClick, false);
    }

    function handleAddBtnClick() : void {
        const val: string = oInput.value.trim();
        let ret = 0;
        if(val.length){
             ret = todoEvent.addTodo({
                id:4,
                content:val,
                completed:false
            });
        }

        if(ret && ret === 1001){
            alert('列表已存在');
            return;
        }

        oInput.value = '';
        
        console.log(todoData);

    }

    function handleListClick(e: MouseEvent) : void {
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        if(tagName === 'input' || tagName === 'button'){
            const id = parseInt(tar.dataset.id);
            switch(tagName){
                case 'input':
                    todoEvent.toggleComplete(tar, id);
                    break;
                case 'button':
                    todoEvent.removeTodo(tar, id);
                    break;
                default:
                    break;
            }
        }
    }

    init();

})(document)