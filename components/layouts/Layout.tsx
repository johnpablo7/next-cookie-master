import Head from "next/head";
import { FCC } from "../../types/fc";
import { Navbar } from "../ui";

export const Layout: FCC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hola</title>
      </Head>

      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </>
  );
};
