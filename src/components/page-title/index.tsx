import React, { memo } from 'react';
import PropTypes from 'prop-types';

const PageTitle = memo(({ title, children }) => {
  return (
    <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
      <h2 className="after-effect after:left-52">{title}</h2>
      {children}
    </div>
  );
});

PageTitle.propTypes = {};

export default PageTitle;
