import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext } from "react"
import { Context } from "../.."
import "./SignIn.scss"
import React from "react"
import { Form, Input, Button } from "antd"
import type { FormItemProps } from "antd"
import { Link } from "react-router-dom"

const MyFormItemContext = React.createContext<(string | number)[]>([])

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[]
  children: React.ReactNode
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str]
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
  const prefixPath = React.useContext(MyFormItemContext)
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  )

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  )
}

const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext)
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined

  return (
    <Form.Item
      name={concatName}
      {...props}
    />
  )
}

const SignIn: React.FC = () => {
  const { auth } = useContext(Context)

  const onFinish = ({user}: any) => {
    console.log(user)
    signInWithEmailAndPassword(auth, user.email, user.passowrd)
      .then(res => console.log(res))
      .catch(error => {
        console.log("error-signin", { error })
      })
  }

  return (
    <Form
      name="form_item_path"
      layout="vertical"
      onFinish={onFinish}
    >
      <MyFormItemGroup prefix={["user"]}>
        <MyFormItem
          name="email"
          label="email"
        >
          <Input />
        </MyFormItem>

        <MyFormItem
          name="passowrd"
          label="passowrd"
        >
          <Input />
        </MyFormItem>
      </MyFormItemGroup>

      <Button
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
      <Link to={'/signup'}>
        on create account
      </Link>
    </Form>
  )
}

export { SignIn }
