import { useState } from "react";


const faqs = [
  {
    title: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

interface FAQType {
  title: string;
  answer: string;
}

interface AccordionItemProps {
  faq: FAQType;
  activeFaq: FAQType | undefined;
  handleClick: (faw: FAQType) => void;
}

const FAQs = () => {
  return (
    <div className="max-w-xl flex flex-col items-center gap-8 px-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-neutral-blue-200 font-semibold text-3xl tracking-wider">
          Frequently Asked Questions
        </h2>
        <p className="max-w-lg text-center text-neutral-blue-100 tarcking-wide leading-6">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <Accordion />
      <button className="py-4 px-6 rounded-md bg-primary-blue font-medium text-white">
        More Info
      </button>
    </div>
  );
};

const Accordion = () => {
    const [activeFaq, setActiveFaq] = useState<FAQType | undefined>(undefined);
    const handleItemClick = (faq: FAQType) => {
        if(activeFaq?.title === faq.title){
            setActiveFaq(undefined);
            return;
        }
        setActiveFaq(faq);
    }
  return (
    <ul className="w-full border-y border-neutral-blue-100 divide-y divide-neutral-blue-100">
      {faqs.map((faq: FAQType) => (
        <AccordionItem key={faq.title} faq={faq} activeFaq={activeFaq} handleClick={handleItemClick} />
      ))}
    </ul>
  );
};

const AccordionItem = ({ faq, activeFaq, handleClick }: AccordionItemProps) => {
    const isOpen = faq.title === activeFaq?.title;
  return (
    <li className="w-full">
        <button onClick={() => handleClick(faq)} className="w-full flex items-center justify-between py-6 text-neutral-blue-200 hover:text-primary-red">
            <h3 className="tracking-wide md:text-[18px]">{faq.title}</h3>
            <svg className={`${isOpen ? 'rotate-180 stroke-primary-red' : 'stroke-primary-blue'} transition-transform duration-300 ease-in-out`} xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="current" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
        </button>
        <div className={`grid overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4 pb-8' : 'grid-rows-[0fr] opacity-0'} text-neutral-blue-100 transition-all ease-linear duration-300`}>
            <div className="overflow-hidden">{faq.answer}</div>
        </div>
    </li>
  );
};

export default FAQs;
