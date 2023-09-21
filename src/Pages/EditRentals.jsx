import React from 'react'
import { useParams } from 'react-router-dom'

const EditRentals = () => {
    const {id} = useParams();
  return (
    <div>EditRentals---{id}</div>
  )
}

export default EditRentals