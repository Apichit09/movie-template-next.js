import Link from 'next/link';
import styles from './error.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <header className={styles.topHeader}></header>

      <div className={styles.starsContainer}>
        <div className={styles.starsec}></div>
        <div className={styles.starthird}></div>
        <div className={styles.starfourth}></div>
        <div className={styles.starfifth}></div>
      </div>

      <div className={styles.lampWrap}>
        <div className={styles.lamp}>
          <div className={styles.cable}></div>
          <div className={styles.cover}></div>
          <div className={styles.inCover}>
            <div className={styles.bulb}></div>
          </div>
          <div className={styles.light}></div>
        </div>
      </div>

      <section className={styles.error}>
        <div className={styles.errorContent}>
          <div className={styles.errorMessage}>
            <h1 className={styles.messageTitle}>ไม่พบหน้าที่คุณต้องการ</h1>
            <p className={styles.messageText}>
              ขออภัย หน้าที่คุณกำลังมองหาไม่มีอยู่ในระบบ ลิงก์ที่คุณคลิกอาจจะเสียหรือไม่มีอยู่แล้ว กรุณาลองใหม่อีกครั้งหรือกลับไปยังหน้าหลัก
            </p>
          </div>
          <div className={styles.errorNav}>
            <Link href="/" className={styles.eNavLink}>
              หน้าหลัก
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}