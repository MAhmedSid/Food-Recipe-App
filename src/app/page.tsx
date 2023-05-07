import ROTDComp from "@/components/widgets/ROTDComp";
import TopRecComp from "@/components/widgets/TopRecComp";



export default function Home() {
  return (
    <>
      {/* THIS IS USED TO IGNORE BETA VERSION TYPESCRIPT ERRORS */}
      {/* @ts-expect-error Async Server Component */}
      <ROTDComp />
      {/* @ts-expect-error Async Server Component */}
      <TopRecComp />
    </>
  );
}
 