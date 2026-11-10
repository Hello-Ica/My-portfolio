import "./Contact.css";
import illustration from "./assets/contact/contact-illustration.svg";
import phoneIcon from "./assets/contact/phone.svg";
import emailIcon from "./assets/contact/email.svg";
import downloadIcon from "./assets/contact/download.svg";
import linkedinIcon from "./assets/contact/linkedin.svg";
import instagramIcon from "./assets/contact/instagram.svg";
import facebookIcon from "./assets/contact/facebook.svg";

const socials = [
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    label: "www.linkedin.com/in/maria-jenica-herrera-2b346a41a",
    url: "https://www.linkedin.com/in/maria-jenica-herrera-2b346a41a",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    label: "https://www.instagram.com/icanezzz/",
    url: "https://www.instagram.com/icanezzz/",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    label: "https://www.facebook.com/jenica.herrera.3",
    url: "https://www.facebook.com/jenica.herrera.3",
  },
];
const RESUME_URL = "/Maria_Jenica_Herrera_Resume.pdf";
const RESUME_NAME = "Maria-Jenica-Herrera-Resume.pdf";

function fallbackDownload() {
  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = RESUME_NAME;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function handleDownload() {
  if (!("showSaveFilePicker" in window)) {
    fallbackDownload();
    return;
  }

  try {
    const handle = await window.showSaveFilePicker({
      suggestedName: RESUME_NAME,
      types: [
        {
          description: "PDF document",
          accept: { "application/pdf": [".pdf"] },
        },
      ],
    });

    const response = await fetch(RESUME_URL);
    if (!response.ok) throw new Error("Resume file not found");
    const blob = await response.blob();

    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
  } catch (err) {
    if (err.name !== "AbortError") {   // AbortError = the visitor pressed Cancel
      fallbackDownload();
    }
  }
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-left">
        <h2 className="contact-title">Connect with Me!</h2>
        <img
          className="contact-image"
          src={illustration}
          alt="Illustration of a person holding a photo frame"
        />
      </div>

      <div className="contact-right">
        <div className="contact-top">
          <a className="contact-direct" href="tel:09288508351">
            <img className="direct-icon" src={phoneIcon} alt="" />
            <span>09288508351</span>
          </a>

        <a
          className="contact-direct"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=herreramariajenica@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img className="direct-icon" src={emailIcon} alt="" />
        <span className="underlined">herreramariajenica@gmail.com</span>
        </a>
        </div>

        <ul className="social-list">
          {socials.map((s) => (
            <li key={s.name} className="social-item">
              <a
                className="social-icon-link"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name} (opens in a new tab)`}
              >
                <img className="social-icon" src={s.icon} alt="" />
              </a>

              <div className="social-text">
                <h3 className="social-name">{s.name}</h3>
                <a
                  className="social-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </div>
            </li>
          ))}
        </ul>

      <button type="button" className="resume-button" onClick={handleDownload}>
      <img className="resume-icon" src={downloadIcon} alt="" />
      <span>Download Maria Jenica's Resume</span>
      </button>
      </div>
    </section>
  );
}

export default Contact;