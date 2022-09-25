import "./TodoList.scss";
import { ITodoList, ITodoItem } from '../../types';
import { TodoItem } from "./components/TodoItem";


const TodoList: React.FC<ITodoList> = (props) => {
    const {todoItems, deleteItem, toggleItem} = props;
    return(
        <div className="list__items">
            {
                todoItems.map(item => <TodoItem 
                    key={item.id}
                    deleteItem={deleteItem} 
                    toggleItem={toggleItem}
                    {...item}
                    />)
            }
        </div>
    )
}
export {TodoList}