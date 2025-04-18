import Image from "next/image";
import { Hero } from "@/components";
import { CustomFilter } from "@/components";
import { SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import { CarCard } from "@/components";

export default async function Home() {
  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de autos Toyota</h1>
          <p>Explora los autos que te pueden gustar</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home_filter-container">
            {/* <CustomFilter title="fuel" />
            <CustomFilter title="year" /> */}
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Opps, sin resultados
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
