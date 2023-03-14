import React from 'react'
import Dashboard from '../Dashboard'
import CrContent from './CrContent';
import './style.css';
const CrProfile = () => {
    return (
        <div className="main-container">
            <div className="Ds_container">
                <Dashboard Ac_ids={2}/>
                <CrContent />
            </div>
        </div>
    )
}

export default CrProfile