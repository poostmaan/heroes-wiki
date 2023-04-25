import PropTypes from "prop-types";
import { useMemo } from "react";
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from "./HeroCard";

const HeroList = ({ publisher }) => { 

  const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]) ;
  // const heroes = getHeroesByPublisher( publisher );

  return (
    <div className="flex flex-wrap justify-center" id={publisher.replace(/ /g, '')}>
      { heroes.map( heroe => <HeroCard key={ heroe.id } { ...heroe }/> )}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired
};

export { HeroList };
