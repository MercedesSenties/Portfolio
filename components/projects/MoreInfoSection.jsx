const AccordionSection = ({ title, body }) => {
  return (
    <div className="px-2 py-3 text-ternary-dark dark:text-ternary-light">
      <p className="font-general-medium text-lg md:text-xl lg:text-xl">
        {title}
      </p>
      <p className=" text-left font-general-light text-base md:text-lg lg:text-lg">
        {body}
      </p>
    </div>
  );
};

export default AccordionSection;
