import { Button } from "@/components/atoms";
import "./styles.scss";

import Image from "next/image";
export const MovieDetailBanner = ({ data }: { data: any }) => {
  return (
    <div
      className="movie-detail-main"
      style={{
        backgroundImage:
          'url("https://image-resizer-cloud-api.akamaized.net/image/F2E3201D-E2C8-4BF0-927C-52DF484F8CBE/0-16x9.jpg?width=2050&updatedTime=2025-04-11T12:56:39Z&dt=Web")',
      }}
    >
      <div className="bg-black-main"></div>
      <div className="min-scrn-img-main">
        <Image
          src="https://image-resizer-cloud-api.akamaized.net/image/F2E3201D-E2C8-4BF0-927C-52DF484F8CBE/0-16x9.jpg?width=2050&updatedTime=2025-04-11T12:56:39Z&dt=Web"
          alt="Madurai Paiyanum Chennai Ponnum"
          unoptimized
          width={2050}
          height={1153}
          className="min-scrn-img-size"
        />
      </div>
      {/*left del-ali-main */}
      <div className="del-ali-main">
        <div className="box-ali-main">
          {data.premium && (
            <div className="box-one">
              <div className="right-bg-img"></div>
              Premium
            </div>
          )}
          {data["U/A"] && <div className="box-bg-card">U/A</div>}
          {data["16+"] && <div className="box-bg-card">16+</div>}
        </div>
        {data.hideText && <h2 className="del-hide-text">{data.hideText}</h2>}
        <h1 className="del-header-main">{data.bannerTitle}</h1>
        <div>
          <p className="del-del-text">{data.bannerSupOne}</p>
          <p className="del-del-text">{data.bannerSupTwo}</p>
        </div>
        <div className="del-detail-ali-main">
          <p className="del-detail-p">{data.bannerDes}</p>
          <div className="show-more-text"> Show More... </div>
        </div>
        <div className="two-btn-ali-main">
          <div className="two-btn-flex">
            <button className="play-trailer-btn">Play Trailer</button>
            <button className="subscribe-now-btn"> Subscribe Now </button>
          </div>
          <div className="share-icon-div-main">
            <div className="share-icon-sec-div">
              <button className="del-share-icon-btn">
                <div className="share-icon-size"></div>
              </button>
              <p className="share-icon-des">Share</p>
            </div>
          </div>
        </div>
      </div>
      {/* left bg main and video section */}
      {/* <div className="bg-left-black-main">
        <div className="left-bg-div">
          <video controls className="del-video-main">
            <source
              src="https://www.aha.video/video-example.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.aha.video/video-example.webm"
              type="video/webm"
            />
            <source
              src="https://www.aha.video/video-example.ogg"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}
    </div>
  );
};
