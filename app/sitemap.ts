// import getPosts from "./"
//-----> domain.com/sitemap.xml
export default async function sitemap() {
  const rootUrl = "https://ekomobility.co";
  //Dynamic routes

  //   const dynamicRoutes = [];

  const pages = [
    "/",
    "/#about",
    "/#solutions",
    "/#why-choose-us",
    "/#impact",
    "/#contact",
    "/#become-a-captain",
  ];

  const staticRoutes = pages.map((route) => {
    return {
      url: `${rootUrl}${route}`,
      lastModified: new Date(),
    };
  });

  const routes = [...staticRoutes];

  return routes;
}
