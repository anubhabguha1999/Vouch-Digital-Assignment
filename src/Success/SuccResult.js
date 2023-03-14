const SuccResult = () => {
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <div className="cont_head">
                    <div className="left">
                        <span className="cont_head_logo">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="16" fill="#12B690" />
                                <path d="M12.9394 19.7046L9.62578 16.3909C9.25336 16.0185 8.65175 16.0185 8.27932 16.3909C7.90689 16.7634 7.90689 17.365 8.27932 17.7374L12.271 21.729C12.6434 22.1015 13.245 22.1015 13.6174 21.729L23.7207 11.6258C24.0931 11.2534 24.0931 10.6517 23.7207 10.2793C23.3483 9.90689 22.7466 9.90689 22.3742 10.2793L12.9394 19.7046Z" fill="white" />
                            </svg>
                        </span>
                        <span className="cont_titale">You have successfully added Infosys.</span>
                    </div>
                    <div className="right">
                        <button className='mr-10 btn-lite form-btn font-btn' type='button'>
                            <span className="text">Go to Client Master</span>
                        </button>
                        <button className='btn-primery form-btn font-btn' type='button'>
                            <span className="text">Add More Clients</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cont_cart">
                <div className="row">
                    {/* 1 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="cart cart-lite">
                            <div className="cart-contant">
                                <div className="profile_dp">
                                    <img src="./Assets/User1.png" alt="" />
                                </div>
                                <div className="profile_name">
                                    ISS Facility Services
                                </div>
                                <div className="profile_value">
                                    4 Clients
                                </div>
                            </div>
                            <div className="cart-btn-sect">
                                <button className='btn-liteGay form-btn font-btn fit-btn' type='button'>
                                    <span className="text">Add More Clients</span>
                                </button>
                                <button className='btn-transperent  font-btn fit-btn' type='button'>
                                    All
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="cart cart-lite">
                            <div className="cart-contant">
                                <div className="profile_logo">
                                    <div className="profile_dp">
                                        <img src="./Assets/User2.png" alt="" />
                                    </div>
                                </div>
                                <div className="profile_name">
                                    Infosys
                                </div>
                                <div className="profile_value">
                                    --
                                </div>
                            </div>
                            <div className="cart-btn-sect">
                                <button className='btn-liteGay form-btn font-btn fit-btn' type='button'>
                                    <span className="text">Add More Clients</span>
                                </button>
                                <button className='btn-transperent  font-btn fit-btn' type='button'>
                                    All
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="cart cart-lite">
                            <div className="cart-contant">
                                <div className="profile_logo">
                                    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6474 34.699V23.8295H24.343V34.699C24.343 35.8946 25.3212 36.8729 26.5169 36.8729H33.0385C34.2342 36.8729 35.2124 35.8946 35.2124 34.699V19.4817H38.9081C39.9081 19.4817 40.3863 18.2426 39.6254 17.5904L21.4517 1.22101C20.6256 0.481883 19.3647 0.481883 18.5387 1.22101L0.364893 17.5904C-0.374232 18.2426 0.0822861 19.4817 1.08228 19.4817H4.7779V34.699C4.7779 35.8946 5.75615 36.8729 6.9518 36.8729H13.4735C14.6691 36.8729 15.6474 35.8946 15.6474 34.699Z" fill="#153AC7" />
                                    </svg>
                                </div>
                                <div className="profile_name">
                                    Sites
                                </div>
                                <div className="profile_value">
                                    --
                                </div>
                            </div>
                            <div className="cart-btn-sect">
                                <button className='btn-primery form-btn font-btn fit-btn' type='button'>
                                    <span className="text">Add More Clients</span>
                                </button>
                                <button className='btn-transperent  font-btn fit-btn' type='button'>
                                    All
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 4/ */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="cart cart-lite disable-cart">
                            <div className="cart-contant">
                                <div className="profile_logo">
                                    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6474 34.699V23.8295H24.343V34.699C24.343 35.8946 25.3212 36.8729 26.5169 36.8729H33.0385C34.2342 36.8729 35.2124 35.8946 35.2124 34.699V19.4817H38.9081C39.9081 19.4817 40.3863 18.2426 39.6254 17.5904L21.4517 1.22101C20.6256 0.481883 19.3647 0.481883 18.5387 1.22101L0.364893 17.5904C-0.374232 18.2426 0.0822861 19.4817 1.08228 19.4817H4.7779V34.699C4.7779 35.8946 5.75615 36.8729 6.9518 36.8729H13.4735C14.6691 36.8729 15.6474 35.8946 15.6474 34.699Z" fill="#153AC7" />
                                    </svg>
                                </div>
                                <div className="profile_name">
                                    <span>Sites</span>
                                </div>
                                <div className="profile_value">
                                    <span>--</span>
                                </div>
                            </div>
                            <div className="cart-btn-sect">
                                <button className='btn-primery form-btn font-btn fit-btn' type='button'>
                                    <span className="text">Add More Clients</span>
                                </button>
                                <button className='btn-transperent  font-btn fit-btn' type='button'>
                                    <span>All</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* 5/ */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="cart cart-lite disable-cart">
                            <div className="cart-contant">
                                <div className="profile_logo">
                                    <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.6474 34.699V23.8295H24.343V34.699C24.343 35.8946 25.3212 36.8729 26.5169 36.8729H33.0385C34.2342 36.8729 35.2124 35.8946 35.2124 34.699V19.4817H38.9081C39.9081 19.4817 40.3863 18.2426 39.6254 17.5904L21.4517 1.22101C20.6256 0.481883 19.3647 0.481883 18.5387 1.22101L0.364893 17.5904C-0.374232 18.2426 0.0822861 19.4817 1.08228 19.4817H4.7779V34.699C4.7779 35.8946 5.75615 36.8729 6.9518 36.8729H13.4735C14.6691 36.8729 15.6474 35.8946 15.6474 34.699Z" fill="#153AC7" />
                                    </svg>
                                </div>
                                <div className="profile_name">
                                    <span>Sites</span>
                                </div>
                                <div className="profile_value">
                                    <span>--</span>
                                </div>
                            </div>
                            <div className="cart-btn-sect">
                                <button className='btn-primery form-btn font-btn fit-btn' type='button'>
                                    <span className="text">Add More Clients</span>
                                </button>
                                <button className='btn-transperent  font-btn fit-btn' type='button'>
                                    <span>All</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccResult