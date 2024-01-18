import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Article = () => {
  interface Article {
    id: string;
    title: string;
    summary: string;
    image_url: string;
  }
  const [article, setArticle] = useState<Article | undefined>();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + `${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {article ? (
        <div></div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Article;
