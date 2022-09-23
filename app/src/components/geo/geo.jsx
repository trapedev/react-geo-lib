import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import japan from "../../data/japan";

export default function Geo() {
  const [isLoading, setIsLoading] = useState(true);
  const [geoData, setGeoData] = useState(null);
  const loadGeoData = () => {
    setGeoData(japan);
    setIsLoading(false);
  };
  useEffect(() => {
    loadGeoData();
  }, []);
  return (
    <>
      <div>読み込み</div>
    </>
  );
}
