import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrProfile from './Create_Profile'
import LoginAct from './loginAct'
import ModulesSetup from './Modules_Setup'
import Page404 from './Page404'
import Payment from './Payment_Setup'
import Success from './Success'
import Theme from './Theme_Setup/index.js'
import VeiwClint from './View_Clients'

const Home = () => {
    const [Token, SetToken] = useState(true);
    useEffect(() => {
        const GetToken = localStorage.getItem('token');
        if (GetToken !== '') {
            SetToken(true)
        } else {
            SetToken(false)
        }
    })
    return (
        <>
            <div className="containers">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginAct />} />
                        <Route path='*' element={<Page404 />} />
                        <Route path='/View_Clients' element={<VeiwClint />} />
                        <Route path='/Create_Profile' element={<CrProfile />} />
                        <Route path='/Payment_Setup' element={<Payment />} />
                        <Route path='/Theme_Setup' element={<Theme />} />
                        <Route path='/Modules_Setup' element={<ModulesSetup />} />
                        <Route path='/Success' element={<Success />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default Home