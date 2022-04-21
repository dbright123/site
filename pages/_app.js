//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Fragment } from 'react';
import Head from "next/head";


function MyApp({ Component, pageProps }) {
    const title = "Space Matrix International Limited";
    const desc = `
        Space Matrix Solutions is a fast growing technology-focused company,
        providing ICT solution to Enterprises, Schools and SMEs.
        Our solution will offer your organisation the ability to connect to the rest of world,
        access global resources and the ability to increase productivity by offering value added service to your clients.
    `;
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta charset="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content={desc} name="description" />
                <meta content="Space, Solution, Technology, Network, School, ICT" name="keywords" />
                <link href="logo.png" rel="icon"/>
                <link href="logo.png" rel="apple-touch-icon" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

            </Head>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp
