import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});