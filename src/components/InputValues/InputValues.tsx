import "./InputValues.scss"
import { TextField, Button } from "@mui/material"
import { TypeInputValues } from "../../types"
import { useEffect, useRef, useState } from "react"

const InputValues: React.FC<TypeInputValues> = props => {
  const { todoItems, setTodoItems } = props
  const [title, setTitle] = useState("")
  const input = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    input.current?.focus()
  }, [])

  const handleChangeInput: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = e => {
    setTitle(e.target.value)
  }
  const onHandleClickAdd = () => {
    if (title) {
      setTodoItems([
        ...todoItems,
        {
          id: Date.now(),
          title: title,
          flag: false
        }
      ])
      localStorage.setItem("todo", JSON.stringify(todoItems))
      setTitle("")
    }
  }
  const handleKeyDownEnterInput: React.KeyboardEventHandler<
    HTMLDivElement
  > = e => {
    if (e.key === "Enter") {
      onHandleClickAdd()
    }
  }
  return (
    <div className="inputvalues__container">
      <TextField
        style={{
          width: "100%",
          marginRight: 24
        }}
        id="standard-basic"
        value={title}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownEnterInput}
        label="Введите задачу"
        variant="standard"
        ref={input}
      />
      <Button
        variant="contained"
        onClick={onHandleClickAdd}
      >
        +
      </Button>
    </div>
  )
}
export { InputValues }
