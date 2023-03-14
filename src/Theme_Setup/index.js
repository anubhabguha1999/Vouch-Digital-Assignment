import React from 'react'
import Dashboard from '../Dashboard'
import ThemForm from './ThemForm'
const Theme = () => {
    return (
        <div className="main-container">
            <div className="Ds_container">
                <Dashboard Ac_ids={2} />
                <ThemForm />
            </div>
        </div>
    )
}

export default Theme