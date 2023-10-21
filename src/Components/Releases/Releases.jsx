import React from 'react'
import styles from './Releases.module.css'
import { Car } from './dataLatestLaunches'

const Releases = () => {
  return (
    <div className={styles.Releases}>
      <div>
        <h1>Lançamentos mais atuais</h1>
      </div>
      <div className={styles.ReleasesCurrent}>
        {Car.map((Cars) => (
          <img width={300} src={Cars.src} />
        ))}
      </div>
    </div>
  )
}

export default Releases