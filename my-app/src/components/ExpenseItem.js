import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>Jan 11 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
      </div>
      <div className='expense-item__price'>$214</div>
    </div>
  )
}

export default ExpenseItem
