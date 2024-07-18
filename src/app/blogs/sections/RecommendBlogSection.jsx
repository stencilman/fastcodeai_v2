import Link from "next/link";
import React from "react";

const RecommendBlogSection = ({
  recommendBlog1,
  recommendBlog2,
  recommendBlog3,
}) => {
  return (
    <>
      {/* Blog Post 1 */}

      <Link className="md:w-[30%]" href={recommendBlog1?.href}>
        <div className="relative group">
          <div>
            <div
              className={`group-hover:scale-[0.98] bg-center bg-cover ${recommendBlog1?.thumbnail} transition-all duration-500 ease-in-out w-full max-w-[430px] h-[353px] rounded-[18px]`}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
              <li>{recommendBlog1?.authorName}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog1?.publicationDate}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog1?.comments} Comments</li>
            </ul>
            <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
              {recommendBlog1?.title}
            </b>
            <p className="text-[#9EB3CF] text-base font-bwmss01 ">
              {recommendBlog1?.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Blog Post 2 */}
      <Link className="md:w-[30%]" href={recommendBlog2?.href}>
        <div className="relative md:top-[-70px] group">
          <div>
            <div
              className={`group-hover:scale-[0.98] bg-center bg-cover ${recommendBlog2?.thumbnail} transition-all duration-500 ease-in-out  w-full max-w-[430px] h-[353px] rounded-[18px]`}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
              <li>{recommendBlog2?.authorName}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog2?.publicationDate}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog2?.comments} Comments</li>
            </ul>
            <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
              {recommendBlog2?.title}
            </b>
            <p className="text-[#9EB3CF] text-base font-bwmss01">
              {recommendBlog2?.description}
            </p>
          </div>
        </div>
      </Link>
      {/* Blog Post 3 */}
      <Link className="md:w-[30%]" href={recommendBlog3?.href}>
        <div className="relative group">
          <div>
            <div
              className={`group-hover:scale-[0.98] bg-center bg-cover ${recommendBlog3?.thumbnail} transition-all duration-500 ease-in-out  w-full max-w-[430px] h-[353px] rounded-[18px]`}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <ul className="flex group-hover:text-gray-500 transition-all duration-500 ease-in-out gap-[13px] text-xs font-bwmss01 items-baseline mt-[20px] pl-[12px]">
              <li>{recommendBlog3?.authorName}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog3?.publicationDate}</li>
              <li className="text-[33px]">.</li>
              <li>{recommendBlog3?.comments} Comments</li>
            </ul>
            <b className="text-white text-2xl font-aeonik group-hover:scale-[0.98] transition-all duration-300 ease-in-out">
              {recommendBlog3?.title}
            </b>
            <p className="text-[#9EB3CF] text-base font-bwmss01">
              {recommendBlog3?.description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecommendBlogSection;
