import { useWeb3React } from "@web3-react/core";

import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";
import { Container } from "@mui/material";

import React from "react";
import NFTGrid from "../components/layouts/NFTGrid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MainLayout from "../components/layouts/MainPage";

function Home() {
  const { account, library } = useWeb3React();
  const triedToEagerConnect = useEagerConnect();
  const isConnected = typeof account === "string" && !!library;

  return (
    <MainLayout>
      <main>
        <Container maxWidth="lg">
          <Box>
            <Box>
              <h1>Welcome to Bluckchain</h1>
            </Box>
            <Box>
              {isConnected && (
                <section>
                  <ETHBalance />
                  <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />

                  <Link href="/profile">
                    <Button variant="contained">Profile</Button>
                  </Link>

                </section>
              )}
            </Box>
            {!isConnected && (
              <Account triedToEagerConnect={triedToEagerConnect} />
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }} style={{ marginTop: "20px" }}>
            <NFTGrid addresses={[]}></NFTGrid>
          </Box>
        </Container>
        <style jsx>{`
          nav {
            display: flex;
            justify-content: space-between;
          }

          main {
            text-align: center;
          }
        `}</style>
      </main>
    </MainLayout>
  );
}

export default Home;
