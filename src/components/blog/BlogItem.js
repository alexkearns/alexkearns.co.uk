import React from "react";
import { Link } from "gatsby";

const BlogItem = ({ title, slug, date, excerpt, category }) => {
  return (
    <div className={"border-t border-gray-300 py-12"}>
      <Link to={slug} className={"flex justify-start items-start"}>
        <div className={"text-base font-medium leading-6 text-gray-500 w-1/4 flex-shrink-0 flex-grow-0"}>
          {date}
        </div>
        {/*<GatsbyImage image={image}*/}
        {/*             alt={alt} className="max-h-[200px]"*/}
        {/*/>*/}
        <div className={"flex-grow"}>
          <div className={"text-gray-900 text-2xl font-semibold leading-8 tracking-tight"}>
            {title}
          </div>
          <div className={"text-gray-500 mt-2"}>
            {excerpt}
          </div>
        </div>

      </Link>
    </div>
  );
};

export default BlogItem;