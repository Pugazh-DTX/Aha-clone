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
  info: AccountIcon,
  subscription: SubIcon,
  settings: SettingIcon,
  device: DeviceIcon,
  profiles: UserIcon,
  parental: ParentalIcon,
};

export default Icons;
