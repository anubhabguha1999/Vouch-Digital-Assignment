import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import PayForm from './PayForm'
const Payment = () => {
    return (
        <div className="main-container">
            <div className="Ds_container">
                <Dashboard Ac_ids={2} />
                <PayForm />
            </div>
        </div>
    )
}

export default Payment