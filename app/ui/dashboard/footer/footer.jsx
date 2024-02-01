import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>Vet Admin</div>
      <div className={styles.text}>© All rights reserved.</div>
    </footer>
  );
};

export default Footer;