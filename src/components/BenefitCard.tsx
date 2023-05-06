import { motion } from "framer-motion";

import { BenefitType } from "../scenes/Benefits";

export function BenefitCard({ icon, title, description }: BenefitType) {
  return (
    <motion.div
      className="h-80 max-lg:px-10 px-5 py-10 flex flex-col items-center justify-center gap-3 text-center border-2 border-gray-100 rounded-md"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="p-3 bg-primary-300 border-2 border-primary-500/20 rounded-full ">
        {icon}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}
