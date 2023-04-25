import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  // console.log({ id, rest});

  const hero = useMemo( () => getHeroById(id), [ id ]) ;

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div>
      <div className="animate__animated animate__fadeIn flex flex-col items-center bg-white border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="animate__animated animate__fadeInLeft object-cover w-full h-96 rounded-t-lg md:h-auto md:w-80 md:rounded-none md:rounded-l-lg"
          src={`/assets/heroes/${hero.id}.jpg`} 
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {hero.superhero}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {hero.alter_ego}
          </p>

          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Characters
          </h2>
          <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
            { hero.characters}
          </ul>

          <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
            First Appareance
          </h2>
          <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
            { hero.first_appearance }
          </ul>
        </div>
      </div>
    </div>
  );
};
