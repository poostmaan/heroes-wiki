import { data } from "../../../data/data";
import { HeroList } from "../components"
import { HeroHeader } from "../components/HeroHeader"

export const MarvelPage = () => {

  const { name, background, introduction,} = data.marvel;

  return (
    <div className="animate__animated animate__fadeIn">
      <HeroHeader name={name} background={background} introduction={introduction} />
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  )
}
