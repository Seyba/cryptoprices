import styles from './Navbar.module.css'
const Navbar = () => {
    return(
        <nav>
            <ul className={styles.container}>
                <li>Home</li>
                <li>Dashboard</li>
            </ul>
        </nav>
    )
}
export default Navbar