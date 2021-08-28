import ArticleItem from './ArticleItem'
import React from 'react'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList