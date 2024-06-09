const extensions = [
  {
    name: "Chrome",
    version: 62,
    image: "./images/logo-chrome.svg",
    position: "md:self-start",
  },
  {
    name: "Firefox",
    version: 55,
    image: "./images/logo-firefox.svg",
    position: "md:self-center",
  },
  {
    name: "Chrome",
    version: 46,
    image: "./images/logo-opera.svg",
    position: "md:self-end",
  },
];

interface ExtensionType {
  name: string;
  version: number;
  image: string;
  position: string;
}

interface ExtensionCardProps {
  extension: ExtensionType;
}

const Extensions = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-neutral-blue-200 font-semibold text-3xl tracking-wider">
          Download the extension
        </h2>
        <p className="max-w-lg text-center text-neutral-blue-100 tarcking-wide leading-6">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <div className="w-full md:h-[450px] flex flex-col gap-8 md:flex-row md:justify-center px-10">
        {extensions.map((extension: ExtensionType) => (
          <ExtensionCard extension={extension} key={extension.name} />
        ))}
      </div>
    </div>
  );
};

const ExtensionCard = ({ extension }: ExtensionCardProps) => {
  return (
    <div className={`shadow-lg rounded-xl h-fit ${extension.position}`}>
      <div className="flex flex-col gap-3 items-center p-12">
        <img src={extension.image} alt="browser-logo" />
        <h3 className="font-semibold text-neutral-blue-200 text-xl tracking-wide">Add to {extension.name}</h3>
        <p className="text-neutral-blue-100">Minimum version {extension.version}</p>
      </div>
      <div className="bg-dots bg-no-repeat p-6">
        <button className="w-full bg-primary-blue  border-2 border-transparent hover:border-primary-blue hover:text-primary-blue hover:bg-white rounded-md text-white font-medium px-8 py-4">
            Add & Install Extension
        </button>
      </div>
    </div>
  );
};

export default Extensions;
