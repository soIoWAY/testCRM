import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import styles from './CustomersFooter.module.css'
const CustomersFooter = () => {
	return (
		<div className={styles.customersFooter}>
			<p className={styles.customersFooter__text}>
				Showing data 1 to 8 of 256K entries
			</p>
			<div className={styles.customersFooter__pages}>
				<a href='#' className={styles.customersFooter__pages_nextPage}>
					<MdKeyboardArrowLeft />
				</a>
				<a
					href='#'
					className={`${styles.customersFooter__pages_page} ${styles.active}`}
				>
					1
				</a>
				<a href='#' className={styles.customersFooter__pages_page}>
					2
				</a>
				<a href='#' className={styles.customersFooter__pages_page}>
					3
				</a>
				<a href='#' className={styles.customersFooter__pages_page}>
					4
				</a>
				<p>...</p>
				<a href='#' className={styles.customersFooter__pages_page}>
					40
				</a>
				<a href='#' className={styles.customersFooter__pages_nextPage}>
					<MdKeyboardArrowRight />
				</a>
			</div>
		</div>
	)
}

export default CustomersFooter
