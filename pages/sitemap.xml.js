const EXTERNAL_DATA_URL = "https://ken-shop.herokuapp.com/api/v1/product/all";

function generateSiteMap(products) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://ken-shop.vercel.app/</loc>
     </url>
     <url>
       <loc>https://ken-shop.vercel.app/</loc>
     </url>
     ${products.product_list
         .map(({ product_id }) => {
             return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${product_id}`}</loc>
       </url>
     `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = await fetch(EXTERNAL_DATA_URL);
    const products = await request.json();

    // We generate the XML sitemap with the products data
    const sitemap = generateSiteMap(products);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
