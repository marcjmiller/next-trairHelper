import React from 'react';
import { render, screen } from 'test-utils';
import Header from '../../components/header';

describe('<Header /> Tests', () => {
  it('should render header text', () => {
    render(<Header />);

    const headerText = screen.getByText(/pair with a friend/i);
    expect(headerText).toBeInTheDocument()
  });
});
