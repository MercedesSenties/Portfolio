const CustomBtnWithIcon = ({ buttonTitle, url, icon }) => {
  return (
    <div className="pt-4 px-2">
      <div
        className="font-general-semibold text-ternary-dark dark:text-ternary-light 
            bg-card-light dark:bg-button-dark rounded-lg hover:scale-105
            border-2 border-button-dark dark:border-card-light w-auto py-2">
        <a
          href={url}
          target="__blank">
          <div className="flex flex-row items-center justify-center">
            <p>{buttonTitle}</p>
            {icon && (
              <span className="text-xl text-ternary-dark dark:text-ternary-light ml-2">
                {icon}
              </span>
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default CustomBtnWithIcon;
