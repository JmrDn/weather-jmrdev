import React from 'react'
import { CircleLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const override = {
        display:'inline-block',
        margin : '200px auto',
      

    };
  return (
    <CircleLoader
        color= '#E6E15D'
        loading={loading}
        cssOverride={override}
        size={150}
      />
  )
}

export default Spinner