import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { PublicRoute } from '../../Router/PublicRoute';

describe('<PublicRoute > test   ', () => { 
    test('render children whether its not authenticated', () => { 
        const authState = {
            logged: false
        };

        render(
            <AuthContext.Provider value={{ authState }}>
                <PublicRoute>
                    <h1>Prueba de cualquier otra elemento</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect( screen.getByText("Prueba de cualquier otra elemento") ).toBeTruthy();
     })

     test('redirect to marvel page', () => { 
        // Establezo el contexto de la aplicacion
        // Esta vez es un usuario logeado
        const authState = {
            logged: true,
            user: {
                id: '22121',
                name: 'Pedro'
            } 
        };

        render(
            <AuthContext.Provider value={{ authState }}> 
            {/* Se guardan el historial de rutas */}
                <MemoryRouter initialEntries={['/login']} initialIndex={0}> 

                    <Routes>
                        {/* Como el contexto manda un user logeado NO deberia mostrar el login */}
                        <Route path='login'  element={
                            <PublicRoute>
                                <h1>Prueba de cualquier otra elemento</h1>
                            </PublicRoute>
                        }/>
                        {/* Se valida que llevo a la pagina cuando se logeado
                            En este la de marvel
                        */}
                        <Route path='marvel' element={ <h1> Pagina web </h1>}/>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug(); 

        expect( screen.getByText("Pagina web") ).toBeTruthy();
     })
 })