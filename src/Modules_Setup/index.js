import React, { useState } from 'react'
import Dashboard from '../Dashboard'
import Module from './Module'
const ModulesSetup = () => {
    return (
        <div className="main-container">
            <div className="Ds_container">
                <Dashboard Ac_ids={2} />
                <Module />
            </div>
        </div>
    )
}

export default ModulesSetup