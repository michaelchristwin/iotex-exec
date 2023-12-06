import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import Layout from "./components/Layout.tsx";

const iotex = {
  chainId: 4689,
  name: "IoTeX Mainnet",
  currency: "IOTX",
  explorerUrl: "https://iotexscan.io",
  rpcUrl: "https://babel-api.mainnet.iotex.io",
};
const iotexTestnet = {
  chainId: 4690,
  name: "IoTeX Testnet",
  currency: "IOTX",
  explorerUrl: "https://testnet.iotexscan.io/",
  rpcUrl: "https://babel-api.testnet.iotex.io",
};

const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

const projectId = import.meta.env.VITE_PROJECT_ID;

createWeb3Modal({
  ethersConfig: defaultConfig({
    metadata,
    defaultChainId: 4689,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: "...", // used for the Coinbase SDK
  }),
  chains: [iotex, iotexTestnet],
  projectId,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
