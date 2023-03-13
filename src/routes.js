import { Desktop } from './screens/Desktop'
import { SignIn } from './screens/SignIn'
import { SignUp } from './screens/SignUp'
import * as routesNames from './utils/const'

export const publicRoutes = [
  {
    path: routesNames.SIGNIN_ROUTE,
    Component: <SignIn />
  },
  {
    path: routesNames.SIGNUP_ROUTE,
    Component: <SignUp />
  },

  {
    path: '*',
    Component: <SignIn />
  }

]

export const privateRoutes = [
  {
    path: routesNames.DESKTOP_SCREEN,
    Component: <Desktop />
  },
  {
    path: '*',
    Component: <Desktop />
  }
]
