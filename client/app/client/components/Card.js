"use client"

import styles from "./Card.module.css"
import classNames from "classnames"

import React from "react"

function formatNumber(number) {
    let strNumber = String(number);
  

    if (strNumber.length <= 3) {
      return strNumber; 
    }
  
    let result = '';
    let count = 0; 
  

    for (let i = strNumber.length - 1; i >= 0; i--) {
      result = strNumber[i] + result; 
      count++; 
  
     
      if (count === 3 && i !== 0) {
        result = ' ' + result; 
        count = 0; 
      }
    }
  
    return result; 
  }
  

export default function Card({ option, money, target_price }) {

    const [reach, setReach] = React.useState(false);
    const [funds, setFunds] = React.useState("");
    const [need_funds, setNeed_funds] = React.useState("");

    React.useEffect(() => {
        if (money == target_price) setReach(true);
        setFunds(formatNumber(money));
        setNeed_funds(formatNumber(target_price));
    }, [])


    return (
        <>
            <div className={styles.full_screen}>
                {
                        (option == "tasks") ? (
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
                        ) : (
                            <div className={styles.card__targets}>
                                <div className={styles.ui_block}>
                                    <span className={classNames(styles.card_title, styles.text_block)}>Помыть полы</span>
                                </div>
        
                                <div className={styles.ui_block}>
                                    <span className={classNames(styles.card_pretitle, styles.text_block)}>Помыть полы</span>
                                </div>
        
                                <div className={styles.ui_block}>
                                    <div className={styles.down_block__targets}>
                                        {(!reach) ? (<span className={classNames(styles.number_block, styles.price__red)}>{funds}</span>) : (<span className={classNames(styles.number_block, styles.price)}>{funds}</span>)}
                                        <span className={styles.slash_block}>/</span>
                                        <span className={classNames(styles.price, styles.number_block)}>{need_funds}</span>
                                    </div> 
                                </div>
                            </div>   
                        )
                            
                }
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
                            {
                                (option == "tasks") ?
                                (<div className={styles.down_block}>
                                    <span className={classNames(styles.price, styles.text_block)}>50.00</span>
                                    <button className={styles.button}>
                                        Выполнено
                                    </button>
                                </div>) :
                                (<div className={styles.down_block__targets}>
                                    {(!reach) ? (<span className={classNames(styles.number_block, styles.price__red)}>{funds}</span>) : (<span className={classNames(styles.number_block, styles.price)}>{funds}</span>)}
                                    <span className={styles.slash_block}>/</span>
                                    <span className={classNames(styles.price, styles.number_block)}>{need_funds}</span>
                                </div>)
                            }
                            
                        </div>
                </div>
            </div>
        </>
    )
}
