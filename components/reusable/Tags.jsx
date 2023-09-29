const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap basis-auto gap-4 justify-items-start mb-4 mt-4">
      {tags.map((item, i) => {
        return (
          <div key={i}>
            <a
              className="bg-secondary-light dark:bg-ternary-dark 
                            border-ternary-dark dark:border-ternary-light 
                            shadow-lg rounded border-2 border-solid sm:border-dashed px-2 py-1
                            text-ternary-dark dark:text-ternary-light">
              {item}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
