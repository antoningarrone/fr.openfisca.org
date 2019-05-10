import Layout from "layouts/Layout"

function status() {
    const page = "status"
    const title = "État des services"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <h1>{title}</h1>
                <div id="iframe-container">
                    <iframe
                        title={title}
                        src="https://status.openfisca.org"
                        style={{
                            backgroundColor: "#9a9a9a24",
                            width: "100%",
                            height: "63em",
                            border: "none",
                            padding: "1em 2em 0 2em",
                        }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default status
