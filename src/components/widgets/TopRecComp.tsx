import Link from "next/link";

import MainWrapper from "../containers/MainWrapper";
import RecipeCard from "../atoms/RecipeCard";


const TopRecComp = async () => {
  const url =
    `https://cdn.contentful.com/spaces/pttstvrer8xs/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=recipe&limit=4`;
  const res = await fetch(url,{cache:"default"});
  const topRecData = await res.json();
  const topRecs = topRecData.items;

  return (
    <div className="mx-4 md:mx-0">
      <MainWrapper>
        <div className="flex justify-between items-center mt-6 ">
          <h2 className="text-primary_black text-[32px] tracking-wider font-semibold">
            TOP RECIPES
          </h2>
          <Link href="/recipes">
            <p className="text-[#1769c2] text-base font-semibold">View All</p>
          </Link>
        </div>
        <div className="flex md:flex-row flex-col gap-8 mt-4">
          {topRecs.map((rec: any) => {
            const imgObj = topRecData.includes.Asset.find(
              (obj: any) => obj.sys.id === rec.fields.imageOfRecipe.sys.id
            );

            return (
              <Link href={`recipes/${rec.sys.id}`} key={rec.sys.id}>
                <RecipeCard
                  title={rec.fields.titleOfRecipe}
                  imgUrl={imgObj.fields.file.url}
                  priority={false}
                />
              </Link>
            );
          })}
        </div>
        <div className="w-full h-[2rem] bg-black opacity-5 relative mt-6" />
      </MainWrapper>
    </div>
  );
};

export default TopRecComp;
