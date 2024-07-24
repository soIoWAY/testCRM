import styles from './Aside.module.css'
import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'
import UserProfile from './userProfile/UserProfile'

const Aside = () => {
	return (
		<aside className={styles.aside}>
			<div className={styles.aside__main}>
				<Logo />
				<Navbar />
			</div>
			<UserProfile />
		</aside>
	)
}

export default Aside
