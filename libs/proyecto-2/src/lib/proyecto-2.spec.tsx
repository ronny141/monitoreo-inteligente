import { render } from '@testing-library/react';

import Proyecto2 from './proyecto-2';

describe('Proyecto2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Proyecto2 />);
    expect(baseElement).toBeTruthy();
  });
});
