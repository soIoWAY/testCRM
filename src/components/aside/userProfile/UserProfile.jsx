import styles from './UserProfile.module.css'
const UserProfile = () => {
	return (
		<div className={styles.aside__userProfile}>
			<img
				src='/user.png'
				alt='user'
				className={styles.aside__userProfile_img}
			/>
			<div className={styles.aside__userProfile_about}>
				<h4>Evano</h4>
				<p>Project Manager</p>
			</div>
		</div>
	)
}

export default UserProfile
