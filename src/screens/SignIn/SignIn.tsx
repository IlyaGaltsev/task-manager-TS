import { FirebaseContext } from '../../context/FirebaseContext'
import { type FieldValues, useForm } from 'react-hook-form'
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as P from 'src/styled/PublicComponents.styled'
import { Button, TextField } from '@mui/material'
import { signInFileds } from 'src/utils/fileds'
import { SIGNUP_ROUTE } from 'src/const'
import { type IFileds } from 'src/types'
import { useContext } from 'react'

const SignIn: React.FC = () => {
  const { auth } = useContext(FirebaseContext)
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm()

  const signIn = ({ email, password }: FieldValues) => {
    signInWithEmailAndPassword(auth, email, password).catch(err => {
      const jsonError = JSON.stringify(err)
      const code = JSON.parse(jsonError).code

      if (code.includes('password') != null) {
        setError('password', {
          message: 'Incorrect password'
        })
      }

      if (code.includes('requests') != null) {
        setError('email', {
          message: 'Too many login attempts'
        })
      }

      if (code.includes('found') != null) {
        setError('email', {
          message: 'Not found this user'
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
       {'Don`t have an account? '}
        <P.RouteLink to={SIGNUP_ROUTE}>Create account</P.RouteLink>
      </P.SubTitle>
    </P.Form>
  )
}

export { SignIn }
