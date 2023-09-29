import { motion } from "framer-motion";
import ImageCarousel from "../reusable/Carousel";
import Tags from "../reusable/Tags";
import ShowMore from "./ShowMore";

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}>
      <div className="flex flex-col items-center rounded-xl drop-shadow-lg my-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark sm:flex-row md:flex-col lg:flex-row">
        <div className="sm:m-6 max-w-md">
          <ImageCarousel
            images={props.img}
            width={props.width}
            height={props.height}></ImageCarousel>
        </div>

        <div className="flex flex-col">
          <div className="px-4 py-6 text-justify">
            <div className="flex flex-row items-center place-content-between text-ternary-dark dark:text-ternary-light">
              <p className="font-sketch text-xl md:text-4xl lg:text-3xl mb-2">
                {props.title}
              </p>
            </div>
            <Tags tags={props.tags}></Tags>
            <span className="font-general-light mt-6 text-lg md:text-2xl lg:text-xl text-ternary-dark dark:text-ternary-light">
              {props.description}
            </span>
            <div className="text-left">
              <ShowMore
                role={props.role}
                timeline={props.timeline}
                teamList={props.teamList}
                tools={props.tools}
                did={props.did}
                url={props.buttonUrl}
                buttonTitle={props.buttonTitle}></ShowMore>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
