import customers from '../../../../content/customers'
import styles from './CustomersTable.module.css'

const CustomersTable = () => {
	return (
		<div className={styles.customers__table_wrapper}>
			<table className={styles.customers__table}>
				<thead>
					<tr>
						<th>Customer Name</th>
						<th>Company</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Country</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Jane Cooper</td>
						<td>Microsoft</td>
						<td>(225) 555-0118</td>
						<td>jane@microsoft.com</td>
						<td>United States</td>
						<td>
							<div className={styles.active}>Active</div>
						</td>
					</tr>
					{customers.map((customer, index) => (
						<tr key={index}>
							<td>{customer.name}</td>
							<td>{customer.company}</td>
							<td>{customer.number}</td>
							<td>{customer.email}</td>
							<td>{customer.country}</td>
							<td>
								<div
									className={
										customer.status === 'Active'
											? styles.active
											: styles.inactive
									}
								>
									{customer.status}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CustomersTable
