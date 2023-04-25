import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoute } from "../../Router/PrivateRoute";

describe("<PrivateRoute > functionality test", () => {
  test("should render correctly and save the current URL in localStorage", () => {
    const authState = {
      logged: true,
      user: {
        id: "a123",
        name: "Juanito",
      },
    };

    Storage.prototype.setItem = jest.fn();
    // Acceder al localStorage desde node
    // No funciona aca localStoage
    // Se sobreescribe el prototype

    const queryString = 'search?q=batman'; 

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={[queryString]}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    // Haber esperado que esta funcion se ejecutase
    // y hubiese guardado una clave/valor
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastUri', queryString); 
  });
});
