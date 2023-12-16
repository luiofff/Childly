import styles from "../tasks/Tasks.module.css"
import Card from "../components/Card"

export default function Targets({ option }) {
  return (
    <>
        <section className={styles.content}>
          <span className={styles.title}>Цели</span>
          <div className={styles.card_space}>
            <Card option={option} money={11000} target_price={21000}/>
          </div>
        </section>
    </>
  )
}
