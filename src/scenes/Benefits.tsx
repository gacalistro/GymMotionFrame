import { motion } from "framer-motion";
import { GraduationCap, UsersFour, HouseLine } from "@phosphor-icons/react";

import * as Assets from "../assets";

import { SectionHeaderText } from "../components/SectionHeaderText";
import { BenefitCard } from "../components/BenefitCard";
import { Button } from "../components/Button";

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function Benefits() {
  const benefits: Array<BenefitType> = [
    {
      icon: <UsersFour size={30} weight="fill" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <HouseLine size={30} weight="fill" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <GraduationCap size={30} weight="fill" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  return (
    <section id="benefits" className="scroll-m-10 py-20">
      <motion.div className="mx-auto min-h-full w-5/6">
        {/* Header */}
        <div className="lg:w-3/5">
          <SectionHeaderText>More than just a gym</SectionHeaderText>
          <p className="mt-5 text-sm text-justify">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* Benefits */}
        <motion.div
          className="mt-10 flex max-lg:flex-col items-center justify-between gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </motion.div>

        {/* Image and Description */}
        <div className="mt-16">
          <img
            src={Assets.BenefitsGraphic}
            alt="Women working out"
            className="mx-auto"
          />
          <SectionHeaderText>
            <motion.div
              className="relative waves-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Millions of happy members getting
              <span className="ml-2 text-primary-500">fit</span>
            </motion.div>
          </SectionHeaderText>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mt-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 relative sparkles-content">
          <Button text="Join Now" />
        </div>
      </motion.div>
    </section>
  );
}
