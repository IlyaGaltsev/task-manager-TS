import "./TodoItem.scss"
import Checkbox from "@mui/material/Checkbox"
import { ITodoItemCard } from "../../types"
import { TiDelete } from "react-icons/ti"
import { useEffect, useRef } from "react"

const TodoItem: React.FC<
  ITodoItemCard
> = props => {
  const {
    id,
    title,
    flag,
    deleteItem,
    toggleItem
  } = props
  const chekbox = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    if (flag) {
      chekbox.current?.classList.add("donetask")
    } else {
      chekbox.current?.classList.remove(
        "donetask"
      )
    }
  }, [flag])

  return (
    <div ref={chekbox} className="item__wrapper">
      <div className="item__chekbox">
        <Checkbox
          onChange={() => toggleItem(id)}
          checked={flag}
          size="medium"
        />
        <p
          className={
            !flag 
              ? ".line" 
              : ".noline"
          }
        >
          {title}
        </p>
      </div>
      <TiDelete
        onClick={() => deleteItem(id)}
        size={28}
      />
    </div>
  )
}
export { TodoItem }
