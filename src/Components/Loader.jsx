import RotateLoader from "react-spinners/RotateLoader";
export default function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen grid place-items-center bg-[#3b3b3b89] pointer-events-auto z-50">
      <RotateLoader color="#d67f36" />
    </div>
  );
}
