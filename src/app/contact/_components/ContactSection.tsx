import CalSection from "@/app/_components/CalSection";
import { contact } from "@/configs/site";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-40">
          <h1 className="text-4xl lg:text-6xl lg:leading-snug font-semibold mb-8 text-slate-50">
            Contact
          </h1>

          <Balancer>
            <h3 className="text-xl lg:text-2xl font-medium mb-16 text-slate-200">
              Got a project idea? Share it with me! Let&apos;s discuss and turn
              your vision into reality together.
            </h3>
          </Balancer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Object.entries(contact).map(([key, value]) => (
              <Link key={key} target="_blank" href={value}>
                <div className="icon-wrapper-container flex gap-4 items-center cursor-pointer">
                  <div className="icon-wrapper transition rounded-md border border-slate-600 p-4">
                    <span className="icon-wrapper-overlay"></span>
                    {key === "github" && <Github size={28} stroke="white" />}
                    {key === "linkedin" && (
                      <Linkedin size={28} stroke="white" />
                    )}
                    {key === "twitter" && <Twitter size={28} stroke="white" />}
                    {key === "mail" && <Mail size={28} stroke="white" />}
                  </div>
                  <div>
                    <h2 className="text-xl text-slate-300">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h2>
                    <h1 className="text-lg font-bold text-slate-50">
                      {key !== "mail" && "@"}
                      {value.username}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CalSection />
      </div>
    </section>
  );
};

export default ContactSection;
