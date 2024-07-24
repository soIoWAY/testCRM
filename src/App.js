import styles from './App.module.css'
import Aside from './components/aside/Aside'
import Main from './components/main/Main'

function App() {
	return (
		<div className={styles.container}>
			<Aside />
			<Main />
		</div>
	)
}

export default App
