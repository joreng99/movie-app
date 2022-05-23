import styles from "./Navbar.module.css";

function Navbar() {
  return (      
    <div class={styles.navbar}>
        <nav>
        <div class={styles.logo}>
          <span>M</span>
        </div>
        <div class={styles.title}>
          <span>Movierang</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;