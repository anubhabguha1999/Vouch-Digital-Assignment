import React from 'react'
import Dashboard from '../Dashboard'
import SuccResult from './SuccResult'
const Success = () => {
    return (
        <div className="main-container">
            <div className="Ds_container">
                <Dashboard Ac_ids={2} />
                <SuccResult/>
            </div>
        </div>
    )
}

export default Success