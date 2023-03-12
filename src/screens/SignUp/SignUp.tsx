// import { getDatabase, ref, set } from "firebase/database"
import { createUserWithEmailAndPassword } from "firebase/auth"
import * as P from "../../styled/PublicComponents.styled"
import { FieldValues, useForm } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { signUpFileds } from "../../utils/fileds"
import { SIGNIN_ROUTE } from "../../const"
import { IFileds } from "../../types"
import { useContext } from "react"
import { Context } from "../.."
import { useNavigate } from "react-router-dom"

interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}

const SignUp: React.FC = () => {
  const { auth } = useContext<IFirebaseContext>(Context)

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const createUser = ({ displayName, email, password }: FieldValues) => {
    console.log({ displayName, email, password })

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.search = `?displayName=${displayName}`
        // user есть? =>
        // navigate(`/${displayName}`)
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
        // const db = getDatabase()
        // set(ref(db, "userTasks/" + data.user.uid), {
        //   uid: data.user.uid,
        //   email: data.user.email,
        //   tasks: []
        // })
      })
      .catch((error: any) => {
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
    <P.Form onSubmit={handleSubmit(createUser)}>
      <P.Title style={{ marginBottom: 4 }}>Sign Up</P.Title>
      <P.SubTitle style={{ marginBottom: 16 }}>Create your account</P.SubTitle>
      {signUpFileds.map(({ name, placeholder, type, options }: IFileds) => {
        return (
          <TextField
            key={name}
            error={Boolean(errors[name])}
            placeholder={placeholder}
            type={type}
            style={{ marginBottom: 12 }}
            helperText={errors[name]?.message?.toString()}
            {...register(name, options)}
          />
        )
      })}
      <Button
        style={{ marginTop: 8, marginBottom: 20 }}
        type="submit"
        variant="contained"
        color="primary"
      >
        Create account
      </Button>
      <P.SubTitle>
        Do have an account? <P.RouteLink to={SIGNIN_ROUTE}>Sign in</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignUp }
