import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div
      className={`${styles.footer} d-flex justify-content-center align-items-center flex-row`}
    >
      <p>
        Copyright <i className="fa-solid fa-copyright"></i> 2023 Cooking | by
        Cédric Mokoko, Inc.
      </p>
    </div>
  );
}
