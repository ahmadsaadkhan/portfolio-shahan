import { projects } from "../../../lib/data";
import Image from "next/image";

const page = ({ params }) => {
  const { id } = params;
  const projectDetail = projects.find(item => item.id === Number(id));
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="p-10">
        <h2 className="text-3xl font-semibold text-white text-center py-5">Project Details</h2>
        {projectDetail.list.map((project) => (
          <div className="flex-1 w-full pb-20" key={project.id}>
            {projectDetail.type === 'image' ? (
              <Image
                alt="gallery"
                className=""
                src={`${project.image}`}
                width={1200}
                height={600}
                layout="responsive"
              />
            ) : (
              <div className="flex justify-center">
                <video controls width="750" height="250">
                  <source src={`${project.image}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <p className="text-center pt-5">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page