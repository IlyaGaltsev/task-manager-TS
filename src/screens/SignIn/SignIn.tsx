import { signInWithEmailAndPassword } from "firebase/auth"
import * as P from "../../styled/PublicComponents.styled"
import { FieldValues, useForm } from "react-hook-form"
import { Button, TextField } from "@mui/material"
import { signInFileds } from "../../utils/fileds"
import { SIGNUP_ROUTE } from "../../const"
import { IFileds } from "../../types"
import { useContext } from "react"
import { Context } from "../.."

const SignIn: React.FC = () => {
  const { auth } = useContext(Context)
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const signIn = (data: FieldValues) => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch(err => {
      let jsonError = JSON.stringify(err)
      const code = JSON.parse(jsonError).code

      if (code.includes("password")) {
        setError("password", {
          message: "Incorrect password"
        })
      }

      if (code.includes("requests")) {
        setError("email", {
          message: "Too many login attempts"
        })
      }

      if (code.includes("found")) {
        setError("email", {
          message: "Not found this user"
        })
      }
    })
  }

  return (
    <P.Form onSubmit={handleSubmit(signIn)}>
      <P.Title style={{ marginBottom: 4 }}>Sign In</P.Title>
      <P.SubTitle style={{ marginBottom: 16 }}>Sign in your account</P.SubTitle>
      {signInFileds.map(({ name, placeholder, type, options }: IFileds) => {
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
        Sign In
      </Button>
      <P.SubTitle>
        Don't have an account?{" "}
        <P.RouteLink to={SIGNUP_ROUTE}>Create account</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignIn }
