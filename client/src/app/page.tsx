import MainCarousel from "@/app/components/carasol/MainCarousel";
import Category from "@/app/components/categorie/category";
import { categoriesName } from "@/utils/categories";

export default function Home() {
  return (
    <main>
      <MainCarousel />
      {categoriesName.map((name) => (
        <Category key={name.id} category={name.name} />
      ))}
    </main>
  );
}
