import styles from "./Card.module.css"
import classNames from "classnames"

export default function Card() {
  return (
    <>
        <div className={styles.full_screen}>
            <div className={styles.card}>
                    <div className={styles.ui_block}>
                        <span className={classNames(styles.card_title, styles.text_block)}>Помыть полы</span>
                        <span className={classNames(styles.card_pretitle, styles.text_block)}>Помыть полы</span>
                    </div>

                    <div className={styles.ui_block}>
                        <span className={classNames(styles.price, styles.text_block)}>50.00</span>
                        <span className={classNames(styles.customer, styles.text_block)}>Мама</span>
                        <button className={styles.button}>
                            Выполнено
                        </button>
                    </div>
            </div>
        </div>

        <div className={styles.mobile}>
            <div className={styles.card}>
                    <div className={styles.ui_block}>
                        <span className={classNames(styles.card_title, styles.text_block)}>Помыть полы</span>
                    </div>

                    <div className={styles.ui_block}>
                        <span className={classNames(styles.card_pretitle, styles.text_block)}>Помыть полы</span>
                    </div>

                    <div className={styles.ui_block}>
                        <div className={styles.down_block}>
                            <span className={classNames(styles.price, styles.text_block)}>50.00</span>
                            <button className={styles.button}>
                                Выполнено
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}
