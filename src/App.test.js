import { render, screen } from '@testing-library/react';
import App from './App';


window.matchMedia = () => ({
    addListener: () => { },
    removeListener: () => { }
});

test('renders learn react link', () => {
  render(<App />);
});
