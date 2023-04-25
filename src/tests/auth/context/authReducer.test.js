import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types" 

describe('authReducer perfomance test', () => {
    
    const state = {}

    test('should return the default state', () => {
        
        const action = {
            type: 'unknown',
        }
        const defaultState = authReducer( state, action);

        expect( defaultState ).toBe( state );

    })

    test('should authenticate user and save it on the state', () => {

        const data = {
            id: 1,
            name: 'name' 
        };

        const expectedState = {
            logged: true,
            user: data
        };

        const action = {
            type: types.login, 
            payload: data
        };
        
        const loginState = authReducer( state, action );

        expect( loginState ).toEqual( expectedState ); 
    })

    test('should return an object with logged in false property only', () => {

        const expectedState = {
            logged: false, 
        };

        const action = {
            type: types.logout,
        };
        
        const logoutState = authReducer( state, action ); 

        expect( logoutState ).toEqual( expectedState ); 
    })
    
})
