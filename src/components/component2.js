import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './component2.module.css'

const Component2 = (props) => {
  return (
    <div className={styles['container']}>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        {props.button1}
      </button>
    </div>
  )
}

Component2.defaultProps = {
  button1: 'Open',
}

Component2.propTypes = {
  button1: PropTypes.string,
}

export default Component2
