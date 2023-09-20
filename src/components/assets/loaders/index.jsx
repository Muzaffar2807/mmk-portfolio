import { InfinitySpin, TailSpin } from "react-loader-spinner";
import "./Loaders.scss";

export const LazyLoader = () => {
  return (
    <div className="loader-main">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export const ButtonLoader = ({ color }) => {
  return (
    <TailSpin
      height="1.5rem"
      color={color ? color : "white"}
      radius="2"
      wrapperClass="loader-button"
      visible={true}
    />
  );
};
