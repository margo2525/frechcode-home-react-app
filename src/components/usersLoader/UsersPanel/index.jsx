import styles from '../UsersLoader/UsersLoader.module.sass'
import { GoTriangleLeft } from 'react-icons/go'
import { GoTriangleRight } from 'react-icons/go'
function UsersPanel (props) {
  const { increment, decrement, currentUsers, handleResultsChange } = props

  return (
    <>
      <button className={styles.btnCurrentPage} onClick={decrement}>
        <GoTriangleLeft />
      </button>
      <button className={styles.btnCurrentPage} onClick={increment}>
        <GoTriangleRight />
      </button>

      <label className={styles.labelCurrentUsers}>
        <span>Number of users:</span>
        <input
          className={styles.inputCurrentUsers}
          type='number'
          value={currentUsers}
          name='currentUsers'
          onChange={handleResultsChange}
          autoFocus
        ></input>
      </label>
    </>
  )
}

export default UsersPanel
