import { motion } from "framer-motion";

import * as Assets from "../assets";

import { Button } from "../components/Button";

export function Home() {
  return (
    <section id="home" className="py-16">
      {/* HERO SECTION */}
      <div className="w-5/6 mx-auto mt-20 lg:mt-24 xl:mt-16 lg:flex items-center justify-between relative z-0">
        {/* HERO TEXT */}
        <motion.div
          className="basis-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative evolve-text-content">
            <img src={Assets.HomeText} alt="Evogym logo" />
          </div>

          <p className="mt-8 text-sm text-justify lg:max-w-lg">
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button text="Join Now" />
            <a href="#contactus" className="hover:text-primary-500">
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* HERO IMAGE */}
        <div className="basis-2/5 flex justify-center lg:justify-end max-lg:mt-6">
          <img src={Assets.HomeGraphic} alt="Women wearing gym clothes" />
        </div>
      </div>

      {/* BANNER */}
      <div className="max-lg:hidden mt-20 w-full py-10 bg-primary-100">
        <div className="w-5/6 mx-auto">
          <div className="w-3/5 flex items-center justify-between">
            <img src={Assets.Forbes} alt="Forbes Logo" />
            <img src={Assets.RedBull} alt="RedBull Logo" />
            <img src={Assets.Fortune} alt="Fortune Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
