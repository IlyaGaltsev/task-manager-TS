import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Form = styled.form(() => ({
  marginTop: 20,
  paddingLeft: 16,
  paddingRight: 16,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  width: '100%'
}))

export const Title = styled.h3(() => ({
  margin: 0,
  padding: 0,
  fontSize: 28
}))

export const SubTitle = styled.p(() => ({
  margin: 0,
  padding: 0,
  fontSize: 16,
  color: 'gray'
}))

export const RouteLink = styled(Link)(() => ({
  color: '#1976d2',
  textDecoration: 'none'
}))
