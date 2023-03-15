import CoreBox from "@/components/widgets/CoreBox";
import Hero from "@/components/widgets/Hero";
import Hero2 from "@/components/widgets/Hero2";
import Program from "@/components/widgets/Program";
import SpecializedBox from "@/components/widgets/SpecializedBox";
import { data } from "@/Data/HeroData";
import { HeroData } from "@/Data/types";

const getData = (id: string) => {
  const dataa = data.find((e: HeroData) => e.id === id);
  return dataa;
};

const Home = () => {
  const heroData = getData("hero");
  const CoreCoursesData = getData("core-courses");
  return (
    <>
      {heroData && (
        <Hero
          id="hero"
          title={heroData.title}
          header={heroData.header}
          description={heroData.description}
          buttonText={heroData.buttonText}
          img={heroData.img}
        />
      )}
      {CoreCoursesData && (
        <Hero
          id="core-courses"
          title={CoreCoursesData.title}
          header={CoreCoursesData.header}
          description={CoreCoursesData.description}
          buttonText={CoreCoursesData.buttonText}
          img={CoreCoursesData.img}
          blurEffect={true}
        />
      )}
      <CoreBox />
      <SpecializedBox />
      <Hero2 />
      <Program />
      {/* <Partners /> */}
    </>
  );
};

export default Home;
