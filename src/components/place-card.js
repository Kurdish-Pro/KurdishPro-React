import React from 'react'

import PropTypes from 'prop-types'

import styles from './place-card.module.css'

const PlaceCard = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.city}</span>
        <span className={styles['text1']}>{props.description}</span>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  button1: 'Button',
  rootClassName: '',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  link_button: '',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  link_button: PropTypes.string,
}

export default PlaceCard
