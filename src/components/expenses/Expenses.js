import Card from '../ui/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((item) => {
        return (
          <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
        )
      })}
    </Card>
  )
}

export default Expenses
