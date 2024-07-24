import styles from './Customers.module.css'
import CustomersFooter from './customersFooter/CustomersFooter'
import CustomersHeader from './customersHeader/CustomersHeader'
import CustomersTable from './customersTable/CustomersTable'
const Customers = () => {
	return (
		<div className={styles.customers}>
			<CustomersHeader />
			<CustomersTable />
			<CustomersFooter />
		</div>
	)
}

export default Customers
