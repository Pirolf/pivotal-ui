var React = require('react');
import classnames from 'classnames';

/**
 * @component ListItem
 * @description An element of a list component
 *
 */
var ListItem = React.createClass({
  render: function() {
    return <li {...this.props}/>;
  }
});

function defList(tagName, spacingType, classNames, childClassNames) {
  return React.createClass({
    propTypes: {
      spacing: React.PropTypes.oneOf(['n', 's', 'm', 'l', 'xl']),
      className: React.PropTypes.string
    },
    render() {
      var {className, spacing, children, ...others} = this.props;
      var classes = classnames(classNames(this.props), className, spacing && `${spacingType}${spacing}`);
      if (childClassNames) {
        children = React.Children.map(children, child => React.cloneElement(child, {className: childClassNames}));
      }
      return (
        tagName === 'ul' ? <ul className={classes} {...others}>{children}</ul> :
        tagName === 'ol' ? <ol className={classes} {...others}>{children}</ol> :
        null
      );
    }
  });
}

/**
 * @component UnorderedList
 * @description A bulleted list
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var UnorderedList = require('pui-react-lists').UnorderedList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <UnorderedList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </UnorderedList>
 *     );
 *   }
 * });
 * ```
 *
 */
var UnorderedList = defList(
  'ul', 'lv',
  ({unstyled, checked}) => classnames({
    'list-unordered': !unstyled && !checked,
    'list-unstyled': unstyled,
    'list-checked': checked
  })
);

/**
 * @component OrderedList
 * @description A numbered list
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var OrderedList = require('pui-react-lists').OrderedList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <OrderedList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </OrderedList>
 *     );
 *   }
 * });
 * ```
 *
 */
var OrderedList = defList('ol', 'lv', ({unstyled}) => classnames({'list-unstyled': unstyled}));

/**
 * @component InlineList
 * @description A list where the items are stacked horizontally
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var InlineList = require('pui-react-lists').InlineList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <InlineList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </InlineList>
 *     );
 *   }
 * });
 * ```
 *
 */
var InlineList = defList('ul', 'lh', ({divider}) => classnames('list-inline', {'list-inline-divider': divider}));

/**
 * @component GroupList
 * @description A list where the items are separated by lines
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var GroupList = require('pui-react-lists').GroupList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <GroupList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </GroupList>
 *     );
 *   }
 * });
 * ```
 *
 */
var GroupList = defList('ul', 'lv', () => classnames('list-group'), 'list-group-item');

/**
 * @component GroupListInverse
 * @description A list where the items are separated by lines, for use on a dark background
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var GroupListInverse = require('pui-react-lists').GroupListInverse;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <GroupListInverse>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </GroupListInverse>
 *     );
 *   }
 * });
 * ```
 *
 */
var GroupListInverse = defList('ul', 'lv', () => classnames('list-group-inverse'), 'list-group-item');

/**
 * @component StepList
 * @description A numbered list of steps in a workflow
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var StepList = require('pui-react-lists').StepList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <StepList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </StepList>
 *     );
 *   }
 * });
 * ```
 *
 */
var StepList = defList('ol', 'lh', () => classnames('list-steps'));

/**
 * @component BreadcrumbList
 * @description A list of breadcrumbs for hierarchical navigation
 *
 * @property spacing {String} One of `n`, `s`, `m`, `l`, or `xl`: sets the amount of space between list items
 *
 * @example ```js
 * var BreadcrumbList = require('pui-react-lists').BreadcrumbList;
 * var ListItem = require('pui-react-lists').ListItem;
 * var MyComponent = React.createClass({
 *   render() {
 *     return (
 *       <BreadcrumbList>
 *         <ListItem>Item 1</ListItem>
 *         <ListItem>Item 2</ListItem>
 *         <ListItem>Item 3</ListItem>
 *       </BreadcrumbList>
 *     );
 *   }
 * });
 * ```
 *
 */
var BreadcrumbList = defList('ul', 'lh', () => classnames('list-breadcrumb'));

module.exports = {
  ListItem,
  UnorderedList,
  OrderedList,
  InlineList,
  GroupList,
  GroupListInverse,
  StepList,
  BreadcrumbList
};
