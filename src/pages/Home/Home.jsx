import MultiCarousel from "../../components/layouts/Carousels/MultiCarousel";
import Header from "../../components/layouts/Header";
import HomeBanner from "../../components/layouts/HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main className="my-16 flex flex-col gap-6 md:gap-10">
        <MultiCarousel title="Binge-Worthy Shows" />
        <MultiCarousel title="Trending in Singapore" />
        <MultiCarousel title="Based On a True Story" />
        
        <div className="flex flex-row justify-center mt-4">
          <button className="btn_md primary_btn">Explore Movies & TV Shows</button>
        </div>
      </main>
    </>
  );
}