import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="image"
        />
        <div className="container">
          <div className="container1">
            <span className="text">SOFT PRO</span>
            <span>Copyright © 2021 By Rama</span>
          </div>
          <div className="container2">
            <div className="container3">
              <span className="text2 large">Pages</span>
              <span className="text3 large">Home</span>
              <span className="text4 large">About Me</span>
              <span className="text5 large">Coming soon</span>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          .container {
            color: var(--dl-color-gray-white);
            width: 100%;
            height: 227px;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            margin-top: 19px;
            justify-content: space-between;
          }
          .container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .container2 {
            width: 264px;
            display: flex;
            justify-content: space-between;
          }
          .container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .text2 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text3 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text3:hover {
            color: var(--dl-color-gray-white);
          }
          .text4 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text4:hover {
            color: var(--dl-color-gray-white);
          }
          .text5 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text5:hover {
            color: var(--dl-color-gray-white);
          }
          @media (max-width: 991px) {
            .container {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .container {
              flex-direction: column;
            }
            .container1 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .container3 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
