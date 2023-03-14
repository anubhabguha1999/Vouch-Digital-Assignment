import React, { useEffect } from 'react'

const Board = ({ setToggle }) => {
    window.addEventListener('click', (event) => {
        if (event.target.className === 'aside_container active') {
            setToggle(false)
        }
    })
    const url = window.location.pathname;
    const filename = url.substring(url.lastIndexOf('/') + 1);
    let CRUL = filename.replace('_', ' ')
    useEffect(() => {
        document.title = CRUL;
    })
    return (
        <div className="Dashboard">
            <div className="board_cont">
                <div className="Dashboard_header">
                    <div className="toggleBtn" onClick={() => setToggle(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352" /></svg>
                    </div>
                    <div className="file_info">
                        <div className="clientOP">Add Client</div>
                        <div className="file_path">Client Master / Add Client <span>/ {CRUL}</span></div>
                    </div>
                    <div className="notifi">
                        <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.2063 12.6354L11.1479 11.5769V7.47436C11.1479 4.95538 9.80224 2.84667 7.45557 2.28872V1.73077C7.45557 1.04974 6.90583 0.5 6.2248 0.5C5.54378 0.5 4.99403 1.04974 4.99403 1.73077V2.28872C2.63916 2.84667 1.30172 4.94718 1.30172 7.47436V11.5769L0.243263 12.6354C-0.27366 13.1523 0.0873658 14.0385 0.817622 14.0385H11.6238C12.3622 14.0385 12.7233 13.1523 12.2063 12.6354ZM9.50685 12.3974H2.94275V7.47436C2.94275 5.43949 4.18172 3.78205 6.2248 3.78205C8.26788 3.78205 9.50685 5.43949 9.50685 7.47436V12.3974ZM6.2248 16.5C7.12737 16.5 7.86583 15.7615 7.86583 14.859H4.58378C4.58378 15.7615 5.31403 16.5 6.2248 16.5Z" fill="#686687" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
