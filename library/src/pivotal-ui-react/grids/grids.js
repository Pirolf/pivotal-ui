var React = require('react');
var types = React.PropTypes;
var BootstrapRow = require('react-bootstrap/lib/Row');
import {mergeProps} from 'pui-react-helpers';

/**
 * @component Row
 * @description Denotes a container of grid columns for the Pivotal UI 24-column mobile-first grid system
 *
 * @property gutter {String} Sets the spacing between columns (either `sm`, `md`, or `lg`).
 *
 * @example ```js
 * var Row = require('pui-react-grids').Row;
 * var Col = require('pui-react-grids').Col;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <Row>
 *         <Col xs={24} md={16}></Col>
 *         <Col xs={12} md={8}></Col>
 *       </Row>
 *       <Row>
 *         <Col xs={12} md={8}></Col>
 *         <Col xs={12} md={8}></Col>
 *         <Col xs={12} md={8}></Col>
 *       </Row>
 *       <Row>
 *         <Col xs={12}></Col>
 *         <Col xs={12}></Col>
 *       </Row>
 *     );
 *   }
 * });
 * ```
 *
 */
var Row = React.createClass({
  propTypes: {
    gutter: types.oneOf(['sm', 'md', 'lg'])
  },

  render() {
    const {gutter, children, ...other} = this.props;
    const gutterClass = {
      'row-gutter-md': gutter === 'md',
      'row-gutter-sm': gutter === 'sm'
    };
    const props = mergeProps(other, {className: gutterClass});
    return (<BootstrapRow {...props}>{children}</BootstrapRow>);
  }
});

/**
 * @component Col
 * @description Denotes a column within a row of the Pivotal UI grid system
 *
 * @property xs {Number} The width of the column (1-24) in extra small devices (<= 768px)
 * @property sm {Number} The width of the column (1-24) in small devices (> 768px)
 * @property md {Number} The width of the column (1-24) in medium devices (> 992px)
 * @property lg {Number} The width of the column (1-24) in large devices (> 992px)
 *
 * @property xsOffset {Number} The number of column-widths to use as left margin in extra small devices
 * @property smOffset {Number} The number of column-widths to use as left margin in small devices
 * @property mdOffset {Number} The number of column-widths to use as left margin in medium devices
 * @property lgOffset {Number} The number of column-widths to use as left margin in large devices
 *
 * @property xsPush {Number} Move this column to the right by the given number of column-widths in extra small devices
 * @property smPush {Number} Move this column to the right by the given number of column-widths in small devices
 * @property mdPush {Number} Move this column to the right by the given number of column-widths in medium devices
 * @property lgPush {Number} Move this column to the right by the given number of column-widths in large devices
 *
 * @property xsPull {Number} Move this column to the left by the given number of column-widths in extra small devices
 * @property smPull {Number} Move this column to the left by the given number of column-widths in small devices
 * @property mdPull {Number} Move this column to the left by the given number of column-widths in medium devices
 * @property lgPull {Number} Move this column to the left by the given number of column-widths in large devices
 *
 */
var Col = require('react-bootstrap/lib/Col');

module.exports = {Row, Col};
