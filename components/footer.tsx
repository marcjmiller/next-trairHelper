import React from 'react';

const Footer = () => {
  return (
    <div className={'flex flex-row justify-center p-2'}>
      <span>
        TrairHelper - Built by{' '}
        <a href='http://github.com/marcjmiller' target='_blank'>
          {' '}
          Marc
        </a>
      </span>
    </div>
  );
};

export default Footer;
