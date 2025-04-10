import "./styles.scss";
import Image from "next/image";
import ahaGrayLogo from "../../../..//public/Assets/icons/footer/aha-gray-logo.svg";
import instagramFooter from "../../../..//public/Assets/images/footer/instagram-footer.png";
import facebookFooter from "../../../..//public/Assets/icons/footer/facebook-footer.svg";
import twitterFooter from "../../../..//public/Assets/icons/footer/twitter-footer.svg";
import googlePlayMobile from "../../../..//public/Assets/icons/footer/google-play-mobile.svg";
import appStoreMobile from "../../../..//public/Assets/icons/footer/app-store-mobile.svg";
import quickplayLogo from "../../../..//public/Assets/images/footer/quickplay-logo.png";
import Link from "next/link";
import { IFooterList } from "@/types/component";
import { footerList } from "@/modules/Home/constants/footer";

export const Footer = () => {
  const renderFooterList = ({ header, list }: IFooterList) => (
    <div className="footer-list-right-main" key={header}>
      <p className="footer-list-right-header">{header}</p>
      {list.map((linkItem) => (
        <Link
          key={linkItem.text}
          href={linkItem.link}
          className="movie-list-title"
        >
          {linkItem.text}
        </Link>
      ))}
    </div>
  );
  return (
    <footer>
      <div className="sec-footer-main">
        <div className="footer-list-main">
          <div className="footer-list-img">
            <Link href={""}>
              <Image
                src={ahaGrayLogo}
                alt="Aha gray logo"
                className="aha-gray-logo "
              />
            </Link>
            <h6 className="footer-list-img-header">Connect with us</h6>
            <div className="social-align-main">
              <Link
                href={"https://www.instagram.com/ahavideoin/"}
                target="_blank"
              >
                <Image
                  src={instagramFooter}
                  alt="Instagram logo"
                  className="social-media-icon-size "
                />
              </Link>
              <Link
                href={"https://www.facebook.com/ahavideoIN"}
                target="_blank"
              >
                <Image
                  src={facebookFooter}
                  alt="Facebook logo"
                  className="social-media-icon-size "
                />
              </Link>
              <Link href={"https://x.com/ahavideoIN"} target="_blank">
                <Image
                  src={twitterFooter}
                  alt="Twitter logo"
                  className="social-media-icon-size "
                />
              </Link>
            </div>
            <h6 className="footer-list-img-header">Download aha mobile app</h6>
            <div className="playstore-align-main">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=ahaflix.tv"
                }
                target="_blank"
              >
                <Image
                  src={googlePlayMobile}
                  alt="Google play logo"
                  className="play-store-logo-size "
                />
              </Link>
              <Link
                href={
                  "https://apps.apple.com/in/app/aha-100-local-entertainment/id1488739001"
                }
                target="_blank"
              >
                <Image
                  src={appStoreMobile}
                  alt="App store logo"
                  className="play-store-logo-size "
                />
              </Link>
            </div>
            <div className="contact-us-main">
              Contact us:
              <Link href={"#"} className="contact-us-link">
                support@aha.video
              </Link>
            </div>
          </div>
          {footerList.map(renderFooterList)}
        </div>
        <div className="copyright-align-main">
          <p className="copyright-text">
            © Copyright 2025 Arha Media and Broadcasting Pvt Ltd. All rights
            reserved.
          </p>
          <div>
            <Link
              href={"https://quickplay.com/"}
              className="copyright-powered-by"
            >
              <p className="powered-by-text">Powered by</p>
              <Image
                src={quickplayLogo}
                alt="Quick play logo"
                className="quick-play-logo-size"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
