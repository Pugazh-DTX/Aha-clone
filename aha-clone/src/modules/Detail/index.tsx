"use client";
import { useParams } from "next/navigation";
import "./styles.scss";
import { useAppSelector } from "@/store/hooks";
import React from "react";
const DetailDescription = () => {
  const { type, id } = useParams();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [resource, setResource] = React.useState(null);
  const config = useAppSelector((state) => state.config);
  let getConfigs: any[] = config.configData?.config || [];
  let endpoint =
    getConfigs.find((f) => f.key === "vodMetaDataURL")?.value || "";

  const getDetail = async () => {
    setLoading(true);
    let response;
    try {
      response = await fetch(
        `${endpoint}/content/urn/resource/catalog/${type}/${id}?reg=in&acl=ta&dt=web&ipr=true&itvod=true`
      );
      const data = await response.json();
      setResource(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("Error", err);
    }
  };

  React.useEffect(() => {
    if (endpoint !== "") getDetail();
  }, [endpoint]);

  console.log(resource, "resource");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type}-{id}
      <section>
        <h1>movie detail</h1>
      </section>
    </div>
  );
};
export default DetailDescription;
