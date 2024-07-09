export function findParentNode(target: HTMLElement, className: string) : HTMLElement{
    while(target = target.parentNode as HTMLElement){
        if(target.className ===className){
            return target;
        }
    }
}


export function createItem(tagName: string, className : string, todoItem: string) : HTMLElement{
    const oTtem : HTMLElement = document.createElement(tagName);
    oTtem.className = className;
    oTtem.innerHTML = todoItem;
    return oTtem;
}