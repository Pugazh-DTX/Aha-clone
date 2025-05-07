import AccountIcon from "./account";
import DeviceIcon from "./device";
import ParentalIcon from "./parental";
import SubIcon from "./sub";
import SettingIcon from "./setting";
import UserIcon from "./user";

interface IconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const Icons: Record<string, React.FC<IconProps>> = {
  "Account Info": AccountIcon,
  "Subscription & Rentals": SubIcon,
  "Device Management": DeviceIcon ,
  "User Profiles": UserIcon,
  "Parental Control": ParentalIcon,
  "App Settings": SettingIcon,
};

export default Icons;
