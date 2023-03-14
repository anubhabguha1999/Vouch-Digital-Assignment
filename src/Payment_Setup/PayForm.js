import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddClintNav from '../Component/AddClintNav'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const PayForm = () => {
    const [ContAct, SetContAct] = useState({
        add: false,
        pay: true,
        them: false,
        Modul: false,
    })
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <AddClintNav ContAct={ContAct} />
                <div className="create-form">
                    <div className="cr_heading">
                        Payment Setup
                    </div>
                    <div className="cr_para">
                        Set up payments for the client.
                    </div>
                    <form className='profile_Add_from'>
                        <div className="form_input_container" >

                            <Form.Group className="pd-y-14">
                                <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Billing Address *" />
                            </Form.Group>
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Select className='fild-border pd-y-12 pd-x-16' aria-label="Floating label select example">
                                        <option>Select State *</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Row>
                                        <Col xs={8}>
                                            <Form.Select className='fild-border pd-y-12 pd-x-16' aria-label="Floating label select example">
                                                <option>Select City *</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xs={4}>
                                            <Form.Control className='fild-border pd-y-12 pd-x-16 col' placeholder="Pincode *" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Select className='fild-border pd-y-12 pd-x-16' aria-label="Floating label select example">
                                        <option>Select Number of Site Access *</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16 col' placeholder="Rs. Payable Amount per Site *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Discount (%) *" />
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Reason *" />
                                </Col>
                            </Row>
                        </div>


                        <div className="form_input_container">
                            <div className="form-fields">
                                <div className="input-leth">
                                    <div className="check-title">Payment Mode</div>
                                    <div className="check_list">
                                        <div className="check-fild">
                                            <div className="check-box">
                                                <Form.Check aria-label="option 1" id='UPI' /><label htmlFor="UPI">UPI</label>
                                            </div>
                                            <div className="check-box">
                                                <Form.Check aria-label="option 1" id='Cash' /> <label htmlFor="Cash">Cash</label>
                                            </div>
                                            <div className="check-box">
                                                <Form.Check aria-label="option 1" id='Cheque' /> <label htmlFor="Cheque">Cheque</label>
                                            </div>
                                            <div className="check-box">
                                                <Form.Check aria-label="option 1" id='Other' /> <label htmlFor="Other">Other</label>
                                            </div>
                                            <div className="check-box">
                                                <Form.Check aria-label="option 1" id='Banking' /> <label htmlFor="Banking">Net Banking</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="input-leth">
                                    <div className="check-title">Payment Status</div>
                                    <div className="check_list">
                                        <div className="check-fild">
                                            <div className="check-box">
                                                <Form.Check type="radio" name='radio' id='Paid' /> <label htmlFor="Paid">Paid</label>
                                            </div>
                                            <div className="check-box">
                                                <Form.Check type="radio" name='radio' id='Pending' /> <label htmlFor="Pending">Pending</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-btn-section">
                                <NavLink to='/Theme_Setup'>
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

export default PayForm