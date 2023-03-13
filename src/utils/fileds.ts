import { type IFileds } from '../types'

export const signInFileds: IFileds[] = [
  {
    name: 'email',
    placeholder: 'enter your email',
    options: {
      required: 'This is required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format'
      }
    }
  },
  {
    name: 'password',
    placeholder: 'enter your password',
    type: 'password',
    options: {
      required: 'This is required'
    }
  }
]

export const signUpFileds: IFileds[] = [
  {
    name: 'displayName',
    placeholder: 'enter your name',
    options: {
      required: 'This is required'
    }
  },
  {
    name: 'email',
    placeholder: 'enter your email',
    options: {
      required: 'This is required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format'
      }
    }
  },
  {
    name: 'password',
    placeholder: 'enter your password',
    type: 'password',
    options: {
      required: 'This is required'
    }
  },
  {
    name: 'repeatPassword',
    placeholder: 'repeat your password',
    type: 'password',
    options: {
      required: 'This is required'
    }
  }
]
