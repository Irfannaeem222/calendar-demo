import React from 'react';

function CalanderHeader() {

    return (
        <div className="codyhouse">
            <div className="month-year">October, 2023</div>
            <div>
                <ul className="day-List">
                    <li>
                        <div><i className="fa fa-angle-left"></i></div>
                    </li>
                    <li>
                        <div className="date-card">
                            <small>Mon</small>
                            <h5>9</h5>
                        </div>
                    </li>
                    <li>
                        <div className="date-card data-card-active">
                            <small>Tue</small>
                            <h5>10</h5>
                        </div>
                    </li>
                    <li>
                        <div className="date-card">
                            <small>Wed</small>
                            <h5>11</h5>
                        </div>
                    </li>
                    <li>
                        <div className="date-card">
                            <small>Thu</small>
                            <h5>12</h5>
                        </div>
                    </li>
                    <li>
                        <div className="date-card">
                            <small>Fri</small>
                            <h5>13</h5>
                        </div>
                    </li>
                    <li>
                        <div className="date-card">
                            <small>Sat</small>
                            <h5>14</h5>
                        </div>
                    </li>
                    <li>
                        <div><i className="fa fa-angle-right"></i></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CalanderHeader;
