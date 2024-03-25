import React from "react";

interface Props {
  activeTab: any;
  marketStories: any;
}

const MarketStories = ({ activeTab, marketStories }: Props) => {
  return (
    <div
      className={` ${activeTab == "marketStories" ? "" : "hidden sm:flex"}`}
      style={{ flex: 0.25 }}
    >
      <div className="flex flex-col gap-10 flex-wrap mt-4">
        <h5 className="text-2xl font-bold tracking-tight"> Market Stories </h5>

        {marketStories.length &&
          marketStories.map((item: any, index: number) => {
            return (
              <>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default MarketStories;
