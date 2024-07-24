import { FaSearch } from 'react-icons/fa'
import styles from './CustomersHeader.module.css'
const CustomersHeader = () => {
	return (
		<div className={styles.customers__header}>
			<div>
				<h2 className={styles.customers__header_title}>All Customers</h2>
				<p className={styles.customers__header_subtitle}>Active Members</p>
			</div>
			<div className={styles.customers__header_search}>
				<FaSearch
					fill='#7e7e7e'
					className={styles.customers__header_search_icon}
				/>
				<input
					type='text'
					className={styles.customers__header_search_input}
					placeholder='Search'
				/>
			</div>
		</div>
	)
}

export default CustomersHeader
