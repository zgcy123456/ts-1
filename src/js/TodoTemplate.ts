import { ITodoData } from "./typing";

class TodoTemplate {

    protected todoView({id, content, completed} : ITodoData) : string{
        
        let result : string = `
        <input type="checkbox" ${completed ? 'checked' : '' } data-id= "${id}" /> 
        <span style="text-decoration: ${completed ? 'line-through' : 'none'}" > ${content}</span> 
        <button data-id="${id}">删除</button>
        `;
        console.log(result);
        return result;
    }


}

export default TodoTemplate;