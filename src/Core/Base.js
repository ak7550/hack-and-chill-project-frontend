import React from 'react'
import './Base.css'

const Base = ({
    title, description, children
}) => {
    return (
        <>
            <h1 className="align-center ak">{title}</h1>
            <h4 className="align-left">{description}</h4>
            {children}
        </>
    )
}

export default Base
