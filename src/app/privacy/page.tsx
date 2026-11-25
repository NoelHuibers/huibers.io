import LegalPage from "~/components/legal/LegalPage";
import { OperatorAddress, OperatorEmail } from "~/components/legal/Operator";

export const metadata = {
  title: "Privacy Policy | Huibers",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <h2>Controller</h2>
      <p>
        The controller responsible for processing personal data on this website
        (Art. 4(7) GDPR) is:
      </p>
      <OperatorAddress />
      <p>
        E-mail: <OperatorEmail />
      </p>

      <h2>Overview</h2>
      <p>
        This website does not use cookies or your browser&apos;s local storage,
        and it uses no analytics or tracking tools. Personal data is processed
        only to deliver the website and, if you contact me, to answer your
        request.
      </p>

      <h2>Hosting and content delivery</h2>
      <p>
        When you open this website, your browser sends technical data with every
        request: your IP address, the date and time, the requested page, the
        referring page, and your browser and operating system. This data passes
        through Cloudflare, Inc., which delivers the website and protects it
        against attacks, and Vercel Inc., which hosts the website. Both
        providers process this data to deliver the website and keep it secure,
        and may record it in server logs. This can involve processing in the
        USA. Cloudflare also asks your browser to report failed connections to
        Cloudflare (Network Error Logging).
      </p>
      <p>
        Legal basis: Art. 6(1)(f) GDPR. My legitimate interest is delivering
        this website reliably and securely.
      </p>

      <h2>Fonts</h2>
      <p>
        The font used on this website is served from this website&apos;s own
        host. Your browser does not connect to Google Fonts or any other font
        service.
      </p>

      <h2>Contact form and e-mail</h2>
      <p>
        If you use the contact form, I process your name, your e-mail address
        and your message to answer your request. The form sends them to me as an
        e-mail through Google&apos;s Gmail service. The same applies to the data
        you send me if you write to me by e-mail directly.
      </p>
      <p>
        Legal basis: Art. 6(1)(b) GDPR if your request concerns a contract or
        steps before one, otherwise Art. 6(1)(f) GDPR. My legitimate interest is
        answering your request. Providing this data is voluntary, but I cannot
        answer you without it.
      </p>

      <h2>External links</h2>
      <p>
        This website links to GitHub, LinkedIn and other websites. No data is
        sent to them until you click a link. From then on, the privacy policy of
        that website applies.
      </p>

      <h2>Your rights</h2>
      <p>Under the GDPR you have the right to:</p>
      <ul>
        <li>access your personal data (Art. 15 GDPR),</li>
        <li>have it corrected (Art. 16 GDPR),</li>
        <li>have it erased (Art. 17 GDPR),</li>
        <li>restrict its processing (Art. 18 GDPR),</li>
        <li>receive it in a portable format (Art. 20 GDPR),</li>
        <li>
          object to processing based on Art. 6(1)(f) GDPR on grounds relating to
          your particular situation (Art. 21 GDPR).
        </li>
      </ul>
      <p>
        To use these rights, e-mail me at <OperatorEmail />.
      </p>
      <p>
        You also have the right to lodge a complaint with a data protection
        supervisory authority, in particular in the Member State of your
        habitual residence, your place of work or the place of the alleged
        infringement (Art. 77 GDPR).
      </p>
    </LegalPage>
  );
}
