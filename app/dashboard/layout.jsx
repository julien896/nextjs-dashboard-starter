import Sidebar from './_components/sidebar/sidebar'
import Navbar from './_components/navbar/navbar'

import styles from './dashboard.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            <Navbar />

            {children}
        </div>
    </div>
  )
}

export default Layout