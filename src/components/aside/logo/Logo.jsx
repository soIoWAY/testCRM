import styles from './Logo.module.css'
const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src='/logo.svg' alt='logo' className={styles.logo__image} />
			<h1 className={styles.logo__title}>
				Dashboard<span className={styles.logo__version}>v.01</span>
			</h1>
		</div>
	)
}

export default Logo
