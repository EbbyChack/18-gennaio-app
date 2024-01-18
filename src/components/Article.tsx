import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Article = () => {
  interface Article {
    id: string;
    title: string;
    summary: string;
    image_url: string;
    url: string;
    news_site: string;
  }
  const [article, setArticle] = useState<Article | undefined>();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + `${id}`);
        const data = await response.json();
        setArticle(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div >
      {article ? (
        <div className="container my-3 ">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="card-container ">
                <div className="card ">
                  <img
                    src={article.image_url}
                    className="card-img-top"
                    alt={article.title}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text ">{article.summary}</p>
                    <button className="btn btn-light"><a href={article.url} target="_blank" >Read more...</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Article;
