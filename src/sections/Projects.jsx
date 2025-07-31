import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const mousePostionX = useMotionValue(0);
  const mousePostionY = useMotionValue(0);
  const mouseSpringX = useSpring(mousePostionX, { damping: 10, stiffness: 50 });
  const mouseSpringY = useSpring(mousePostionY, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    mousePostionX.set(e.clientX + 10);
    mousePostionY.set(e.clientY - 10);
  };
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: mouseSpringX, y: mouseSpringY }}
          src={preview}
          alt="project preview"
        />
      )}
    </section>
  );
};

export default Projects;
