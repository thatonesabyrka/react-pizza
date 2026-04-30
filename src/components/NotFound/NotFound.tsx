import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>Ничего не найдено 🙁</h1>
      <p>К сожалению данная страница отсудствует в нашем интернет-магазине</p>
    </div>
  )
}
