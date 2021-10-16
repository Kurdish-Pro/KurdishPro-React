import React from 'react'

import PropTypes from 'prop-types'

import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

Component1.defaultProps = {
  image_alt: 'image',
  image_src: '57190a41-7870-484f-84e8-49c7253f6ad3',
}

Component1.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Component1
