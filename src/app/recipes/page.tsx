import Link from "next/link";

import RecipeCard from "@/components/atoms/RecipeCard";
import MainWrapper from "@/components/containers/MainWrapper";

export const metadata = {
  title: `FOOD RECIPES - All Recipes`,
  description: "The best desi and all types of food recipes on the internet",
};

const RecipePage = async () => {
  const url = `https://cdn.contentful.com/spaces/pttstvrer8xs/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=recipe&limit=4`;
  const res = await fetch(url, { cache: "default" });
  const topRecData = await res.json();
  const topRecs = topRecData.items;

  return (
    <div>
      <MainWrapper>
        <div className="my-5 flex flex-col items-center">
          <h1 className="text-4xl font-bold mt-5">ALL RECIPES</h1>
          <div className="flex flex-col md:flex-row gap-8 mt-20 px-4 md:px-0">
            {topRecs.map((rec: any, index: number) => {
              const imgObj = topRecData.includes.Asset.find(
                (obj: any) => obj.sys.id === rec.fields.imageOfRecipe.sys.id
              );

              return (
                <Link href={`recipes/${rec.sys.id}`} key={rec.sys.id}>
                  <RecipeCard
                    title={rec.fields.titleOfRecipe}
                    imgUrl={imgObj.fields.file.url}
                    priority={index < 10 ? true : false}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </MainWrapper>
    </div>
  );
};

export default RecipePage;
