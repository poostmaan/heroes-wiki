import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

export const HeroHeader = ({ name, background, introduction }) => {
  return (
    <div className={`bg-cover bg-gray-800 bg-[url('${background}')]`} style={{height: "86vh"}}>
        <div className="p-12 mx-10">
            <h1 className="text-5xl mt-4 mb-5 font-bold text-gray-200 text-white">{ name }</h1> 
            <p class="text-2xl mb-3 mt-5 mr-12 font-normal text-gray-400 dark:text-gray-400">{ introduction }</p>
            <div className="py-6 my-6">
                <HashLink to={`#${name.replace(/ /g, '')}`} className="text-blue-600 font-semibold bg-gray-900 p-2 px-6 rounded hover:bg-gray-700">See {name} heroes section</HashLink>
            </div>
        </div>
    </div>
  )
}
