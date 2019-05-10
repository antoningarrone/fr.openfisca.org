import Layout from "layouts/Layout"

function legal() {
    const page = "legal"
    const title = "Mentions légales"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <h2>Responsable de la publication</h2>
                <p>
                    Laure Lucchesi
                    <br />
                    Directrice d’Etalab
                    <br />
                    20, avenue de Ségur
                    <br />
                    75007 Paris
                    <br />
                    <a href="https://www.etalab.gouv.fr">https://www.etalab.gouv.fr</a>
                </p>

                <h2>Hébergeur</h2>
                <p>
                    Netlify
                    <br />
                    2325 3rd St Suite 215
                    <br />
                    San Francisco, CA 94107, États-Unis
                    <br />
                </p>
            </div>
        </Layout>
    )
}

export default legal
