import { render, screen } from '@testing-library/react';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import * as reactRedux from 'react-redux';
import RandomPerson from './RandomPerson';

const MockRandomPerson = () => {
  return (
    <Provider store={store}>
      <RandomPerson />
    </Provider>
  );
};

// to bypass this error TypeError: Cannot read property 'addListener' of undefined
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

describe('RandomPerson widget tests', () => {
  it('should return null without state', () => {
    const { container } = render(<MockRandomPerson />);
    expect(container).toBeEmptyDOMElement();
  });
  it('should render random person', () => {
    const mockState = {
      people: {
        list: [
          {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
          },
          {
            name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            gender: 'n/a',
          },
        ],
      },
    };

    // mock Math.random in order to return a deterministic result
    sinon.stub(Math, 'random').returns(0);
    // mock useSelector hook to return mockState
    const useSelectorMock = jest
      .spyOn(reactRedux, 'useSelector')
      .mockImplementation((each) => each(mockState));

    render(<MockRandomPerson />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();

    // clear the mock
    useSelectorMock.mockClear();
  });
});
