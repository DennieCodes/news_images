// src/components/NewsList.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function NewsList(query) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response)
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, [query]);

  return (
    <div>
      <h2>News Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
