import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-start py-10 justify-between space-y-14 sm:space-x-8 sm:flex"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        onClick={() => setIsHidden(true)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="Right Arrow" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to transparent  h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
