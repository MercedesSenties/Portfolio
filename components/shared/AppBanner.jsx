import { motion } from "framer-motion";
import Image from "next/image";
import merceJump from "../../public/images/merceJump.gif";
import merceYellow from "../../public/images/merceYellow.gif";

function AppBanner() {
  var myImages = new Array(merceJump, merceYellow);
  var randomImage = Math.floor(Math.random() * myImages.length);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2">
      <div className="w-full text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
            delay: 0.1,
          }}
          className="font-sketch text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Hey, I{"'"}m <br></br>Ana Mercedes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-light mt-4 text-xl md:text-xl lg:text-3xl xl:text-3xl text-center sm:text-left leading-normal text-primary-dark dark:text-primary-light">
          I{"'"}m a programmer <br></br>& community manager
        </motion.p>
      </div>

      <motion.div
        className="mt-4"
        initial={{ scale: 0, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 1 }}>
        <Image
          src={myImages[randomImage]}
          className="w-full cursor-default"
          alt="Merce Image"
          width={80}
          height={80}
        />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
