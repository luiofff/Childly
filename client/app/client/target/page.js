import styles from "./page.module.css"
import Card from "./components/Card"


export default function Target() {
    return (
      <>
        <section className={styles.content}>
          <span className={styles.title}>Активные</span>
          <div className={styles.card_space}>
            <Card />
          </div>
        </section>
      </>
    )
  }
  