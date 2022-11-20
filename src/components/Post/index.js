import React from "react";

function Post({ text }) {
  return (
    <article className="p-4 rounded-md shadow ">
      <div className="mb-4 min-h-10">
        <p className=" text-lg">{text}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button>Options</button>
          <button>Location Thingy</button>
        </div>

        <button className="italic text-base">- user display</button>
      </div>
    </article>
  );
}

export default Post;
