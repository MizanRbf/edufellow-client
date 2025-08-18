import React from "react";

const StudentFaq = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Who can apply for scholarships on this platform?
        </div>
        <div className="collapse-content text-sm">
          All students who meet the eligibility criteria of the listed
          scholarships can apply. This includes undergraduate, graduate, and
          doctoral students from any country, provided they fulfill the
          academic, language, and other specific requirements mentioned for each
          scholarship.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I apply for more than one scholarship at the same time?
        </div>
        <div className="collapse-content text-sm">
          Yes, you can apply for multiple scholarships simultaneously as long as
          you meet the eligibility criteria for each. However, carefully review
          the rules of each scholarship, as some may have restrictions on
          accepting multiple awards.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How long does it take to get a response?
        </div>
        <div className="collapse-content text-sm">
          The response time varies depending on the scholarship program.
          Typically, it takes 4–12 weeks for initial screening, and selected
          candidates are notified via email. Always check the specific
          scholarship timeline for accurate updates.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Do I need IELTS/TOEFL for international scholarships?
        </div>
        <div className="collapse-content text-sm">
          Many international scholarships require proof of English proficiency,
          such as IELTS or TOEFL. However, some scholarships waive this
          requirement if your previous education was in English or if you meet
          the scholarship’s alternative language requirements. Always check the
          individual scholarship details.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can working professionals also apply?
        </div>
        <div className="collapse-content text-sm">
          Yes, some scholarships are open to working professionals, especially
          for postgraduate programs or professional development courses. Ensure
          you meet the experience and eligibility criteria specified in the
          scholarship description.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Are there age limits for applicants?
        </div>
        <div className="collapse-content text-sm">
          Certain scholarships may have age restrictions, while others do not.
          Age limits typically apply to undergraduate or early-career programs,
          whereas postgraduate or professional scholarships are often more
          flexible. Always verify the age requirement in the scholarship
          guidelines.
        </div>
      </div>
    </div>
  );
};

export default StudentFaq;
