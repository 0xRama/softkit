import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import OutlineGrayButton from '../components/outline-gray-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Soft UI Pro</title>
          <meta property="og:title" content="Soft UI Pro" />
        </Head>
        <Header rootClassName="rootClassName"></Header>
        <div className="hero">
          <div className="container01">
            <div className="card">
              <h1 className="text headingOne">RAMA</h1>
              <span className="text01 lead">
                <span>Hey There, I am R</span>
                <span>ama. scroll below to know about me</span>
              </span>
              <div className="container02">
                <div className="container03"></div>
                <OutlineGrayButton button="read more"></OutlineGrayButton>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/leyre-71shxwblp5w-unsplash-1500h.jpg"
          className="image"
        />
        <section className="container04">
          <div className="container05">
            <h1 className="text04 headingOne">
              <span className="text05">From nothing to something</span>
            </h1>
          </div>
          <img
            alt="image"
            src="/playground_assets/etmycteu0aaxodd-600h.jpg"
            className="image1"
          />
          <span>About Me</span>
          <span className="text07">
            Hi I am Rama also known as Rex I am a 18 year old developer well
            knowledgeable in Antivirus evasion ,reverse engineering, Web bug
            bounty and Web Development My most advanced learning include Python,
            Kotlin, Java, C and Perl alongside other hypothetical premise of
            Networking, operating system, system architecture and digital
            forensics
          </span>
        </section>
        <section className="testimonials">
          <img
            alt="image"
            src="/playground_assets/waves-white.svg"
            className="image2"
          />
        </section>
        <section className="contaier">
          <div className="container06">
            <div className="container07">
              <svg viewBox="0 0 1024 1024" className="icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="text08 headingTwo"></h2>
            <h3 className="text09 headingTwo">
              <span>Upcoming Projects</span>
              <br></br>
              <span></span>
            </h3>
            <span className="text12">
              <span className="text13"></span>
              My upcoming Projects
            </span>
          </div>
          <div className="container08">
            <div className="container09">
              <ListItem></ListItem>
              <ListItem
                title="Social Network"
                description="A Social Network for sharing photos. Similar to Pinterest. Users can upload, Like, make a collection of images on the site"
              ></ListItem>
              <ListItem
                title="Messaging"
                description="An End 2 End Encrypted Messaging Platform. Every Message is end2end encrypted."
              ></ListItem>
              <ListItem
                title="Web Site Maker"
                description="Making a website as simple as designing the website and then clicking a button to turn your design into proper functioning HTML code."
              ></ListItem>
            </div>
          </div>
          <div className="divider">
            <form className="form"></form>
          </div>
        </section>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            display: flex;
            max-width: 1320px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .container01 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1320px;
            min-height: 85vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .text {
            text-align: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text01 {
            color: var(--dl-color-secondary-600);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-tripleunit);
          }
          .container02 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .container03 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 50%;
            bottom: 0px;
            height: 80vh;
            position: absolute;
            object-fit: cover;
            object-position: right;
            border-bottom-left-radius: 10rem;
          }
          .container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container05 {
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            flex-direction: column;
          }
          .text04 {
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text05 {
            color: rgb(203, 12, 159);
            white-space: normal;
            text-decoration: none;
          }
          .image1 {
            width: 425px;
            height: 590px;
            object-fit: cover;
          }
          .text07 {
            width: 100%;
            height: 100%;
            text-align: left;
          }
          .testimonials {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .image2 {
            top: auto;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: auto;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .contaier {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .container06 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container07 {
            flex: 0 0 auto;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius75);
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
          }
          .icon {
            fill: var(--dl-color-gray-800);
            width: 24px;
            height: 24px;
          }
          .text08 {
            margin-top: var(--dl-space-space-unitandahalfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .text09 {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text13 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
            background-color: rgb(255, 255, 255);
          }
          .container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container09 {
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .divider {
            flex: 0 0 auto;
            width: 90%;
            height: 1px;
            display: flex;
            opacity: 0.25;
            margin-top: 4rem;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius75);
            margin-bottom: 4rem;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .form {
            width: 200px;
            height: 62px;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .container01 {
              max-width: 960px;
            }
            .card {
              width: 100%;
            }
            .container04 {
              max-width: 960px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container05 {
              max-width: 80%;
            }
            .contaier {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .container09 {
              width: 45%;
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .card {
              align-items: center;
            }
            .text01 {
              text-align: center;
              margin-right: 0px;
              padding-right: 0px;
            }
            .image {
              display: none;
            }
            .container04 {
              max-width: 720px;
            }
            .container06 {
              width: 80%;
            }
            .text12 {
              text-align: center;
            }
            .container08 {
              flex-direction: column;
            }
            .container09 {
              width: 80%;
              margin-top: var(--dl-space-space-fourunits);
              align-items: center;
              margin-left: 0px;
            }
            .divider {
              margin-top: var(--dl-space-space-doubleunit);
              margin-bottom: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 479px) {
            .card {
              padding: var(--dl-space-space-unit);
            }
            .container02 {
              align-items: center;
              flex-direction: column;
            }
            .container03 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
