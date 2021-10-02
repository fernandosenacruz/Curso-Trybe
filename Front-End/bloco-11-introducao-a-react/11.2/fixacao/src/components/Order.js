import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {
  render() {
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

Order.proptype = {
  order: PropTypes.arrayof(PropTypes.shape({
    user: PropTypes.string,
    product: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
}

Order.defaultProps = {
  order: []
}

export default Order;