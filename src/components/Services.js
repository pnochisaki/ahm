import React from 'react'
import PropTypes from 'prop-types'

const Services = ({ data }) => (
  <div className="columns">
    {data.map(service => (
      <div key={service.service}>
        <section  className="section">
            {service.service}
        </section>
      </div>
    ))}
  </div>
)

Services.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      services: PropTypes.object,
    })
  ),
}

export default Services
