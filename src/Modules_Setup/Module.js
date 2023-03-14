import React, { Children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddClintNav from '../Component/AddClintNav'
import data from '../DataBase'

const ListMenu = ({ _id, mod_name, child, SetCurChild }) => {
    return (
        <>
            <input id={`Child${_id}`} type="checkbox" />
            <label htmlFor={`Child${_id}`}>
                <span className="act_check">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="14" height="14" rx="3" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70659 7.29925C5.61435 7.20374 5.504 7.12756 5.382 7.07515C5.25999 7.02274 5.12877 6.99515 4.99599 6.994C4.86321 6.99285 4.73154 7.01815 4.60864 7.06843C4.48574 7.11871 4.37409 7.19296 4.2802 7.28686C4.18631 7.38075 4.11205 7.4924 4.06177 7.6153C4.01149 7.73819 3.98619 7.86987 3.98734 8.00265C3.9885 8.13543 4.01608 8.26665 4.06849 8.38865C4.1209 8.51066 4.19708 8.621 4.29259 8.71325L6.29259 10.7132C6.48012 10.9007 6.73443 11.006 6.99959 11.006C7.26476 11.006 7.51906 10.9007 7.70659 10.7132L11.7066 6.71325C11.8021 6.621 11.8783 6.51066 11.9307 6.38865C11.9831 6.26665 12.0107 6.13543 12.0118 6.00265C12.013 5.86987 11.9877 5.73819 11.9374 5.6153C11.8871 5.4924 11.8129 5.38075 11.719 5.28686C11.6251 5.19296 11.5134 5.11871 11.3905 5.06843C11.2677 5.01815 11.136 4.99285 11.0032 4.994C10.8704 4.99515 10.7392 5.02274 10.6172 5.07515C10.4952 5.12756 10.3848 5.20374 10.2926 5.29925L6.99959 8.59225L5.70659 7.29925Z" fill="#153AC7" />
                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="white" strokeWidth="2" />
                    </svg>
                </span>
                <span className="dct_check">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#E6E6E6" strokeWidth="2" />
                    </svg>
                </span>
                <span className="dct_check_box">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="14" height="14" rx="3" fill="#153AC7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70659 7.29925C5.61435 7.20374 5.504 7.12756 5.382 7.07515C5.25999 7.02274 5.12877 6.99515 4.99599 6.994C4.86321 6.99285 4.73154 7.01815 4.60864 7.06843C4.48574 7.11871 4.37409 7.19296 4.2802 7.28686C4.18631 7.38075 4.11205 7.4924 4.06177 7.6153C4.01149 7.73819 3.98619 7.86987 3.98734 8.00265C3.9885 8.13543 4.01608 8.26665 4.06849 8.38865C4.1209 8.51066 4.19708 8.621 4.29259 8.71325L6.29259 10.7132C6.48012 10.9007 6.73443 11.006 6.99959 11.006C7.26476 11.006 7.51906 10.9007 7.70659 10.7132L11.7066 6.71325C11.8021 6.621 11.8783 6.51066 11.9307 6.38865C11.9831 6.26665 12.0107 6.13543 12.0118 6.00265C12.013 5.86987 11.9877 5.73819 11.9374 5.6153C11.8871 5.4924 11.8129 5.38075 11.719 5.28686C11.6251 5.19296 11.5134 5.11871 11.3905 5.06843C11.2677 5.01815 11.136 4.99285 11.0032 4.994C10.8704 4.99515 10.7392 5.02274 10.6172 5.07515C10.4952 5.12756 10.3848 5.20374 10.2926 5.29925L6.99959 8.59225L5.70659 7.29925Z" fill="#FAFBFC" />
                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#153AC7" strokeWidth="2" />
                    </svg>
                </span>
                <span>{mod_name}</span>
                <span className='rt_check'>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.647431 15.6867C1.06523 16.1045 1.73882 16.1045 2.15662 15.6867L9.24216 8.60112C9.57469 8.26859 9.57469 7.73141 9.24216 7.39888L2.15662 0.313349C1.73882 -0.10445 1.06523 -0.10445 0.647431 0.313349C0.229632 0.731148 0.229632 1.40474 0.647431 1.82254L6.82063 8.00426L0.638905 14.186C0.229632 14.5953 0.229632 15.2774 0.647431 15.6867Z" fill="white" />
                    </svg>
                </span>
            </label>
        </>
    )
}

const Child = ({ name, _id, subChild }) => {
    return (
        <div className="child_list_box">
            <input type="checkbox" id={`_id${_id}`} />
            <label htmlFor={`_id${_id}`} >
                <span className="dl_child">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#E6E6E6" strokeWidth="2" />
                    </svg>
                </span>
                <span className="sl_child">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="14" height="14" rx="3" fill="#153AC7" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70659 7.29925C5.61435 7.20374 5.504 7.12756 5.382 7.07515C5.25999 7.02274 5.12877 6.99515 4.99599 6.994C4.86321 6.99285 4.73154 7.01815 4.60864 7.06843C4.48574 7.11871 4.37409 7.19296 4.2802 7.28686C4.18631 7.38075 4.11205 7.4924 4.06177 7.6153C4.01149 7.73819 3.98619 7.86987 3.98734 8.00265C3.9885 8.13543 4.01608 8.26665 4.06849 8.38865C4.1209 8.51066 4.19708 8.621 4.29259 8.71325L6.29259 10.7132C6.48012 10.9007 6.73443 11.006 6.99959 11.006C7.26476 11.006 7.51906 10.9007 7.70659 10.7132L11.7066 6.71325C11.8021 6.621 11.8783 6.51066 11.9307 6.38865C11.9831 6.26665 12.0107 6.13543 12.0118 6.00265C12.013 5.86987 11.9877 5.73819 11.9374 5.6153C11.8871 5.4924 11.8129 5.38075 11.719 5.28686C11.6251 5.19296 11.5134 5.11871 11.3905 5.06843C11.2677 5.01815 11.136 4.99285 11.0032 4.994C10.8704 4.99515 10.7392 5.02274 10.6172 5.07515C10.4952 5.12756 10.3848 5.20374 10.2926 5.29925L6.99959 8.59225L5.70659 7.29925Z" fill="#FAFBFC" />
                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#153AC7" strokeWidth="2" />
                    </svg>
                </span>
                <span className="text">{name}</span>
            </label>
            {
                subChild ? subChild.map((val, ind) => {
                    return (
                        <div className="subChild" key={ind}>
                            <input type="checkbox" id={`ind${ind}`} />
                            <label htmlFor={`ind${ind}`}>
                                <span className="dl_child">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#E6E6E6" strokeWidth="2" />
                                    </svg>
                                </span>
                                <span className="sl_child">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="1" width="14" height="14" rx="3" fill="#153AC7" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70659 7.29925C5.61435 7.20374 5.504 7.12756 5.382 7.07515C5.25999 7.02274 5.12877 6.99515 4.99599 6.994C4.86321 6.99285 4.73154 7.01815 4.60864 7.06843C4.48574 7.11871 4.37409 7.19296 4.2802 7.28686C4.18631 7.38075 4.11205 7.4924 4.06177 7.6153C4.01149 7.73819 3.98619 7.86987 3.98734 8.00265C3.9885 8.13543 4.01608 8.26665 4.06849 8.38865C4.1209 8.51066 4.19708 8.621 4.29259 8.71325L6.29259 10.7132C6.48012 10.9007 6.73443 11.006 6.99959 11.006C7.26476 11.006 7.51906 10.9007 7.70659 10.7132L11.7066 6.71325C11.8021 6.621 11.8783 6.51066 11.9307 6.38865C11.9831 6.26665 12.0107 6.13543 12.0118 6.00265C12.013 5.86987 11.9877 5.73819 11.9374 5.6153C11.8871 5.4924 11.8129 5.38075 11.719 5.28686C11.6251 5.19296 11.5134 5.11871 11.3905 5.06843C11.2677 5.01815 11.136 4.99285 11.0032 4.994C10.8704 4.99515 10.7392 5.02274 10.6172 5.07515C10.4952 5.12756 10.3848 5.20374 10.2926 5.29925L6.99959 8.59225L5.70659 7.29925Z" fill="#FAFBFC" />
                                        <rect x="1" y="1" width="14" height="14" rx="3" stroke="#153AC7" strokeWidth="2" />
                                    </svg>
                                </span>
                                <span className="text">{val}</span>
                            </label>
                        </div>

                    )
                }) : ''
            }
        </div>
    )
}

const Module = () => {
    const [CurChild, SetCurChild] = useState(6)
    const [ContAct, SetContAct] = useState({
        add: false,
        pay: false,
        them: false,
        Modul: true,
    })
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <AddClintNav ContAct={ContAct} />
                <div className="create-form">
                    <div className="cr_heading">
                        Modules Setup
                    </div>
                    <div className="cr_para">
                        Select the modules that the client can use..
                    </div>
                    <form className='profile_Add_from'>

                        {/* module */}
                        <div className="modul_cont">
                            {/* list  */}
                            <div className="modul_list">
                                {
                                    data.map((CurElem) => {
                                        return (
                                            <div key={CurElem._id} className={(CurElem._id === CurChild + 1) ? "list_box active" : 'list_box'} onClick={() => { SetCurChild(CurElem._id - 1) }} >
                                                <ListMenu key={CurElem._id} {...CurElem} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* relative div */}
                            <div className="modul_child_cont">
                                <div className="modul_child_box">
                                    <div className="modul_child-head">
                                        <div className="left">
                                            <div className="list_logo">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_3360_775)">
                                                        <path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM20.952 8.544L17.616 9.924C17.004 8.292 15.72 6.996 14.076 6.396L15.456 3.06C17.976 4.02 19.98 6.024 20.952 8.544ZM12 15.6C10.008 15.6 8.4 13.992 8.4 12C8.4 10.008 10.008 8.4 12 8.4C13.992 8.4 15.6 10.008 15.6 12C15.6 13.992 13.992 15.6 12 15.6ZM8.556 3.048L9.96 6.384C8.304 6.984 6.996 8.292 6.384 9.948L3.048 8.556C4.02 6.024 6.024 4.02 8.556 3.048ZM3.048 15.444L6.384 14.064C6.996 15.72 8.292 17.016 9.948 17.616L8.544 20.952C6.024 19.98 4.02 17.976 3.048 15.444ZM15.456 20.952L14.076 17.616C15.72 17.004 17.016 15.708 17.616 14.052L20.952 15.456C19.98 17.976 17.976 19.98 15.456 20.952Z" fill="#153AC7" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_3360_775">
                                                            <rect width="24" height="24" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="list_info">
                                                <div className="list_name">{data[CurChild].mod_name}</div>
                                                <div className="list_about">Select the sub modules that the client can use.</div>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <button className='form-save-btn form-btn btn-flex' type='button'>
                                                <span className="icon1">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.70457 8.77842L1.21934 6.2932C0.940018 6.01388 0.488809 6.01388 0.20949 6.2932C-0.0698299 6.57252 -0.0698299 7.02372 0.20949 7.30304L3.20322 10.2968C3.48254 10.5761 3.93375 10.5761 4.21307 10.2968L11.7905 2.71934C12.0698 2.44002 12.0698 1.98881 11.7905 1.70949C11.5112 1.43017 11.06 1.43017 10.7807 1.70949L3.70457 8.77842Z" fill="white" />
                                                    </svg>
                                                </span>
                                                <span className="text">Visible to Client</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="line"></div>
                                    <div className="child_list">
                                        {
                                            data[CurChild].child.map((CurVal) => {
                                                return <Child key={CurVal._id} {...CurVal} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="form_input_container">
                            <div className="form-btn-section">
                                <NavLink to='/Success'>
                                    <button className='form-save-btn form-btn btn-flex' type='button'>
                                        <span className="text">Save & Continue</span>
                                        <span className="icon">
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.735818 11.765C1.04917 12.0783 1.55436 12.0783 1.86771 11.765L7.18186 6.45084C7.43126 6.20144 7.43126 5.79856 7.18186 5.54916L1.86771 0.235012C1.55436 -0.0783373 1.04917 -0.0783373 0.735818 0.235012C0.422468 0.548361 0.422468 1.05356 0.735818 1.36691L5.36571 6.0032L0.729423 10.6395C0.422468 10.9464 0.422468 11.458 0.735818 11.765Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </NavLink>
                                <button className='form-clear-btn form-btn' type='button'>
                                    <span className="icon">
                                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.93027 2.04675V0.311866C4.93027 0.0320453 4.59449 -0.104756 4.40172 0.0942276L2.0388 2.45094C1.91443 2.5753 1.91443 2.76807 2.0388 2.89243L4.3955 5.24914C4.59449 5.4419 4.93027 5.3051 4.93027 5.02528V3.2904C7.24967 3.2904 9.08405 5.41703 8.57415 7.82349C8.2819 9.23503 7.13774 10.373 5.73242 10.6652C3.51252 11.1316 1.53512 9.60812 1.23664 7.54988C1.19312 7.25141 0.93195 7.02134 0.627257 7.02134C0.254163 7.02134 -0.0443118 7.3509 0.00543407 7.724C0.390964 10.4538 2.99018 12.4747 5.93141 11.9026C7.87149 11.5233 9.43227 9.96256 9.81158 8.02247C10.4272 4.83252 8.00208 2.04675 4.93027 2.04675Z" fill="#686687" />
                                        </svg>
                                    </span>
                                    <span className="text">Reset</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Module   