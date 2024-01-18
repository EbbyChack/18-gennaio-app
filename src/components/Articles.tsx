import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  interface Article {
    id: string;
    title: string;
    summary: string;
    image_url: string;
  }
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
        const data = await response.json();
        setArticles(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-3">
        {articles.map((article) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={article.id}>
            <div className="card-container h-100">
              <div className="card h-100">
                <img
                  src={article.image_url}
                  className="card-img-top"
                  alt={article.title}
                  style={{ height: "12em", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text text-truncate">{article.summary}</p>
                </div>
                <Link to={`/article/${article.id}`} className="btn btn-light">
                  Read
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
