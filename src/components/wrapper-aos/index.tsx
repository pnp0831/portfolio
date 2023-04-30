import React, { ReactNode, memo } from 'react';
import PropTypes from 'prop-types';

interface WrapperAosProps {
  children: ReactNode;
  dataAos?: string;
}

const WrapperAos = memo(({ children, dataAos }) => {
  return (
    <div data-aos={dataAos || 'zoom-in'} className="aos-init">
      {children}
    </div>
  );
});

WrapperAos.propTypes = {};

export default WrapperAos;
