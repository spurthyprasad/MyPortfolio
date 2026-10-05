import { useState } from "react";

const EMAIL = "snspurthy@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/spurthy-s-n-3164ab232/";

export default function Footer() {
  const [copyLabel, setCopyLabel] = useState("Copy email");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyLabel("Copied");
    } catch (e) {
      setCopyLabel("Select and copy");
    }
    setTimeout(() => setCopyLabel("Copy email"), 1800);
  };

  return (
    <>
      <section className="pf-block pf-contact" id="contact">
        <header>
          <span className="pf-label">Contact</span>
          <h2>Say hello</h2>
        </header>
        <div>
          <h2 className="pf-big">Building something, or teaching it? Let's talk.</h2>
          <div className="pf-mailrow">
            <span className="pf-mail">{EMAIL}</span>
            <button className="pf-btn pf-btn-primary" type="button" onClick={copyEmail}>
              {copyLabel}
            </button>
            <a className="pf-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="pf-footer">
        <span>Spurthy S N · Bengaluru</span>
        <span>Assistant Professor, MCA · BMSIT&amp;M</span>
      </footer>
    </>
  );
}
