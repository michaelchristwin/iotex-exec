// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;
import { BrowserProvider } from "ethers";

export async function getProvider() {
  try {
    const provider = new BrowserProvider(window.ethereum);
    return provider;
  } catch (err) {
    console.error("Provider failed");
  }
}
export const execTx = async () => {
  try {
    const provider = await getProvider();

    if (provider) {
      await provider.send("eth_sendRawTransaction", [
        "0xf8a58085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222",
      ]);
    }
  } catch (err) {
    console.error("Tx failed", err);
  }
};

export async function getAc() {
  try {
    const provider = await getProvider();
    if (provider) {
      const net = await provider.getSigner();
      console.log(net);
    }
  } catch (error) {
    console.error(error);
  }
}
