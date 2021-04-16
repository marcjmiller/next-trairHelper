import React from 'react';
import { render, screen } from 'test-utils';
import Footer from '../../components/footer';

describe('<Footer /> Tests', () => {
  it('should render some text and a link', () => {
    render(<Footer />);
    const trairHelperText = screen.getByText(/trairhelper - built by/i);
    const linkText = screen.getByText(/marc/i);

    expect(trairHelperText).toBeInTheDocument();
    expect(linkText).toBeInTheDocument();
  });
});
