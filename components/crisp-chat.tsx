"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fe38526d-fe94-43c4-ad1f-54c6c1715557");
  }, []);

  return null;
};