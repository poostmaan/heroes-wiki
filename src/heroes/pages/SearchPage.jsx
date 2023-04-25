import { useForm } from "../../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; // Paquete especial para parsear los elementos query de un url;
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";


export const SearchPage = () => {
  const navigate = useNavigate(); // Con este customHook estaremos navegante sin refrescar
  const location = useLocation(); // Con este podremos leer el objecto de //! Location
  
  // * Query String para parsear los elementos dentro de location.search
  // ! Si "q" no trae nada, retornara "q" vacia
  // console.log({ q });
  
  const { q = "" } = queryString.parse(location.search);
  
  const formData = {
    searchText: q,
  }
  const heroes = getHeroesByName( q );
  // console.log({ heroes })

  const { searchText, onInputChange } = useForm(formData);

  const showSearch = (q.length == 0); // Verificar que la busqueda tiene caracteres
  const showError = (q.length > 0) && (heroes.length === 0) // Hay argumentos pero no hay resultados

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length <= 1) return;

    // TODO: validar que la variable no tenga espacios en blancos
    navigate(`?q=${searchText}`); // * LLevamos el queryParam de nuestro heroe
    // console.log( searchText );
    // console.log(e.target[0].value);
  };

  return (
    <div className="flex flex-row animate__animated animate__fadeIn">
      <div className="basis-1/2 m-4">
        <form method="GET" onSubmit={ handleSubmit } role="form">
          <div className="relative ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              name="searchText"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              onChange={onInputChange}
              value={searchText}
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="basis-1/2 m-4">

        <div
          className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
          style={ { display: showSearch ? '' : 'none'}}
        >
          <span className="font-medium">Hey!</span> Seach a superhero right here!
        </div>

        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
          aria-label="alert-nofound"
          style={ { display: showError ? '' : 'none'}}
        >
          <span className="font-medium">Oops!</span> There's no any superhero with that name
        </div>

        {

          heroes.map( hero => <HeroCard key={ hero.id} { ...hero}/> )

        }
      </div>
    </div>
  );
};
