import React from 'react';
import { render, screen } from 'test-utils';
import DevsPane from '../../components/devsPane';

describe('<DevsPane /> Tests', () => {
  beforeEach(() => {
    render(<DevsPane />);
  });

  it('should render the pane header text', () => {
    const devsText = screen.getByText(/devs/i);
    expect(devsText).toBeInTheDocument();
  });

  it('should show loading message on initial render', () => {
    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('should render some devs after loading', () => {
    const marc = screen.findByText(/marcjmiller/i);
    const vlad = screen.findByText(/vlad/i);
    const kayla = screen.findByText(/kayla/i);
  });
});
