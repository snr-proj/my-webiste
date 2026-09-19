import { siteContent } from "../content/siteContent";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} {siteContent.footer.text}. All rights reserved.
      </p>
    </footer>
  );
}
