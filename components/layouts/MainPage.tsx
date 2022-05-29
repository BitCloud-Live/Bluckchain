import { MainLayoutProps } from "../../utils/types";
import PrimarySearchAppBar from "../../components/layouts/NavBar";
import Head from "next/head";

export default function MainLayout(props: MainLayoutProps) {
    return (
        <div>
            <Head>
                <title>Bluckchain - take your chance</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <PrimarySearchAppBar></PrimarySearchAppBar>
            </header>
            {props.children}

        </div>
    )
}

