import React, { useState, useEffect } from 'react'
import Row from './Row'
import Users from '../DataBase/User.json'
import ReactPaginate from 'react-paginate';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div className="table-box">
                        {console.log(item)}
                        <table className='table_view'>
                            <thead>
                                <tr>
                                    <td>Company Name</td>
                                    <td>Email Address</td>
                                    <td>Phone No</td>
                                    <td>Contact Person</td>
                                    <td>Facilitator</td>
                                    <td>Sites</td>
                                    <td>Tenants</td>
                                    <td>Tenant Groups</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Users.map((CurElem) => {
                                        return <Row key={CurElem._id} {...CurElem} />
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="container_box1">
                <ReactPaginate className="nav_bLInk"
                    breakLabel="..."
                    nextLabel="next  >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=" < previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}



const TableView = () => {
    const [Mb_show, SetMb_show] = useState(false)
    return (
        <div className="contect-view">
            <div className="veiw-container">
                <div className="view-header view-header-flex">
                    {/* search */}
                    <div className="mobile_search_btn">
                        <button>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6575 13.7507L8.09315 9.20548C7.72237 9.51233 7.28128 9.75525 6.76986 9.93425C6.25845 10.1132 5.71507 10.2027 5.13973 10.2027C3.69498 10.2027 2.47717 9.70411 1.4863 8.70685C0.495434 7.70959 0 6.50776 0 5.10137C0 3.69498 0.49863 2.49315 1.49589 1.49589C2.49315 0.49863 3.69498 0 5.10137 0C6.52055 0 7.72237 0.49863 8.70685 1.49589C9.69132 2.49315 10.1836 3.69498 10.1836 5.10137C10.1836 5.66393 10.1005 6.19452 9.93425 6.69315C9.76804 7.19178 9.51872 7.66484 9.1863 8.11233L13.7699 12.6575C13.9233 12.811 14 12.9932 14 13.2041C14 13.4151 13.9169 13.5973 13.7507 13.7507C13.5973 13.9041 13.4119 13.9808 13.1945 13.9808C12.9772 13.9808 12.7982 13.9041 12.6575 13.7507ZM5.12055 8.66849C6.10502 8.66849 6.94247 8.32009 7.63288 7.62329C8.32329 6.92648 8.66849 6.08584 8.66849 5.10137C8.66849 4.1169 8.32329 3.27626 7.63288 2.57945C6.94247 1.88265 6.10502 1.53425 5.12055 1.53425C4.1105 1.53425 3.25708 1.88265 2.56027 2.57945C1.86347 3.27626 1.51507 4.1169 1.51507 5.10137C1.51507 6.08584 1.86347 6.92648 2.56027 7.62329C3.25708 8.32009 4.1105 8.66849 5.12055 8.66849Z" fill="#B8BABC" />
                            </svg>
                        </button>
                        <div className="btn_layer" onClick={() => SetMb_show(true)}></div>
                    </div>
                    <div className="view-header-search">
                        <div className="search-feild">
                            <div className="search-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6575 13.7507L8.09315 9.20548C7.72237 9.51233 7.28128 9.75525 6.76986 9.93425C6.25845 10.1132 5.71507 10.2027 5.13973 10.2027C3.69498 10.2027 2.47717 9.70411 1.4863 8.70685C0.495434 7.70959 0 6.50776 0 5.10137C0 3.69498 0.49863 2.49315 1.49589 1.49589C2.49315 0.49863 3.69498 0 5.10137 0C6.52055 0 7.72237 0.49863 8.70685 1.49589C9.69132 2.49315 10.1836 3.69498 10.1836 5.10137C10.1836 5.66393 10.1005 6.19452 9.93425 6.69315C9.76804 7.19178 9.51872 7.66484 9.1863 8.11233L13.7699 12.6575C13.9233 12.811 14 12.9932 14 13.2041C14 13.4151 13.9169 13.5973 13.7507 13.7507C13.5973 13.9041 13.4119 13.9808 13.1945 13.9808C12.9772 13.9808 12.7982 13.9041 12.6575 13.7507ZM5.12055 8.66849C6.10502 8.66849 6.94247 8.32009 7.63288 7.62329C8.32329 6.92648 8.66849 6.08584 8.66849 5.10137C8.66849 4.1169 8.32329 3.27626 7.63288 2.57945C6.94247 1.88265 6.10502 1.53425 5.12055 1.53425C4.1105 1.53425 3.25708 1.88265 2.56027 2.57945C1.86347 3.27626 1.51507 4.1169 1.51507 5.10137C1.51507 6.08584 1.86347 6.92648 2.56027 7.62329C3.25708 8.32009 4.1105 8.66849 5.12055 8.66849Z" fill="#B8BABC" />
                                </svg>
                            </div>
                            <div className="search-input">
                                <input type="search" placeholder='Search ' />
                            </div>
                        </div>
                    </div>
                    <div className="view-btn-container">
                        <button className='view-btn colBtn'>
                            <span className="text">
                                Columns
                            </span>
                            <span className="icon">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.46756 0.345073L4.99553 3.81711L1.52349 0.345073C1.1745 -0.00392008 0.610738 -0.00392008 0.261745 0.345073C-0.0872483 0.694067 -0.0872483 1.25782 0.261745 1.60682L4.36913 5.7142C4.71812 6.06319 5.28188 6.06319 5.63087 5.7142L9.73825 1.60682C10.0872 1.25782 10.0872 0.694067 9.73825 0.345073C9.38926 0.00502846 8.81656 -0.00392008 8.46756 0.345073Z" fill="#939596" />
                                </svg>
                            </span>
                        </button>
                        <button className='view-btn EpBtn'>
                            <span className="icon">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.90665 8.46959C5.81612 8.46959 5.73126 8.45262 5.65205 8.41867C5.57284 8.38472 5.49929 8.33381 5.4314 8.26591L2.76662 5.60113C2.63083 5.46535 2.56577 5.3041 2.57143 5.1174C2.57709 4.93069 2.64781 4.77511 2.78359 4.65064C2.91938 4.51485 3.07779 4.44696 3.25884 4.44696C3.43989 4.44696 3.5983 4.51485 3.73409 4.65064L5.22772 6.16124V0.678925C5.22772 0.486563 5.29279 0.325318 5.42291 0.195191C5.55304 0.0650636 5.71429 0 5.90665 0C6.09901 0 6.26025 0.0650636 6.39038 0.195191C6.52051 0.325318 6.58557 0.486563 6.58557 0.678925V6.16124L8.09618 4.65064C8.23197 4.51485 8.39038 4.44696 8.57143 4.44696C8.75248 4.44696 8.91089 4.51485 9.04668 4.65064C9.18246 4.77511 9.25035 4.93069 9.25035 5.1174C9.25035 5.3041 9.18246 5.46535 9.04668 5.60113L6.3819 8.26591C6.314 8.33381 6.23762 8.38472 6.15276 8.41867C6.06789 8.45262 5.98586 8.46959 5.90665 8.46959ZM1.35785 12C0.984441 12 0.664781 11.867 0.398869 11.6011C0.132956 11.3352 0 11.0156 0 10.6421V8.46959C0 8.27723 0.0650638 8.11598 0.195191 7.98586C0.325318 7.85573 0.486563 7.79067 0.678925 7.79067C0.871287 7.79067 1.03253 7.85573 1.16266 7.98586C1.29279 8.11598 1.35785 8.27157 1.35785 8.45262V10.6421H10.4554V8.45262C10.4554 8.27157 10.5205 8.11598 10.6506 7.98586C10.7808 7.85573 10.942 7.79067 11.1344 7.79067C11.3154 7.79067 11.471 7.85573 11.6011 7.98586C11.7313 8.11598 11.7963 8.27157 11.7963 8.45262V10.6421C11.7963 11.0156 11.6634 11.3352 11.3975 11.6011C11.1315 11.867 10.8175 12 10.4554 12H1.35785Z" fill="#153AC7" />
                                </svg>
                            </span>
                            <span className="text">
                                Export
                            </span>
                        </button>
                    </div>

                    {
                        Mb_show ? <div className="mobile_search">
                            <div className="search-feild">
                                <div className="search-icon">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6575 13.7507L8.09315 9.20548C7.72237 9.51233 7.28128 9.75525 6.76986 9.93425C6.25845 10.1132 5.71507 10.2027 5.13973 10.2027C3.69498 10.2027 2.47717 9.70411 1.4863 8.70685C0.495434 7.70959 0 6.50776 0 5.10137C0 3.69498 0.49863 2.49315 1.49589 1.49589C2.49315 0.49863 3.69498 0 5.10137 0C6.52055 0 7.72237 0.49863 8.70685 1.49589C9.69132 2.49315 10.1836 3.69498 10.1836 5.10137C10.1836 5.66393 10.1005 6.19452 9.93425 6.69315C9.76804 7.19178 9.51872 7.66484 9.1863 8.11233L13.7699 12.6575C13.9233 12.811 14 12.9932 14 13.2041C14 13.4151 13.9169 13.5973 13.7507 13.7507C13.5973 13.9041 13.4119 13.9808 13.1945 13.9808C12.9772 13.9808 12.7982 13.9041 12.6575 13.7507ZM5.12055 8.66849C6.10502 8.66849 6.94247 8.32009 7.63288 7.62329C8.32329 6.92648 8.66849 6.08584 8.66849 5.10137C8.66849 4.1169 8.32329 3.27626 7.63288 2.57945C6.94247 1.88265 6.10502 1.53425 5.12055 1.53425C4.1105 1.53425 3.25708 1.88265 2.56027 2.57945C1.86347 3.27626 1.51507 4.1169 1.51507 5.10137C1.51507 6.08584 1.86347 6.92648 2.56027 7.62329C3.25708 8.32009 4.1105 8.66849 5.12055 8.66849Z" fill="#B8BABC" />
                                    </svg>
                                </div>
                                <div className="search-input">
                                    <input type="search" placeholder='Search ' />
                                </div>
                            </div>
                            <button className='search_close' onClick={() => SetMb_show(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>
                            </button>
                        </div> : ''
                    }

                </div>

                {/* table  */}

                <PaginatedItems itemsPerPage={1} />
            </div>
        </div>
    )
}

export default TableView