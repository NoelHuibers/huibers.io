import LegalPage from "~/components/legal/LegalPage";
import { OperatorAddress, OperatorEmail } from "~/components/legal/Operator";

export const metadata = {
  title: "Legal Notice | Huibers",
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Legal Notice (Impressum)">
      <h2>Information according to § 5 DDG</h2>
      <OperatorAddress />
      <h2>Contact</h2>
      <p>
        Phone: <a href="tel:+4915792341658">+49 157 9234 1658</a>
        <br />
        E-mail: <OperatorEmail />
      </p>
      <h2>Responsible for content according to § 18(2) MStV</h2>
      <OperatorAddress />
    </LegalPage>
  );
}
