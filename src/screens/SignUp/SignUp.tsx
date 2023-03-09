// import { LockOutlined, UserOutlined } from "@ant-design/icons"
// import { Button, Form, Input } from "antd"
// import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth"
// import { signInWithEmailAndPassword } from "firebase/auth"
import React from "react"
import { Form, Input, Button } from "antd"
import type { FormItemProps } from "antd"
import { Link } from "react-router-dom"
import { useContext } from "react"
import "./SignUp.scss"
import { Context } from "../.."
import { getDatabase, ref, set } from "firebase/database"

interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}
interface ICreateUserData {
  email: String
  password: String
}
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
var firebase = require("firebase/app")
require("firebase/database")

const SignUp: React.FC = () => {
  const { auth } = useContext<IFirebaseContext>(Context)

  const onFinish = ({ user }: any) => {
    console.log(user)
    auth
      .createUserWithEmailAndPassword(user.email, user.passowrd)
      .then((data: any) => {
        // set failed: value argument contains undefined in property 'userTasks.undefined.uid'
        // console.log(user)
        // firebase
        //   .database()
        //   .ref("users/" + user.userId)
        //   .set({
        // /
        //     // profile_picture : imageUrl,
        //     tasks: []
        //   })
        // console.log(data.user.email)
        const db = getDatabase()
        set(ref(db, "userTasks/" + data.user.uid), {
          uid: data.user.uid,
          email: data.user.email,
          tasks: []
        })
      })
      .catch((error: any) => {
        let errorCode = error.code
        let errorMessage = error.message

        if (errorMessage === "auth/weak-password") {
          alert("The password is too weak.")
        } else {
          alert(errorMessage)
        }
        console.log(error)
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
        Create user
      </Button>
      <Link to={"/signin"}>on create account</Link>
    </Form>
  )
}

export { SignUp }
