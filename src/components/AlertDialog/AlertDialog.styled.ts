import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const ModalTitle = styled.div(() => ({
  display: 'flex',
  alignItems: 'center'
}))

export const FileButton = styled(Button)(() => ({
  input: {
    position: 'absolute',
    width: '100%',
    height: 40,
    opacity: 0
  }
}))
