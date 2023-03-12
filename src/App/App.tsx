import React, { useContext, useLayoutEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Route, Routes, useNavigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routes"
import { Context } from ".."
import { DESKTOP_SCREEN, SIGNIN_ROUTE } from "../const"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import "./App.scss"

const App: React.FC = () => {
  const navigate = useNavigate()
  const { auth } = useContext(Context)
  const [user, loading] = useAuthState(auth)


  useLayoutEffect(() => {
    // user ? navigate(DESKTOP_SCREEN) : navigate(SIGNIN_ROUTE)

    console.log("user:", user)
  }, [user])

  if (loading) {
    return <p>LOADING...</p>
  } else {
    return (
      <Routes>
        {user
          ? privateRoutes.map(({ path, Component }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={Component}
                />
              )
            })
          : publicRoutes.map(({ path, Component }) => {
              return (
                <Route
                  key={path}
                  path={path}
                  element={Component}
                />
              )
            })}
      </Routes>
    )
  }
}

export { App }
