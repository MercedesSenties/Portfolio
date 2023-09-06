

const AccordionSectionList = ({title, bulletpoints, info}) => {
    return (
        <div className="px-2 py-3 text-ternary-dark dark:text-ternary-light">
            <p className="font-general-medium text-xl">
                {title}
            </p>
            <div className="text-left font-general-light text-base ml-4">
                {bulletpoints.map((item, i) => {
                    return (
                        <ul key={i} className="list-disc list-outside">
                            <li>{item[info]}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
}; 

export default AccordionSectionList;