import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./NewsList";
import response from '../response.json'
import { resolve } from "path";

async function Homepage() {
  //fetch the news data
  const news: NewsResponse = response || await fetchNews(categories.join(","));
  // set timeout for 3 seconds
// await new Promise((resolve) => setTimeout(resolve,3000))

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
