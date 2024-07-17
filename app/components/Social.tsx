import { SocialIcon } from "react-social-icons";
import data from "../constants/social";
import { lightTheme as theme } from "../theme/themes";

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

const Social = () => {
  return (
    <div className="social">
      {data?.social?.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme?.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      ))}
    </div>
  );
};

export default Social;
