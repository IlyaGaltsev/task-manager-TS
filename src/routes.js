import { SignIn } from "./screens/SignIn"
import { SignUp } from "./screens/SignUp"
import { SIGNIN_ROUTE, DESKTOP_SCREEN, SIGNUP_ROUTE } from "./const"
import { Desktop } from "./screens/Desktop"

export const routes = [
  {
    path: SIGNIN_ROUTE,
    Component: <SignIn />
  },
  {
    path: SIGNUP_ROUTE,
    Component: <SignUp />
  },
  {
    path: DESKTOP_SCREEN,
    Component: <Desktop />
  }
]
