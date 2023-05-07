import { HiOutlineClock } from "react-icons/hi";
import { BiDish } from "react-icons/bi";
import { GiFruitBowl } from "react-icons/gi";

const RecipeInfo: React.FC<{ recipe: any }> = ({ recipe }) => {
  return (
    <div className="grid grid-cols-2 mt-5 gap-y-3">
      <div className="flex gap-2">
        <HiOutlineClock className="text-2xl" />
        <p className="text-lg">
          Ready In:{" "}
          <span className="font-semibold">{recipe.readyInMinutes}mins</span>
        </p>
      </div>
      <div className="flex gap-2">
        <BiDish className="text-2xl" />
        <p className="text-lg">
          Serves:{" "}
          <span className="font-semibold">{recipe.servingCapacity}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <GiFruitBowl className="text-2xl" />
        <p className="text-lg">
          Ingredients:{" "}
          <span className="font-semibold">{recipe.numberOfIngredients}</span>
        </p>
      </div>
    </div>
  );
};

export default RecipeInfo;
