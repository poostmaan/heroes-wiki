import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const handleUrl = `/assets/heroes/${ id }.jpg`;

  return (
    <div aria-label="hero-cards" className={`animate__animated animate__fadeIn  max-w-sm bg-white rounded-lg m-3 p-3 py-4 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>

        <img className="rounded-t-lg" src={ handleUrl } alt={ superhero }/>

      <div className="p-5">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            { superhero }
        </h5>
        <p className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
          { publisher }
        </p>
        <p className="mb-3 font-normal text-white">
          { alter_ego }
        </p>
        <Link
          to={`/hero/${ id }`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
