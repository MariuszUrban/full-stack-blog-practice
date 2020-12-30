import React from "react";
import ArticlesList from "../components/ArticlesList";
import articles from './article-content';


 const ArticlePage = ({match}) => {
   
  const name = match.params.name; 
  const article = articles.find(article => article.name === name)
  
  if(!article) return <h1>There is no article like that</h1>
  const otherArticles = articles.filter(article => article.name !== name );

  return (
  <>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
    ))}
    <h3>Other articles</h3>
    <ArticlesList articles={otherArticles} />
  </>
);
}

export default ArticlePage;   