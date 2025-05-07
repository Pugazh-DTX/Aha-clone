import MyAhaAddSomething from "@/components/molecules/MyAhaAddSomeThing";
import { continueWatching } from "@/utils/MyAha/MyAha";
import { watchList } from "@/utils/MyAha/MyAha";
import { Rentals } from "@/utils/MyAha/MyAha";
import React from "react";

const MyAhaPage = () => {
  return (
    <div>
      <MyAhaAddSomething props={continueWatching} />
      <MyAhaAddSomething props={watchList} />
      <MyAhaAddSomething props={Rentals} />
    </div>
  );
};

export default MyAhaPage;
