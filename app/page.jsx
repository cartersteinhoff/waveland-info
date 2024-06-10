// pages/index.js
import { fetchAPI } from "../utils/api";
import Header from "./components/Header";

// http://localhost:1337/api/home/?populate=*

async function getStrapiMenu() {
  return await fetchAPI(
    "/menus?filters[slug][$eq]=company-info-hub-top-menu&populate=items"
  );
}

async function getStrapiHomeContent() {
  return await fetchAPI("/home/?populate=*");
}

export default async function HomePage() {
  const { data: menu } = await getStrapiMenu();
  const { data: homeContent } = await getStrapiHomeContent();
  console.log(20, menu[0]);

  return (
    <>
      <Header menu={menu} />
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">
              {homeContent.attributes.Hero_Headline}
            </h1>
            <p className="py-6">{homeContent.attributes.Hero_Subtext}</p>
            <button className="btn btn-primary">Get Started Now!</button>
          </div>
        </div>
      </div>
    </>
  );
}
