import { types } from "../../../auth/types/types" 

describe('types testing', () => {
  // Util para los momentos en que se necesite validar que realmente existen las claves
  test('should return the definied types', () => {
    
    const expectedTypes = {
      // ! Si no se decide que tipo de nomenclatura habra, se puede probar con any string
      // * Lo importante es validar las entradas del types
      login: "[Auth] Login", 
      logout: "[Auth] Logout",
    }
  
    expect( types ).toEqual( expectedTypes );
  })
  
})
