import styles from "./Tasks.module.css"
import Card from "../components/Card"

export default function Targets() {
  return (
    <>
        <section className={styles.content}>
          <span className={styles.title}>Цели</span>
          <div className={styles.card_space}>
            <Card option={"targets"} money={21000} target_price={21000}/>
          </div>
        </section>
    </>
  )
}
