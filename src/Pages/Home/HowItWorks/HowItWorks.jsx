import React from "react";
import {
  Search,
  BookOpenCheck,
  FileText,
  Send,
  BellRing,
  Smile,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-indigo-600" />,
    title: "1. Search Opportunities",
    desc: "Explore scholarships from all over the world tailored to your profile.",
  },
  {
    icon: <BookOpenCheck className="w-8 h-8 text-green-600" />,
    title: "2. Check Eligibility",
    desc: "Read through eligibility requirements and find the perfect match.",
  },
  {
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    title: "3. Prepare Documents",
    desc: "Upload necessary academic and personal documents securely.",
  },
  {
    icon: <Send className="w-8 h-8 text-pink-600" />,
    title: "4. Apply Online",
    desc: "Apply directly through our platform or official scholarship links.",
  },
  {
    icon: <BellRing className="w-8 h-8 text-yellow-600" />,
    title: "5. Get Notified",
    desc: "Receive real-time updates on deadlines and application status.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
    title: "6. Achieve Your Goal",
    desc: "Win the scholarship and move forward with your educational journey.",
  },
];
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const HowItWorks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step, idx) => (
        <Section key={idx}>
          <div className="flex flex-col justify-between h-full bg-gray-50 rounded-sm p-6 shadow-lg hover:shadow-md transition duration-300 text-left">
            <div>
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{step.desc}</p>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default HowItWorks;
