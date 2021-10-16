import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import projectStyles from '../style.module.css'
import styles from './horror.module.css'

const Horror = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>horror - Kurdish_Pro</title>
        <meta property="og:title" content="horror - Kurdish_Pro" />
      </Helmet>
      <div className={styles['Top-container']}>
        <nav className={styles['Navbar']}>
          <h1>Kurdish_Pro</h1>
          <div className={styles['Right-side']}>
            <div className={styles['Links-container']}>
              <Link
                to="/"
                className={` ${styles['navlink']} ${projectStyles['thqLink']} `}
              >
                Home
              </Link>
              <Link
                to="/landing-page"
                className={` ${styles['navlink01']} ${projectStyles['thqLink']} `}
              >
                Gaming
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink02']} ${projectStyles['thqLink']} `}
              >
                Mobile
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink03']} ${projectStyles['thqLink']} `}
              >
                Pc Programs
              </Link>
              <Link
                to="/"
                className={` ${styles['navlink04']} ${projectStyles['thqLink']} `}
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
          <svg viewBox="0 0 1024 1024" className={styles['Burger-menu']}>
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </nav>
        <div className={styles['Hero']}>
          <div className={styles['Content-container']}></div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <div className={styles['container3']}>
                <h1
                  className={` ${projectStyles['heading']} ${styles['text01']} `}
                >
                  Kurdish_Pro
                </h1>
                <h2
                  className={` ${projectStyles['subheading']} ${styles['Subheading']} `}
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
                <span className={styles['text02']}>
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
        <h1>
          ........................................................................................................................
        </h1>
        <div className={styles['Cards-container']}>
          <Link
            to="/alanwake"
            className={` ${styles['navlink05']} ${projectStyles['thqLink']} `}
          >
            <span>.. Alan Wake Remastered Free Download</span>
          </Link>
          <Link
            to="/little-nightmares-i-i"
            className={` ${styles['navlink06']} ${projectStyles['thqLink']} `}
          >
            .. Little Nightmares II Free Download
          </Link>
          <Link
            to="/outlast2"
            className={` ${styles['navlink07']} ${projectStyles['thqLink']} `}
          >
            .. Outlast 2 Free Download
          </Link>
          <Link
            to="/resident-evill-village"
            className={` ${styles['navlink08']} ${projectStyles['thqLink']} `}
          >
            .. Resident Evil Village Free Download
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </Link>
          <Link
            to="/visage"
            className={` ${styles['navlink09']} ${projectStyles['thqLink']} `}
          >
            .. Visage Free Download
          </Link>
          <span>
            <span className={styles['text08']}>Link</span>
          </span>
          <span>
            <span className={styles['text10']}>Link</span>
          </span>
          <span>
            <span className={styles['text12']}>Link</span>
          </span>
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
          <div className={styles['Links-container1']}>
            <div className={styles['container5']}>
              <span className={styles['text13']}>Tour packages</span>
              <span className={styles['text14']}>Personalized offers</span>
              <span className={styles['text15']}>Special deals</span>
              <span className={styles['Link1']}>
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className={styles['container6']}>
              <span className={styles['text16']}>
                <span className={styles['text17']}>About us</span>
              </span>
              <span className={styles['text18']}>FAQ</span>
              <span className={styles['text19']}>
                <span className={styles['text20']}>Terms and conditions</span>
              </span>
              <span className={styles['text21']}>
                <span className={styles['text22']}>Contact</span>
              </span>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text23']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className={styles['Icons-container']}>
              <a
                href="https://www.instagram.com/kurdish____pro/"
                target="_blank"
                rel="noreferrer noopener"
                className={styles['link2']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className={` ${styles['icon3']} ${projectStyles['thqLink']} `}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@kurdi_tech?_d=secCgYIASAHKAESPgo8JA8Dp5kYhY4%2FY89go7l31tXCxJqyEX3gEFiQqEESoLULte5CXu6dtPPYIUdaQ2FWEHjLmv7CTId3FZsOGgA%3D&amp;language=en&amp;sec_uid=MS4wLjABAAAAoTqrQW-IYSykM-TcjO3SUsN5CorGc_Cwan_W89qzJjO7d1WMbmNEdXfaUULbhpS6&amp;sec_user_id=MS4wLjABAAAAcR011l5AU5MQ3cO5zCLjVN3uftlQPNCVbOIzcIdVY0MmfAut0S69MszCxHMVf40g&amp;share_app_id=1233&amp;share_author_id=6947988189718938626&amp;share_link_id=d2c1723e-092a-433f-8624-3ff1411a5ace&amp;timestamp=1633558453&amp;u_code=djmm2lfafki47i&amp;user_id=6990729066794386438&amp;utm_campaign=client_share&amp;utm_medium=android&amp;utm_source=copy&amp;source=h5_m&amp;_r=1"
                id="tik tok"
                target="_blank"
                rel="noreferrer noopener"
                className={` ${styles['link3']} ${projectStyles['thqLink']} `}
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

export default Horror