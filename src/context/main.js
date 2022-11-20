import React, { useState, createContext, useContext } from "react";

const MainContext = createContext();

// Actions

export function useData() {
  return useContext(MainContext);
}

export const MainProvider = ({ children }) => {
  const [newPost, setNewPost] = useState({
    text: "",
    location: "",
    user: "",
  });
  const [currentOfflinePosts, setCurrentOfflinePosts] = useState([]);

  const updateNewPost = (text) => {
    setNewPost((current) => {
      return {
        ...current,
        text: text,
      };
    });
  };

  const addNewPost = (post) => {
    setCurrentOfflinePosts((current) => {
      return [...current, post];
    });
  };

  const value = {
    newPost,
    updateNewPost,
    currentOfflinePosts,
    addNewPost,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
