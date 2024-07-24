import { FaRegUser } from 'react-icons/fa'
import { IoCubeOutline, IoKeyOutline, IoWalletOutline } from 'react-icons/io5'
import { MdOutlineKeyboardArrowRight, MdOutlineLiveHelp } from 'react-icons/md'
import { RiDiscountPercentLine } from 'react-icons/ri'
import styles from './Navbar.module.css'
const navLinks = [
	{
		icon: <IoKeyOutline />,
		title: 'Dashboard',
	},
	{
		icon: <IoCubeOutline />,
		title: 'Product',
	},
	{
		icon: <FaRegUser />,
		title: 'Customers',
	},
	{
		icon: <IoWalletOutline />,
		title: 'Income',
	},
	{
		icon: <RiDiscountPercentLine />,
		title: 'Promote',
	},
	{
		icon: <MdOutlineLiveHelp />,
		title: 'Help',
	},
]
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__items}>
				{navLinks.map((navLink, index) => (
					<li key={index} className={styles.navbar__item}>
						<a
							href='#'
							className={`${styles.navbar__link} ${
								index === 2 ? styles.active : ''
							}`}
						>
							<div className={styles.navbar__content}>
								{navLink.icon}
								<span className={styles.navbar__title}>{navLink.title}</span>
							</div>
							<MdOutlineKeyboardArrowRight />
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
