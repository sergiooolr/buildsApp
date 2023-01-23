import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "@/components/login";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <Head>
        <title>BuildApp</title>
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
}
