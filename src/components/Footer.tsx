import Link from "next/link";

const Footer = () => (
  <footer className="flex justify-center space-x-6 bg-blueN px-6 py-4 text-slate-100">
    <Link href="/impressum" className="hover:text-redN">
      Legal Notice
    </Link>
    <Link href="/privacy" className="hover:text-redN">
      Privacy Policy
    </Link>
  </footer>
);

export default Footer;
