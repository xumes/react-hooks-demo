import React from 'react'

const user = {
    firstName: 'Jane',
    lastName: 'Doe'
  }

export const UserProfileContext = React.createContext( user );
