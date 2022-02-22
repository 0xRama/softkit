import React from 'react'

import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <>
      <div className="container">
        <h5 className="text headingThree">{props.title}</h5>
        <span>{props.description}</span>
      </div>
      <style jsx>
        {`
          .container {
            flex: 0 0 auto;
            display: flex;
            padding: 1rem;
            max-width: 500px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text {
            color: var(--dl-color-secondary-600);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

ListItem.defaultProps = {
  description:
    'As the name says its a YouTube Watch2Gether Site. Where you can watch youtube videos with friends in real time sync',
  title: 'YouTube Watch2Gether',
}

ListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default ListItem
