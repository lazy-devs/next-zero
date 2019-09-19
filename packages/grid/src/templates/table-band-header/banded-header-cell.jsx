import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export const BandedHeaderCell = ({ component: HeaderCellComponent, className, beforeBorder, ...restProps }) => (
  <HeaderCellComponent
    className={classNames(
      {
        'dx-g-nz-banded-header-cell border-right': true,
        'border-left': beforeBorder,
      },
      className
    )}
    {...restProps}
  />
);

BandedHeaderCell.propTypes = {
  component: PropTypes.func.isRequired,
  className: PropTypes.string,
  beforeBorder: PropTypes.bool,
};

BandedHeaderCell.defaultProps = {
  className: undefined,
  beforeBorder: false,
};
