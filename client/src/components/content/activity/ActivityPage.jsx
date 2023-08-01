import React from 'react';
import "./activity.css";

export default function ActivityPage() {
  return (
    <div>
        <div className="activity-display">
            <div className="activity-col">
                <h3 className='activity-col-header'>Yesterday</h3>
            </div>
            <div className="activity-col">
                <h3 className='activity-col-header'>Today</h3>
            </div>
            <div className="activity-col">
                <h3 className='activity-col-header'>This Week</h3>
            </div>
        </div>
        <div className="activity-bottom">
            <div className="activity-filter">
                <div className="change-period">
                    <p>Choose a Different</p>
                    <select name="timePeriod" >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
                <div className="select-period">
                    <input type="date" />
                    <button>Update</button>
                </div>
            </div>
            <button className='activity-add-item'>Add New Item</button>
        </div>
    </div>
  )
}
