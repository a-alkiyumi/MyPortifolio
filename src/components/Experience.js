import React, { useState } from "react";
import "./Experience.css";
import experienceData from "../data/experienceData.js";

const filters = [
  { label: "All", value: "all" },
  { label: "Work & Internships", value: "work" },
  { label: "Education", value: "edu" },
];

const badgeMap = {
  work: { className: "badge-work", label: "work" },
  free: { className: "badge-free", label: "freelance" },
  edu: { className: "badge-edu", label: "education" },
};

const dotMap = {
  work: "dot-work",
  free: "dot-free",
  edu: "dot-edu",
};

const companyColorMap = {
  work: "",
  free: "company-free",
  edu: "company-edu",
};

const tagColorMap = {
  work: "tag-work",
  free: "tag-free",
  edu: "tag-edu",
};

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? experienceData
      : experienceData.filter((item) => item.type === activeFilter);

  return (
    <section className="experience-section" id="experience">
      <p className="eyebrow">what i've done</p>
      <h2 className="section-heading">Experience</h2>
      <div className="accent-line" />

      <div className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filtered.map((item, index) => (
          <div className="tl-item" key={item.id}>
            <div className="tl-left">
              <span className="tl-year">{item.period}</span>
              <span className="tl-duration">{item.duration}</span>
            </div>

            <div className="tl-mid">
              <div className={`tl-dot ${dotMap[item.type]}`} />
              {index < filtered.length - 1 && <div className="tl-bar" />}
            </div>

            <div className="tl-right">
              <div className="tl-card">
                <div className="card-top">
                  <span className="tl-role">{item.role}</span>
                  <span className={`badge ${badgeMap[item.type].className}`}>
                    {badgeMap[item.type].label}
                  </span>
                </div>
                <p className={`tl-company ${companyColorMap[item.type]}`}>
                  {item.company} · {item.location}
                </p>
                <p className="tl-desc">{item.description}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag ${tagColorMap[item.type]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}