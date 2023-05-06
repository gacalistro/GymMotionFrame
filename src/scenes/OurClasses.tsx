import { motion } from "framer-motion";

import * as Assets from "../assets";

import { SectionHeaderText } from "../components/SectionHeaderText";
import { ClassItemCard } from "../components/ClassItemCard";

export interface ClassesDataType {
  name: string;
  description: string;
  image: string;
}

export function OurClasses() {
  const classes: Array<ClassesDataType> = [
    {
      name: "Weight Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image1,
    },
    {
      name: "Yoga Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image2,
    },
    {
      name: "Ab Core Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image3,
    },
    {
      name: "Adventure Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image4,
    },
    {
      name: "Fitness Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image5,
    },
    {
      name: "Training Classes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Assets.Image6,
    },
  ];
  return (
    <section id="our_classes" className="w-full bg-primary-300 py-40">
      <motion.div
        className="w-5/6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <SectionHeaderText>Our Classes</SectionHeaderText>
        <p>
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>

        <div className="mt-10 h-full overflow-y-hidden">
          <ul className="w-full whitespace-nowrap">
            {classes.map((classItem) => (
              <ClassItemCard key={classItem.name} {...classItem} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
