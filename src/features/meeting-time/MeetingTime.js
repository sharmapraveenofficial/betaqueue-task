import GenericComponent from "../generic-component/GenericComponent";
import LightningBold from "../../assets/images/lightning-bolt.png";

export default function ScheduleTriggerBox() {
  return (
    <GenericComponent
      title="Trigger By Schedule"
      description="Weekly from Monday to Friday, at 10:00 AM, in user's local timezone"
      avatarSrc={LightningBold}
      renderDivider={true}
    />
  );
}
