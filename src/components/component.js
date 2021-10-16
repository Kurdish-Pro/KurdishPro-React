import React from 'react'

import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
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

AppComponent.defaultProps = {
  image_alt: 'image',
  image_src: '98e31186-af58-4515-b812-e09e75826f20',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default AppComponent
