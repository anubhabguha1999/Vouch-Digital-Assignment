import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddClintNav from '../Component/AddClintNav'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const CrContent = () => {
    const [ContAct, SetContAct] = useState({
        add: true,
        pay: false,
        them: false,
        Modul: false,
    })
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <AddClintNav ContAct={ContAct} />
                <div className="create-form">
                    <div className="cr_heading">
                        Create Client Profile
                    </div>
                    <div className="cr_para">
                        Add some basic information related to the client.
                    </div>
                    <form className='profile_Add_from'>
                        <div className="pro-pic-section">
                            <div className="uplo_pic">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.2857 13.7143H13.7143V22.2857C13.7143 23.2286 12.9429 24 12 24C11.0571 24 10.2857 23.2286 10.2857 22.2857V13.7143H1.71429C0.771429 13.7143 0 12.9429 0 12C0 11.0571 0.771429 10.2857 1.71429 10.2857H10.2857V1.71429C10.2857 0.771429 11.0571 0 12 0C12.9429 0 13.7143 0.771429 13.7143 1.71429V10.2857H22.2857C23.2286 10.2857 24 11.0571 24 12C24 12.9429 23.2286 13.7143 22.2857 13.7143Z" fill="#B8BABC" />
                                </svg>
                            </div>
                            <div className="compny-info">
                                <div className="text1">Company Logo</div>
                                <div className="text2">Logo ratio shoud be 1:1 and should be 120px X 120 px</div>
                            </div>
                        </div>

                        <div className="form_input_container">
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12  col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Company Name *" />
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12  col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Website" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Select className='fild-border pd-y-12 pd-x-16' aria-label="Floating label select example">
                                        <option>Select Business Category *</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Select className='fild-border pd-y-12 pd-x-16' aria-label="Floating label select example">
                                        <option>Select Facility Management Company *</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Company Email Address *" />
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Mobile Number *" />
                                </Col>
                            </Row>
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
                                    <Row className=''>
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
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="GST Number *" />
                                </Col>
                                <Col className='pd-y-14 col-12 col-sm-12 col-md-6'>
                                    <Form.Control className='fild-border pd-y-12 pd-x-16' placeholder="Fax Number" />
                                </Col>
                            </Row>

                        </div>


                        <div className="form_input_container">
                            <div className="form-btn-section">
                                <NavLink to='/Payment_Setup'>
                                    <button className='form-save-btn form-btn btn-flex'>
                                        <span className="text">Save & Continue</span>
                                        <span className="icon">
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.735818 11.765C1.04917 12.0783 1.55436 12.0783 1.86771 11.765L7.18186 6.45084C7.43126 6.20144 7.43126 5.79856 7.18186 5.54916L1.86771 0.235012C1.55436 -0.0783373 1.04917 -0.0783373 0.735818 0.235012C0.422468 0.548361 0.422468 1.05356 0.735818 1.36691L5.36571 6.0032L0.729423 10.6395C0.422468 10.9464 0.422468 11.458 0.735818 11.765Z" fill="white" />
                                            </svg>
                                        </span>
                                    </button>
                                </NavLink>
                                <button className='form-clear-btn form-btn'>
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

export default CrContent