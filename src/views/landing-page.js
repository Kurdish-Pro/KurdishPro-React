import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import PlaceCard from '../components/place-card'
import projectStyles from '../style.module.css'
import styles from './landing-page.module.css'

const LandingPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Landing Page - Kurdish_Pro</title>
        <meta property="og:title" content="Landing Page - Kurdish_Pro" />
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
                Web Sites
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
          <div className={styles['container01']}>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <div className={styles['container04']}>
                  <div className={styles['container05']}>
                    <div className={styles['container06']}>
                      <div className={styles['container07']}>
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
                      <div className={styles['container08']}>
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
            </div>
          </div>
        </div>
      </div>
      <div id="main-section" className={styles['Main']}>
        <h1>Categories</h1>
        <h1>
          ........................................................................................................................
        </h1>
        <div className={styles['Cards-container']}>
          <Link to="/action" className={styles['navlink05']}>
            <PlaceCard
              city="Action"
              image="/playground_assets/best-split-screen-pc-games-1000h.jpg"
              Button="https://www.tiktok.com/@kurdi_tech?_d=secCgYIASAHKAESPgo8JA8Dp5kYhY4%2FY89go7l31tXCxJqyEX3gEFiQqEESoLULte5CXu6dtPPYIUdaQ2FWEHjLmv7CTId3FZsOGgA%3D&amp;language=en&amp;sec_uid=MS4wLjABAAAAoTqrQW-IYSykM-TcjO3SUsN5CorGc_Cwan_W89qzJjO7d1WMbmNEdXfaUULbhpS6&amp;sec_user_id=MS4wLjABAAAAcR011l5AU5MQ3cO5zCLjVN3uftlQPNCVbOIzcIdVY0MmfAut0S69MszCxHMVf40g&amp;share_app_id=1233&amp;share_author_id=6947988189718938626&amp;share_link_id=d2c1723e-092a-433f-8624-3ff1411a5ace&amp;timestamp=1633558453&amp;u_code=djmm2lfafki47i&amp;user_id=6990729066794386438&amp;utm_campaign=client_share&amp;utm_medium=android&amp;utm_source=copy&amp;source=h5_m&amp;_r=1"
              description=" "
              link_button="https://www.tiktok.com/@kurdi_tech?_d=secCgYIASAHKAESPgo8JA8Dp5kYhY4%2FY89go7l31tXCxJqyEX3gEFiQqEESoLULte5CXu6dtPPYIUdaQ2FWEHjLmv7CTId3FZsOGgA%3D&amp;language=en&amp;sec_uid=MS4wLjABAAAAoTqrQW-IYSykM-TcjO3SUsN5CorGc_Cwan_W89qzJjO7d1WMbmNEdXfaUULbhpS6&amp;sec_user_id=MS4wLjABAAAAcR011l5AU5MQ3cO5zCLjVN3uftlQPNCVbOIzcIdVY0MmfAut0S69MszCxHMVf40g&amp;share_app_id=1233&amp;share_author_id=6947988189718938626&amp;share_link_id=d2c1723e-092a-433f-8624-3ff1411a5ace&amp;timestamp=1633558453&amp;u_code=djmm2lfafki47i&amp;user_id=6990729066794386438&amp;utm_campaign=client_share&amp;utm_medium=android&amp;utm_source=copy&amp;source=h5_m&amp;_r=1"
              className={` ${styles['component1']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </Link>
          <Link to="/adventure" className={styles['navlink06']}>
            <PlaceCard
              city="Adventure"
              image="/playground_assets/profanboy_best-ps4-action-adventure-games-featured-image-768x432-1000h.jpg"
              description=" "
              className={` ${styles['component2']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </Link>
          <Link to="/openworld" className={styles['navlink07']}>
            <PlaceCard
              city="Open World"
              image="/playground_assets/openworld-1-870x524-1000h.jpg"
              description=" "
              className={` ${styles['component3']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </Link>
          <Link to="/horror" className={styles['navlink08']}>
            <PlaceCard
              city="Horror"
              image="/playground_assets/2141401-1000h.jpg"
              description=" "
              className={` ${styles['component4']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </Link>
          <Link to="/simulation" className={styles['navlink09']}>
            <PlaceCard
              city="Simulation"
              image="/playground_assets/03vugivjw5nmdwigj3fbxlu-3.1599082302.fit_lim.size_1600x900-1000h.jpg"
              description=" "
              className={` ${styles['component5']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
          </Link>
          <Link to="/racing" className={styles['navlink10']}>
            <PlaceCard
              city="Racing"
              image="/playground_assets/the-seven-best-sim-racing-games-list-goodwood-01042020-1000h.jpg"
              description=" "
              className={` ${styles['component6']} ${projectStyles['thqLink']} `}
            ></PlaceCard>
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
          <div className={styles['Links-container1']}>
            <div className={styles['container09']}>
              <span className={styles['text06']}>Tour packages</span>
              <span className={styles['text07']}>Personalized offers</span>
              <span className={styles['text08']}>Special deals</span>
              <span className={styles['Link1']}>
                Summer holiday
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className={styles['container10']}>
              <span className={styles['text09']}>
                <span className={styles['text10']}>About us</span>
              </span>
              <span className={styles['text11']}>FAQ</span>
              <span className={styles['text12']}>
                <span className={styles['text13']}>Terms and conditions</span>
              </span>
              <span className={styles['text14']}>
                <span className={styles['text15']}>Contact</span>
              </span>
            </div>
          </div>
          <div className={styles['Follow-container']}>
            <span className={styles['text16']}>
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
                href="https://vm.tiktok.com/ZSeL8ank7/"
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

export default LandingPage
