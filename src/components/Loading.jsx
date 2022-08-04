import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loading = () => (
    <div className="flex justify-center items-center ">
        <Puff ariaLabel="loading" color="white" height="550" width="80" />
    </div>
)

export default Loading
