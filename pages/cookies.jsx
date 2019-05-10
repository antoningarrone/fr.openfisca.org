import Layout from "layouts/Layout"

function cookies() {
    const page = "cookies"
    const title = "Informatique & libertés"

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <p>
                    Lorsque vous visitez ce site web, nous laissons un petit fichier texte (un
                    « cookie ») sur votre ordinateur. Cela nous permet de mesurer combien de
                    visites nous avons et quelles sont les pages les plus regardées.
                </p>

                <div className="iframe-container">
                    <iframe
                        title={title}
                        src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr"
                        style={{
                            backgroundColor: "#9a9a9a24",
                            width: "70%",
                            border: "none",
                            padding: "1em 2em 0 2em",
                        }}
                    />
                </div>

                <h2>
                    Ce site web n’indique pas de bannière de consentement aux cookies.
                    Pourquoi ?
                </h2>

                <p>
                    <a href="https://matomo.org/">Matomo</a>
                    {" "}
                    - notre service de suivi - est configuré en
                    conformité avec les règles de gestion de « Cookies » de la
                    <a href="https://www.cnil.fr/fr/solutions-pour-les-cookies-de-mesure-daudience">CNIL</a>
                    des autorités françaises (Matomo anonymise votre adresse IP de façon à rendre
                    impossible le lien entre votre visite et vous-même).
                </p>

                <h2>Je contribue à vos données. Puis-je y accéder ?</h2>

                <p>
                    Bien sûr ! Les données d’analyse d’OpenFisca sont librement disponible ici :
                    <a href="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=4&period=range&date=previous30#?module=Dashboard&action=embeddedIndex&idSite=4&period=range&date=previous30&idDashboard=1">
                        stats.data.gouv.fr
                    </a>
                </p>
            </div>

            <style jsx>
                {`
                    .iframe-container {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }

                    a {
                        color: #6d69fb;
                    }
                `}
            </style>
        </Layout>
    )
}

export default cookies
