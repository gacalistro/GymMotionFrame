import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Assets from "../assets";

import { SectionHeaderText } from "../components/SectionHeaderText";
import { Button } from "../components/Button";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  message: z.string().nonempty(),
});

type formType = z.infer<typeof formSchema>;

export function ContactUs() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: formType) {
    console.log(data);
  }

  return (
    <section id="contact_us" className="scroll-m-10 py-20">
      <motion.div className="mx-auto min-h-full w-5/6">
        {/* HEADER */}
        <motion.div
          className="lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SectionHeaderText>
            <span className="text-primary-500">Join Now</span> to get in shape
          </SectionHeaderText>
          <p className="mt-5 text-sm text-justify lg:max-w-lg">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        <div className="flex justify-between max-lg:flex-col">
          {/* FORM */}
          <motion.div
            className="mt-5 basis-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 flex flex-col gap-3 [&>*]:py-2 [&>*]:px-3 [&>*]:rounded-md">
                <input type="text" placeholder="name" {...register("name")} />
                <input type="text" placeholder="email" {...register("email")} />
                <textarea placeholder="message" {...register("message")} />
              </div>

              <Button text="Send" type="submit" />
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex justify-end basis-2/3 max-lg:justify-center max-lg:mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative before:absolute before:-bottom-20 before:-right-10 before:-z-[1] lg:before:content-evolvetext">
              <img alt="contact-us-page-graphic" src={Assets.ContactGraphic} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
