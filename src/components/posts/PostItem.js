import React from "react";
import { Link } from "gatsby";

const PostItem = ({ title, slug, date, excerpt }) => {
  return (
    <div className={"border-t border-gray-300 py-6 sm:py-12"}>
      <Link to={slug} className={"grid grid-cols-1 sm:grid-cols-4"}>
        <div className={"text-base font-medium leading-6 text-gray-500 col-span-1 mb-2 sm:mb-0"}>
          {date}
        </div>
        {/*<GatsbyImage image={image}*/}
        {/*             alt={alt} className="max-h-[200px]"*/}
        {/*/>*/}
        <div className={"col-span-1 sm:col-span-3"}>
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

export default PostItem;