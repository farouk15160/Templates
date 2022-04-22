import React, { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import TeamplateOne from "../components/teamplate-1/TeamplateOne";


import { domains } from "../domains";
import { useDomain } from "./_app";

export default function Home( {domainData} ) {
  const { 
    setDomainDataProvider, domainNameProvider, setdomainNameProvider
  } =  useDomain();

  useEffect(() => {
    if(!domainData) return;
    setDomainDataProvider(domainData)
    setdomainNameProvider(window.location.hostname)
  }, [domainData])

  return domainNameProvider && domains[domainNameProvider].template;
}


export const getStaticProps = async () => {
  const res = await fetch(
    `https://portfolio.orkabit.com/api/v1/auth/domain/client?domainName=${window.location.hostname}`
  );

  const data = await res.json();

  return {
    props: { domainData: data },
  };
};