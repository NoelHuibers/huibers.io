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
        className="hidden cursor-default font-bold text-3xl text-slate-100 uppercase lg:inline"
      >
        Noel Huibers
      </a>
    </>
  );
};

export default Logo;
