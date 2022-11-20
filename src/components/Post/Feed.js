import React from "react";
import Post from ".";

import { useData } from "../../context/main";

function Feed() {
  const { currentOfflinePosts } = useData();

  return (
    <div className="space-y-2">
      {currentOfflinePosts.map((post, id) => (
        <Post key={id} {...post} />
      ))}
    </div>
  );
}

export default Feed;
