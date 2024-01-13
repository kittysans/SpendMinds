import { useState, useRef } from 'react'
import './DashBoard.css';

// -- icon ---
import { IoFastFoodOutline, IoCardOutline, IoTicketOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";

// --- chart---
import { Line } from 'react-chartjs-2';
import { Chart as chartjS} from 'chart.js/auto'

// --- data ---
import ExpenseUser from '../UserDatas/ExpenseEachDay';

function DashBoard() {
  // --- ref ---
  const editRemoveItemRef = useRef(null)

  // --- data ---
  const [data, setData] = useState({
    labels: ExpenseUser.map(data => `${data.day} ${data.month}`),
    datasets: [
      {
        label: 'test',
        data: ExpenseUser.map(data => `${data.expense}`),
      },
      {
        label: 'test',
        data: [1000, 1000, 4000, 3000, 500],
      },
    ],
  })

  // --- function ---
  function toggleBotIcon() {
    editRemoveItemRef.current.classList.toggle('active')
  }

  return (
    <>
      <div className="dash-board-wrapper">
        <div className="chart-container">

          {/* --- expense section --- */}
          <div className="expense-bar">
            {/* type of expense */}
            <div className="type-expense-container">
              <p className='type-item'>Food & Drinks</p>
              <IoFastFoodOutline className='food'/>
              <h1 className='cost-pay'>$ 18,933</h1>
            </div>
            <div className="type-expense-container">
              <p className='type-item'>Food & Drinks</p>
              <IoCardOutline className='card'/>
              <h1 className='cost-pay'>$ 30,453</h1>
            </div>
            <div className="type-expense-container">
              <p className='type-item'>Food & Drinks</p>
              <IoTicketOutline className='ticket'/>
              <h1 className='cost-pay'>$ 20,902</h1>
            </div>
          </div>

          {/* chart section */}
          <div className="chart-section">
            <Line data={data}/>
          </div>
        </div>

        {/* --- history secton --- */}
        <div className="history-container">
          <h1 className='topic'><CiCalendar className='icon'/>Your Transaction History</h1>

          {/* item section */}
          <div className="item-container">
            <IoFastFoodOutline className='icon'/>
            <div className="detail-item">
              <p className="item">Burger King</p>
              <p className='time'>12 Jan, Monday</p>
            </div>
            <h1 className='cost reduce'>$ 1,770</h1>
            <BiDotsVerticalRounded className="other-icon" onClick={toggleBotIcon}/>
            <div className="edit-remove-item-container" ref={editRemoveItemRef}>
              <div className="button" onClick={toggleBotIcon}>Edit item</div>
              <div className="button" onClick={toggleBotIcon}>Remove item</div>
            </div>
          </div>
          <div className="item-container">
            <IoFastFoodOutline className='icon'/>
            <div className="detail-item">
              <p className="item">Adidas</p>
              <p className='time'>13 Jan, Monday</p>
            </div>
            <h1 className='cost increase'>$ 10,090</h1>
            <BiDotsVerticalRounded className="other-icon"/>
          </div>
          <div className="item-container">
            <IoFastFoodOutline className='icon'/>
            <div className="detail-item">
              <p className="item">Concert</p>
              <p className='time'>13 Jan, Monday</p>
            </div>
            <h1 className='cost increase'>$ 5,490</h1>
            <BiDotsVerticalRounded className="other-icon"/>
          </div>
          <div className="item-container">
            <IoFastFoodOutline className='icon'/>
            <div className="detail-item">
              <p className="item">Burger King</p>
              <p className='time'>12 Jan, Monday</p>
            </div>
            <h1 className='cost reduce'>$ 1,770</h1>
            <BiDotsVerticalRounded className="other-icon"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard