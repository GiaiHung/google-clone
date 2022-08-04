import React from 'react'
import { Routes as RoutesDOM, Route } from 'react-router-dom'
import Home from './Home'
import Results from './Results'

function Routes() {
    const routes = ['/search', '/news', '/video', '/images']
    return (
        <div className="p-4">
            <RoutesDOM>
                <Route path="/" element={<Home />} />
                {routes.map((route, index) => (
                    <Route path={route} key={index} element={<Results />} />
                ))}
            </RoutesDOM>
        </div>
    )
}

export default Routes
