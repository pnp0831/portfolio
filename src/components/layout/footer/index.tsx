import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Footer = memo((props) => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark1111:bg-black">
      <div className="container">
        <p className="text-center py-6 text-gray-lite dark1111:text-color-910 ">
          © 2023 All Rights Reserved by Pam
        </p>
      </div>
    </footer>
  );
});

Footer.propTypes = {};

export default Footer;
