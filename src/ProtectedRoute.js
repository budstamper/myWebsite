import React from 'react'
import { Redirect } from 'react-router-dom'

const ProtectedRoute = props => {
    const { isAuthenticated } = props
    return (
        isAuthenticated 
            ?   props.render()
            :   <Redirect to="/"/>
        )
    }

export default ProtectedRoute