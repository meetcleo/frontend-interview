import { render, screen } from '@testing-library/react';

import App from './';

describe('<App />', () => {
  it('renders correctly', () => {
    render(<App />);

    const logo = screen.getByTitle('Cleo');
    const subHeading = screen.getByText('Currency Converter');
    const inputs = screen.getAllByRole('textbox');
    const convertButton = screen.getByText('Convert');

    expect(logo).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(inputs).toHaveLength(3);
    expect(convertButton).toBeInTheDocument();
  });
});
