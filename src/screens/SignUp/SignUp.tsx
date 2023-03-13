import { createUserWithEmailAndPassword } from 'firebase/auth'
import * as P from '../../styled/PublicComponents.styled'
import { type FieldValues, useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { signUpFileds } from '../../utils/fileds'
import { SIGNIN_ROUTE } from '../../const'
import { type FC, useContext } from 'react'
import { type IFileds } from '../../types'
import { Context } from '../..'

interface IFirebaseContext {
  firebase: any
  auth: any
  firestore: any
}

const SignUp: FC = () => {
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
        window.location.search = `?displayName=${String(displayName)}`
      })
      .catch((err: any) => {
        const jsonError = JSON.stringify(err)
        const code = JSON.parse(jsonError).code

        if (code.includes('requests') != null) {
          setError('email', {
            message: 'Too many login attempts'
          })
        }

        if (code.includes('use') != null) {
          setError('email', {
            message: 'Email already in use'
          })
        }
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
