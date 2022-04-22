import { ChakraProvider } from "@chakra-ui/react";
import React, { useContext, useState, createContext } from "react";

import "../styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const DomainContextProvider = createContext();

export const useDomain = () => useContext(DomainContextProvider);

function MyApp({ Component, pageProps }) {
  const [domainDataProvider, setDomainDataProvider] = useState(null);
  const [domainNameProvider, setdomainNameProvider] = useState(null);

  return (
    <ChakraProvider>

    <DomainContextProvider.Provider
      value={{ domainDataProvider, setDomainDataProvider, domainNameProvider, setdomainNameProvider }}
      >
      <Component {...pageProps} />
    </DomainContextProvider.Provider>
      </ChakraProvider>
  );
}

export default MyApp;
