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

interface TabDetailsProps {
  title: string;
  description: string;
  image: string;
}
interface TabImageProps {
  image: string;
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>(tabInfo[0]);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <TabNav handleTabClick={handleTabClick} activeTab={activeTab} />
      <TabDetails
        image={activeTab.image}
        title={activeTab.title}
        description={activeTab.description}
      />
    </div>
  );
};

const TabNav = ({ handleTabClick, activeTab }: TabNavProps) => {
  return (
    <nav className="px-10 w-full md:w-[60%]">
      <ul className="w-full flex flex-col md:flex-row md:justify-evenly border-t border-neutral-blue-100 md:border-t-0">
        {tabInfo.map((tab) => (
          <TabButton
            key={tab.label}
            handleTabClick={handleTabClick}
            activeTab={activeTab}
            tab={tab}
          />
        ))}
      </ul>
    </nav>
  );
};

const TabButton = ({ handleTabClick, activeTab, tab }: TabButtonProps) => {
  const isActive = activeTab.label === tab.label;
  return (
    <li className="flex-1 border-b border-neutral-blue-100 flex justify-center">
      <button
        onClick={() => handleTabClick(tab)}
        className={`${
          isActive
            ? "text-neutral-blue-200 border-primary-red"
            : "text-neutral-blue-100  border-transparent"
        } md:w-full p-8 font-medium tracking-wider hover:text-neutral-blue-200 border-b-4  hover:border-primary-red`}
      >
        {tab.label}
      </button>
    </li>
  );
};

const TabDetails = ({ title, description, image }: TabDetailsProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center">
      <TabImage image={image} />
      <div className="w-full md:w-[50%] flex flex-col items-start gap-8 p-8">
            <h3 className="w-full font-medium tracking-wide text-2xl md:text-3xl text-center md:text-left">{title}</h3>
            <p className="text-neutral-blue-100 max-w-md leading-7 text-center md:text-left">{description}</p>
            <button className="bg-primary-blue px-6 py-3 rounded-md text-white font-medium">More Info</button>
      </div>
    </div>
  );
};

const TabImage = ({ image }: TabImageProps) => {
  return (
    <div className="w-full md:w-[50%] relative flex justify-end p-10">
      <div className="w-[80%] h-[70%] bg-primary-blue absolute bottom-0 left-0 -z-10 rounded-r-full" />
      <img src={image} alt="tabImage" />
    </div>
  );
};

export default TabSection;
