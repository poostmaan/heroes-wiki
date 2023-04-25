import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { AppRouter } from "../../Router/AppRouter";

describe("<PrivateRoute > functionality test", () => {
  test("should render login page whether user is not logged", () => {

    const authState = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Sign up') ).toBeTruthy(); 

  });

  test("should render main page whether user is logged", () => {

    const authState = {
      logged: true,
      user: {
        id: '212',
        name: 'jose'
      }
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('MARVEL') ).toBeTruthy(); 
    expect( screen.getByText('DC') ).toBeTruthy(); 
    expect( screen.getByText('SEARCH') ).toBeTruthy(); 

  });


});
