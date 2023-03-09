import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext } from "react"
import { Context } from "../.."
import "./SignIn.scss"

const SignIn: React.FC = () => {
  const { auth } = useContext(Context)

  const signin = () => {
    signInWithEmailAndPassword(auth, "galsev_i@inbox.ru", "123456")
      .then(res => console.log(res))
      .catch(error => {
        console.log("error-signin", error)
      })
  }

  return (
   <Box>
     <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
    </Box>
  )
}

export { SignIn }
