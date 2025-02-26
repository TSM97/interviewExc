import LoginSVG from "../../../svg/LoginSVG";

export default function LeftPartial() {
  return (
    <div className="flex-1 xl:flex hidden max-w-[50%] relative">
      <div className="absolute left-0 inset-0">
        <LoginSVG />
      </div>
    </div>
  );
}
