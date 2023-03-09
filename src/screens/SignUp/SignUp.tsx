import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth"
import { useContext, useState } from "react"
import "./SignUp.scss"
import { Context } from "../.."

interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}
interface ICreateUserData {
  email: String
  password: String
}
const SignUp: React.FC = () => {
  const { auth, firebase, firestore } = useContext<IFirebaseContext>(Context)
  const [email, setEmail] = useState<any>("sdhf@sdf.ru")
  const [password, setPassword] = useState<any>("sd1231")

  const signup = () => {
    // firebase
    //   .database()
    //   .ref("usersChat/" + user._user.uid)
    //   .set({
    //     nickname: "lox",
    //     uid: user._user.uid,
    //     timestamp: Date.now(),
    //     email: email
    //   })
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth: any) => {
        console.log(auth)
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

  // const registerUserWithEmailAndPassword = (
  //   nickname: any,
  //   email: any,
  //   password: any
  // ) => {
  //   return dispatch => {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(user => {
  //         firebase
  //           .database()
  //           .ref("usersChat/" + user._user.uid)
  //           .set({
  //             nickname: nickname,
  //             uid: user._user.uid,
  //             timestamp: Date.now(),
  //             email: email
  //           })
  //         return user
  //       })

  //       .catch(error => {
  //         // Handle Errors here.
  //         var errorCode = error.code
  //         var errorMessage = error.message
  //         dispatch({
  //           type: types.userRegisterErr,
  //           payload: errorMessage
  //         })
  //       })
  //   }
  // }

  return (
    <div className="signup">
      <div className="signup__wrapper">SIGN_UP</div>
      <Button onClick={signup}>signup</Button>
    </div>
  )
}

export { SignUp }
