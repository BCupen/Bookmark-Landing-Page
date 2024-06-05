import { useState } from "react";

interface TabType {
    label: string;
    title: string;
    description: string;
    image: string;
}

const tabInfo: TabType[] = [
  {
    label: "Simple Bookmarking",
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "./images/illustration-features-tab-1.svg",
  },
  {
    label: "Speedy Searching",
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in not time at all. No need to traql through all of your bookmarks.",
    image: "./images/illustration-features-tab-2.svg",
  },
  {
    label: "Easy Sharing",
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "./images/illustration-features-tab-3.svg",
  },
];

interface TabNavProps {
    handleTabClick: (tab: TabType) => void;
    activeTab: TabType;
}

interface TabButtonProps extends TabNavProps {
    tab: TabType;
}

const TabSection = () => {
    const [activeTab, setActiveTab] = useState<TabType>(tabInfo[0]);

    const handleTabClick = (tab: TabType) => {
        setActiveTab(tab);
    }
  return (
    <div className="w-full flex justify-center">
      <TabNav handleTabClick={handleTabClick} activeTab={activeTab}/>
    </div>
  );
};

const TabNav = ({handleTabClick, activeTab}: TabNavProps) => {
  return (
    <nav className="px-10 w-full md:w-[60%]">
      <ul className="w-full flex flex-col md:flex-row md:justify-evenly border-t border-neutral-blue-100 md:border-t-0">
        {tabInfo.map((tab) => (
          <TabButton key={tab.label} handleTabClick={handleTabClick} activeTab={activeTab} tab={tab} />
        ))}
      </ul>
    </nav>
  );
};

const TabButton = ({handleTabClick, activeTab, tab}: TabButtonProps) => {
    const isActive = activeTab.label === tab.label;
    return (
        <li className="flex-1 border-b border-neutral-blue-100 flex justify-center">
            <button onClick={() => handleTabClick(tab)} className={`${isActive ? 'text-neutral-blue-200 border-primary-red' : 'text-neutral-blue-100  border-transparent'} md:w-full p-8 font-medium tracking-wider hover:text-neutral-blue-200 border-b-4  hover:border-primary-red`}>{tab.label}</button>
          </li>
    )
}

export default TabSection;
