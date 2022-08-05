import React from 'react'
import { Puff } from 'react-loader-spinner'

const Loading = () => (
    <div className="flex justify-center items-center ">
        <Puff ariaLabel="loading" color="#736260" height="550" width="80" />
    </div>
)

export default Loading
