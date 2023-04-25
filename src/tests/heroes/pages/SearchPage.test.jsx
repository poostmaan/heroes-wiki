import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../heroes"

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate
}))

describe('<Search Page /> testing', () => {
  test('should render correctly', () => {
    const {container} = render(
        <MemoryRouter>
            <SearchPage />
        </MemoryRouter>
    );

    // const component = screen.debug();

    expect( container ).toMatchSnapshot();

  })

  test('should render Batman info and save in an input the QueryParameters', () => {
    render(
        <MemoryRouter initialEntries={['search?q=Batman']}>
            <SearchPage />
        </MemoryRouter>
    );

    // const component = screen.debug(); 
    // screen.debug() 
    const input = screen.getByRole('textbox') 
    expect( input.value ).toBe('Batman')

    const img = screen.getByRole('img') 
    expect( img.src ).toContain('/assets/heroes/dc-batman.jpg')

    const alertNoFound = screen.getByLabelText('alert-nofound')
    expect( alertNoFound.getAttribute('style') ).toBe('display: none;')

  })

  test('should show a error whether a hero isn`t found', () => {
    render(
        <MemoryRouter initialEntries={['search?q=Batman123']}>
            <SearchPage />
        </MemoryRouter>
    );

    // screen.debug();

    const alertNoFound = screen.getByLabelText('alert-nofound')
    expect( alertNoFound.getAttribute('style') ).toBe(null)

  })

  test('should execute navigate in the new page', () => {
    render(
      <MemoryRouter >
          <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox') 
    const form = screen.getByRole('form');

    fireEvent.change( input , {target: {value: 'Superman'}});
    fireEvent.submit( form );
    // expect( input.value ).toBe('Superman')
    expect( mockedUseNavigate ).toHaveBeenCalledWith("?q=Superman");
    // screen.debug();
    // expect( input.value ).toBe('Batman')
  })
  
  
})
