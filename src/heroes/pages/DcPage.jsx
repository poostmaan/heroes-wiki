import { data } from '../../../data/data';
import { HeroList } from '../components';
import { HeroHeader } from '../components/HeroHeader';

export const DcPage = () => {

  const { name, background, introduction,} = data.dccomic;

  return (
    <div className="animate__animated animate__fadeIn">
      <HeroHeader name={name} background={background} introduction={introduction} />
      <HeroList publisher={"DC Comics"}/>
    </div>
  )
}
