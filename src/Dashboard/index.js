import './style.css'
import React, { useState } from 'react'
import Aside from './Aside'
import Board from './Board'

const Dashboard = ({ Ac_ids }) => {
    const [Toggle, setToggle] = useState(false)
    return (
        <>
            <Aside Toggle={Toggle} Ac_ids={Ac_ids} />
            <Board setToggle={setToggle} />
        </>
    )
}

export default Dashboard