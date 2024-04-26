const Logo = (props: { isNavExpaned: boolean }) => {
  const enabledColour =
    "cursor-default text-3xl font-bold uppercase text-blueN lg:hidden";
  const disabledColour =
    "cursor-default text-3xl font-bold uppercase text-slate-100 lg:hidden";
  return (
    <>
      <a
        href="#"
        className={props.isNavExpaned ? enabledColour : disabledColour}
      >
        NH
      </a>
      <a
        href="#"
        className="hidden cursor-default text-3xl font-bold uppercase text-slate-100 lg:inline"
      >
        Noel Huibers
      </a>
    </>
  );
};

export default Logo;
