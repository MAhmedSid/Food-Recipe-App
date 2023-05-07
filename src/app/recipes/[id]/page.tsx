import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import MainWrapper from "@/components/containers/MainWrapper";
import RecipeInfo from "@/components/atoms/RecipeInfo";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const contentful = require("contentful");
const token = process.env.ACCESS_TOKEN;

// FUNCTION TO GET DYNAMIC META DATA.
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const client = contentful.createClient({
    space: "pttstvrer8xs",
    accessToken: token,
  });

  try {
    const recipeData = await client.getEntry(params.id);
    const recipe = recipeData.fields;
    return {
      title: `RECIPE - ${recipe.titleOfRecipe}`,
      description: recipe.descriptionOfRecipe as string,
    };
  } catch (err) {
    return {
      title: `Recipe Not Found`,
      description: "Wrong address or Recipe may removed",
    };
  }
}

const page = async ({ params }: { params: { id: string } }) => {
  const client = contentful.createClient({
    space: "pttstvrer8xs",
    accessToken: token,
  });

  try{
    const recipeData = await client.getEntry(params.id);
    const recipeImgData = await client.getAsset(
      recipeData.fields.imageOfRecipe.sys.id
    );
    const recipe = recipeData.fields;
    const recipeImg = recipeImgData.fields.file.url;
  
    return (
      <div>
        <MainWrapper>
          <div className="max-w-[50rem] flex flex-col md:ml-5 my-10 px-4">
            <h3 className="text-primary_blue text-lg font-semibold">
              <Link href="/recipes">Recipes</Link>{" "}
              <span className="text-primary_black text-2xl">/</span>{" "}
              {recipe.typeOfRecipe}
            </h3>
            <h1 className="mt-5 text-primary_black text-5xl font-semibold">
              {recipe.titleOfRecipe}
            </h1>
            <p className=" mt-5 py-5 tracking-wide text-lg text-primary_black border-t-[1px] border-dashed border-[#BFBFBF]">
              {recipe.descriptionOfRecipe}
            </p>
            <Image
              priority={true}
              src={`https:${recipeImg}`}
              alt="beautiful recipe image"
              height={500}
              width={1000}
              className="mt-5"
            />
            <RecipeInfo recipe={recipe} />
  
            <div className="flex flex-col md:flex-row md:gap-x-10 mt-10 border-t-[1px] border-dashed border-[#BFBFBF] py-5">
              <div className="w-full md:w-[50%] ">
                <h2 className="text-2xl tracking-wide text-center md:text-left">DIRECTIONS</h2>
                <div className="flex flex-col mt-10 gap-y-5  text-base">
                  {documentToReactComponents(recipe.directionsToCookRecipe)}
                </div>
              </div>
              <div className="w-full md:w-[50%] mt-10 md:mt-0 border-t-[1px] md:border-t-0 border-dashed md:border-none border-[#BFBFBF]  ">
                <h2 className="text-2xl tracking-wide  pt-5 md:pt-0 block text-center md:text-left">INGREDIENTS</h2>
                <div className="ingredients flex flex-col mt-5  ">
                  {documentToReactComponents(recipe.ingredients)}
                </div>
              </div>
            </div>
          </div>
        </MainWrapper>
      </div>
    );
   
  }catch(err){
    notFound()
  }
};

export default page;
