"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

interface Props {
  activeTab: any;
  forums: any;
}

const Forums = ({ activeTab, forums }: Props) => {
  return (
    <div
      className={`flex flex-col gap-10 flex-wrap ${
        activeTab == "forums" ? "" : "hidden sm:flex"
      }`}
      style={{ flex: 0.75 }}
    >
      <h1 className="text-2xl font-bold tracking-tight mt-4"> Forumes </h1>
      {forums.length &&
        forums.map((item: any, index: number) => {
          return (
            <>
              <div className="py-4 px-2.5 bg-gray-800   text-white rounded-lg inline-flex justify-center">
                <div className=" w-7 h-7 m-4 pb-5">
                  <CgProfile size={35} />
                </div>
                <div className="text-left rtl:text-right">
                  <div className="mb-1 text-xl">{item.name}</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    {item.description}
                  </div>
                  <div className="flex gap-5 mt-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <AiOutlineLike /> {item.likes}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegEye /> {item.views}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegCommentAlt />
                      {item.comments}
                    </div>
                    <div className="flex items-center gap-2">
                      <IoShareSocialOutline /> Share
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Forums;
