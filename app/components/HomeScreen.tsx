"use client";
import React, { useState } from "react";
import { LiaGreaterThanSolid, LiaLessThanSolid } from "react-icons/lia";
import { forumsData, marketStoriesData } from "../utils";
import Navbar from "./Navbar";
import Forums from "./Forums";
import MarketStories from "./MarketStories";
import SideBar from "./SideBar";

const HomeScreen = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeTab, setActiveTab] = useState("forums");
  const [forums, setForums] = useState(forumsData);
  const [marketStories, setMarketStories] = useState(marketStoriesData);

  const handlesideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className=" flex grow ">
        <SideBar showSideBar={showSideBar} />

        <div className={`hidden sm:flex ${showSideBar && "sm:ml-64"}`}>
          <button className="text-black " onClick={handlesideBar}>
            {showSideBar ? (
              <LiaLessThanSolid size={50} />
            ) : (
              <LiaGreaterThanSolid size={50} />
            )}
          </button>
        </div>

        <div className="p-4 sm:ml-1 grow">
          {/* ----------- navbar --------- */}
          <Navbar
            handleTabClick={handleTabClick}
            handlesideBar={handlesideBar}
          />

          <div className="flex gap-10 flex-col md:flex-row">
            {/* ----------------- forums -------------------- */}
            <Forums activeTab={activeTab} forums={forums} />

            {/* ----------------- marketStories -------------------- */}
            <MarketStories
              activeTab={activeTab}
              marketStories={marketStories}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
