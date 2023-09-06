const CustomBtnWithIcon = ({buttonTitle, url, icon}) => {
    return (
        <div className="pt-4 px-2">
            <div className="font-general-semibold text-ternary-dark dark:text-ternary-light 
            bg-[#f3f7fc] dark:bg-[#25547f] rounded-lg hover:scale-105
            border-2 border-[#25547f] dark:border-[#f3f7fc] w-auto py-2">
                <a href={url} target="__blank">
                    <div className="flex flex-row items-center justify-center">
                        <p>{buttonTitle}</p>
                        {icon && (
                            <span className="text-xl text-ternary-dark dark:text-ternary-light ml-2">{icon}</span>
                        )}
                    </div>
                </a>
            </div>									
        </div>
    );
};

export default CustomBtnWithIcon;
