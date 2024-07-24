import Customers from './customers/Customers'
import Header from './header/Header'
import styles from './Main.module.css'
const Main = () => {
	return (
		<div className={styles.main}>
			<Header />
			<Customers />
		</div>
	)
}

export default Main
