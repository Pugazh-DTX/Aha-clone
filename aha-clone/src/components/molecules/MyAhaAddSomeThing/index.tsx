"use client";
import { Button } from "@/components/atoms";
import React from "react";
import "./styles.scss";
import { IMyAhaAddSomething } from "@/utils/MyAha/MyAha";
import { useRouter } from "next/navigation";

const MyAhaAddSomething = ({ props }: { props: IMyAhaAddSomething }) => {
  const router = useRouter();
  return (
    <section>
      {/* left section */}
      <div className="myaha-add-container">
        <div className="myaha-add-left-container">
          <div>
            <h2 className="myaha-add-heading">{props.title}</h2>
            <p className="myaha-add-description">{props.description}</p>
          </div>
          {/* button */}
          <div className="myaha-button-container">
            <Button
              wrapperClass="myaha-add-button"
              onClick={() => router.push("/")}
            >
              Go Home
            </Button>
          </div>
        </div>
        {/* right section */}
        <div className="myaha-add-right-container">
          <div className="myaha-add-right-container-circle">
            <div
              className="myaha-add-right-container-circle-plus"
              style={{
                backgroundImage: `url(${props.img.src})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAhaAddSomething;
