import "./App.css";
import { useConnectWallet, usePrivy, useWallets } from "@privy-io/react-auth";
import { useAccount } from "wagmi";

function App() {
  const { ready: privyReady } = usePrivy();
  const { ready: walletsReady } = useWallets();
  const addressFromWagmi = useAccount().address;
  console.log({ privyReady, walletsReady, addressFromWagmi });
  const isLoading = !privyReady || !walletsReady;

  if (isLoading) return <div className="App">Loading...</div>;
  return (
    <div className="App">
      <DemoComponent />
    </div>
  );
}

const DemoComponent = () => {
  const { connectWallet } = useConnectWallet();
  const addressFromWagmi = useAccount().address;
  if (addressFromWagmi) {
    return (
      <div>
        <p>Connected Address: {addressFromWagmi}</p>
      </div>
    );
  }

  return (
    <button onClick={connectWallet} className="button">
      Connect Wallet
    </button>
  );
};

export default App;
