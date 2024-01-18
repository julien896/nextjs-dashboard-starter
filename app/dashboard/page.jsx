import Card from "./_components/card/card"
import Chart from "./_components/chart/chart"
import RightBar from "./_components/rightbar/right-bar"
import Transactions from "./_components/transactions/transactions"

import styles from './dashboard.module.css'

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default DashboardPage