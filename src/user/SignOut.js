import React from 'react'

import auth from '../config/auth';

const SignOut = () => {

  return auth.currentUser && (
    <button className="row btn btn-success" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default SignOut
