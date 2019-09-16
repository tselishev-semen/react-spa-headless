import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogReducer } from "./reducer";
import { loadArticles } from "./actions";
import { articlesSelector } from "./selectors";
import { withReducer } from "core/with-reducer";

export const BlogPage = withReducer("blog-page", blogReducer)(
  ({ title, renderContentSlot }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadArticles());
    }, [dispatch]);

    const articles = useSelector(articlesSelector);
    let articlesComponents = articles.map(({ name, message }) => {
      return (
        <li id={name}>
          <span>{name}:</span>
          <span>{message}</span>
        </li>
      );
    });
    return (
      <main>
        <div>{renderContentSlot()}</div>
        <br />
        <section>
          <h1>{title}</h1>
          <ul>{articlesComponents}</ul>
        </section>
      </main>
    );
  }
);
