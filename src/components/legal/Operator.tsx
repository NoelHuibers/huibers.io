export const OPERATOR_EMAIL = "noel@huibers.io";

export const OperatorAddress = () => (
  <address className="not-italic">
    Noel Huibers
    <br />
    c/o Impressumservice Dein-Impressum
    <br />
    Stettiner Str. 41
    <br />
    35410 Hungen
    <br />
    Germany
  </address>
);

export const OperatorEmail = () => (
  <a href={`mailto:${OPERATOR_EMAIL}`}>{OPERATOR_EMAIL}</a>
);
