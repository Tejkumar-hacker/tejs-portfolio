import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* HTML */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
          <SiHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        {/* CSS */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
          <SiCss3 className="text-7xl text-blue-600" />
        </motion.div>

        {/* JavaScript */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* React.js */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* TailwindCSS */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>

        {/* Spring Boot */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
          <SiSpringboot className="text-7xl text-green-600" />
        </motion.div>

        {/* MySQL */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
          <SiMysql className="text-7xl text-blue-700" />
        </motion.div>

        {/* MongoDB */}
        <motion.div initial="initial" animate="animate" variants={iconVariants(5.5)} className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;