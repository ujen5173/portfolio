import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Balancer from "react-wrap-balancer";

const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-40">
          <h1 className="text-6xl font-semibold mb-8 text-slate-50">Contact</h1>

          <Balancer>
            <h3 className="text-2xl font-medium mb-16 text-slate-200">
              Got a project idea? Share it with me! Let&apos;s discuss and turn
              your vision into reality together.
            </h3>
          </Balancer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div className="flex gap-4 items-center cursor-pointer">
              <div className="rounded-md border border-slate-600/40 p-4">
                <Twitter size={28} stroke="white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-300">Twitter (X)</h2>
                <h1 className="text-lg font-bold text-slate-50">@ujen5173</h1>
              </div>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <div className="rounded-md border border-slate-600/40 p-4">
                <Linkedin size={28} stroke="white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-300">Linkedin</h2>
                <h1 className="text-lg font-bold text-slate-50">@ujen5173</h1>
              </div>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <div className="rounded-md border border-slate-600/40 p-4">
                <Github size={28} stroke="white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-300">Github</h2>
                <h1 className="text-lg font-bold text-slate-50">@ujen5173</h1>
              </div>
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <div className="rounded-md border border-slate-600/40 p-4">
                <Mail size={28} stroke="white" />
              </div>
              <div>
                <h2 className="text-xl text-slate-300">Email</h2>
                <h1 className="text-lg font-bold text-slate-50">
                  ujenbasi1122@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
