import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Navbar } from "../../../ui"; 
import { AuthContext } from "../../../auth/context/AuthContext";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('<Navbar> test', () => { 

    // * PALABRAS CLAVES: mock parciales

    const authState = {
      logged: true,
      user: {
          id: '1231',
          name:'Federico'
      },
      // Queremos validar un funcion
    }

    const logout = jest.fn();

    // Con esta linea dejamos limpios a todas nuestras variables con funciones
    beforeEach(() => jest.clearAllMocks());

    test('should print the logged username', () => {
      
        render(
            <AuthContext.Provider value={{ authState }}>
              <MemoryRouter>
                <Navbar />
              </MemoryRouter>
            </AuthContext.Provider>
        );
      
        expect( screen.getByText( authState.user.name ) ).toBeTruthy(); 

    })

    test('should execute logout event and make sure navigate is called', () => {
      
        // const onLogoutfn = jest.fn();
        // expect( onLogout ).toHabeBeenCalled();

        render(
            <AuthContext.Provider value={{ authState, logout }}>
              <MemoryRouter>
                <Navbar />
              </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getAllByRole('button')[1] // Habian de dos mas botones
        fireEvent.click( logoutBtn );   // Ejecuto la funcion de logout

        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});

        expect( logout ).toHaveBeenCalled();

    })
    
})