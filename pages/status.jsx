import Head from "next/head"
import Header from "components/Header"
import Footer from "components/Footer"
import Piwik from "components/Piwik"
import "styles/global.scss"

const Status = () => (
    <div className="content">
        <h1>État des services</h1>
        <div id="iframe-container">
            <iframe
                style={{
                    backgroundColor: "#9a9a9a24",
                    width: "100%",
                    height: "63em",
                    border: "none",
                    padding: "1em 2em 0 2em",
                }}
                src="https://status.openfisca.org"
            />
        </div>

        <style jsx />
    </div>
)

export default () => (
    <div>
        <Head>
            <title>État des services</title>
            <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header page="status" title="État des services" />
        <Status />
        <Footer />
        <Piwik page="status" />
    </div>
)
