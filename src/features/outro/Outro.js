// OutroComponent.jsx
import GenericComponent from "../generic-component/GenericComponent";
import OutroLogo from "../../assets/images/outro-logo.png";

const OutroComponent = () => {
  return (
    <GenericComponent
      title="Outro"
      description="This is Static Outro Description, but let me tell you the cool thing, I used the same Generic component for both outro and meeting-time 🙌🏻"
      avatarSrc={OutroLogo}
    />
  );
};

export default OutroComponent;
