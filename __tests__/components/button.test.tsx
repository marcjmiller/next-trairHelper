// import Button from '../../components/button';
import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import Button from '../../components/button';

describe('<Button /> Tests', () => {
  const buttonClickSpy = jest.fn();

  beforeEach(() => {
    render(<Button text={'Click me!'} action={buttonClickSpy} testId={'test-btn'} />);
  });

  it('should render a button with given text', () => {
    const btnText = screen.getByText(/click me!/i);
    expect(btnText).toBeInTheDocument();
  });

  it('should fire the given action on a click', () => {
    const button = screen.getByTestId('test-btn');

    expect(buttonClickSpy).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(buttonClickSpy).toHaveBeenCalled();
  });
});
