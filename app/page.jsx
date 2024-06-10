// pages/index.js
import { fetchAPI } from "../utils/api";
import Header from "./components/Header";

async function getMenu() {
  return await fetchAPI("/menus?filters[slug][$eq]=primary-top&populate=items");
}

export default async function HomePage() {
  const { data: menu } = await getMenu();

  return (
    <>
      <Header menu={menu} />
    </>
  );
}
