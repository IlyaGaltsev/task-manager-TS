import { type TransitionProps } from '@mui/material/transitions'
import { FirebaseContext } from 'src/context/FirebaseContext'
import { deepOrange } from '@mui/material/colors'
import { updateProfile } from 'firebase/auth'
import React, { useContext } from 'react'
import * as S from './AlertDialog.styled'
import {
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Avatar,
  Alert,
  Slide
} from '@mui/material'

const Transition = React.forwardRef(function Transition (
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  )
})

const AlertDialog = ({
  open,
  setOpen,
  handleClickOpen,
  handleClose,
  displayName
}: any) => {
  const { auth } = useContext(FirebaseContext)

  // const setFileImage = () => {
  //   console.log(file)
  //   const storageRef = ref(storage, user.displayName)
  //   const uploadTask = uploadBytesResumable(storageRef, file)

  //   uploadTask.on(
  //     error => {
  //       alert(error)
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref)
  //         .then(async donwloadUrl => await updateImage(donwloadUrl))
  //         .catch(error => alert(error))
  //     }
  //   )
  // }

  // const updateImage = (name: string) => {
  //   updateProfile(auth.currentUser, {
  //     photoURL: name
  //   })
  // }

  const updateDisplayName = (name: string) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      window.location.search = ''
    }).catch((e) => Alert(e))
  }

  const updateUser = () => {
    updateDisplayName(displayName)
    handleClose()
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={updateUser}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <S.ModalTitle style={{ marginBottom: 12 }}>
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
          >
            {displayName[0].toUpperCase()}
          </Avatar>
          <h2 style={{ margin: 0, padding: 0, marginLeft: 12 }}>
            Hi {displayName}!
          </h2>
        </S.ModalTitle>
        <DialogContentText id="alert-dialog-slide-description">
          Here you can record tasks and view them from any device. Now choose a
          photo and complete the registration!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={updateUser}
        >
          skip
        </Button>
        <S.FileButton variant="contained">
          <input
            accept="image/*"
            type="file"
          />
          Set avatar
        </S.FileButton>
      </DialogActions>
    </Dialog>
  )
}
export { AlertDialog }
