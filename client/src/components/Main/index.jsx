import styles from "./styles.module.css";
import ProductList from "../Product/ProductList";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Gudang.Co</h1>
				<button className={styles.red_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<ProductList/>
		</div>
	);
};

export default Main;