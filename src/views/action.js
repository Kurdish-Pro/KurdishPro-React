import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './action.module.css'

const Action = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Action - Kurdish_Pro</title>
        <meta property="og:title" content="Action - Kurdish_Pro" />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <Link to="/" className={styles['navlink']}>
            <h1 className={` ${styles['Logo']} ${projectStyles['thqLink']} `}>
              Kurdish_Pro
            </h1>
          </Link>
          <div className={styles['Right-side']}>
            <div className={styles['Links-container']}>
              <Link
                to="/"
                className={` ${styles['navlink01']} ${projectStyles['thqLink']} `}
              >
                Home
              </Link>
              <Link
                to="/landing-page"
                className={` ${styles['navlink02']} ${projectStyles['thqLink']} `}
              >
                Gaming
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink03']} ${projectStyles['thqLink']} `}
              >
                Mobile
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink04']} ${projectStyles['thqLink']} `}
              >
                Pc Programs
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink05']} ${projectStyles['thqLink']} `}
              >
                Web sites
              </Link>
              <span className={styles['text']}>.....</span>
            </div>
            <a href="#main-section" className={styles['link']}>
              <SolidButton
                button="Main Section"
                className={projectStyles['thqLink']}
              ></SolidButton>
            </a>
          </div>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}></div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <div className={styles['container3']}>
                <h1
                  className={` ${styles['text1']} ${projectStyles['heading']} `}
                >
                  Kurdish_Pro
                </h1>
                <h2
                  className={` ${styles['Subheading']} ${projectStyles['subheading']} `}
                >
                  Instagram: Kurdish_Pro
                </h2>
              </div>
              <div className={styles['container4']}>
                <h2
                  className={` ${projectStyles['subheading']} ${styles['Subheading1']} `}
                >
                  TikTok: Kurdish_Pro
                </h2>
                <span className={styles['text2']}>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1>Games</h1>
        <div className={styles['Cards-container']}>
          <Link
            to="/battlefioeldv"
            className={` ${styles['navlink06']} ${projectStyles['thqLink']} `}
          >
            {' '}
            .. Battlefield V
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </Link>
          <Link
            to="/battlefioeld1"
            className={` ${styles['navlink07']} ${projectStyles['thqLink']} `}
          >
            .. Battlefield 1
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </Link>
          <Link
            to="/callofdutyww2"
            className={` ${styles['navlink08']} ${projectStyles['thqLink']} `}
          >
            .. Call Of Duty: WWII
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </Link>
          <Link
            to="/metroexdus"
            className={` ${styles['navlink09']} ${projectStyles['thqLink']} `}
          >
            .. Metro Exodus
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </Link>
          <Link
            to="/worldwarzaftermath"
            className={` ${styles['navlink10']} ${projectStyles['thqLink']} `}
          >
            <span>.. World War Z: Aftermath</span>
          </Link>
        </div>
      </div>
      <div className={styles['Footer']}>
        <div className={styles['Menu']}>
          <h1 className={styles['Logo1']}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <div className={styles['Follow-container']}>
            <span className={styles['text6']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className={styles['Icons-container']}>
              <a
                href="https://www.instagram.com/kurdish____pro/?utm_medium=copy_link&amp;fbclid=IwAR1DhCpTMtMz4ivCd97w2ok8BHfs2u9iCbcG0bokqxCGy_NOm4bdcZL0mgU"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link1']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={` ${styles['icon']} ${projectStyles['thqLink']} `}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://vm.tiktok.com/ZSeL8ank7/"
                id="tik tok"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link2']} ${projectStyles['thqLink']} `}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Action
