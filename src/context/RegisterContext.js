import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  displayText: '',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})

export default RegisterContext
