import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { MdMenu } from 'react-icons/md'
import Logo from '../../aside/logo/Logo'
import Navbar from '../../aside/navbar/Navbar'
import UserProfile from '../../aside/userProfile/UserProfile'
import styles from './Header.module.css'
const Header = () => {
	const [isResponsiveAsideOpen, setIsResponsiveAsideOpen] = useState(false)
	return (
		<header className={styles.header}>
			<h2 className={styles.header__title}>Hello Evano 👋🏼,</h2>
			<button
				className={styles.header__hamburger}
				onClick={() => setIsResponsiveAsideOpen(!isResponsiveAsideOpen)}
			>
				<MdMenu />
			</button>
			<div
				className={styles.header__responsiveAside}
				style={{
					transform: isResponsiveAsideOpen
						? 'translateX(0)'
						: 'translateX(100%)',
				}}
			>
				<div className={styles.header__responsiveAside__main}>
					<button
						onClick={() => setIsResponsiveAsideOpen(!isResponsiveAsideOpen)}
					>
						<IoCloseSharp fill='#000' />
					</button>
					<Logo />
					<Navbar />
				</div>
				<UserProfile />
			</div>
		</header>
	)
}

export default Header
