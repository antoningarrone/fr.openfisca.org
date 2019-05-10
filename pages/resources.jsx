import Layout from "layouts/Layout"
import CardResource from "components/CardResource"

function Resources() {
    const page = "resources"
    const title = "Ressources"

    const resourceList = [
        {
            img: "/static/icons/france.svg",
            title: "Système : France",
            desc: "Le système contient la majorité des impôts et des prestations sociales. 45 contributeurs au projet",
            linkexplorer: "https://fr.openfisca.org/legislation",
            linkgit: "https://github.com/openfisca/openfisca-france",
        },
        {
            img: "/static/icons/nz.svg",
            title: "Système : Aotearoa Nouvelle-Zélande",
            desc: "15 contributeurs au projet",
            linkexplorer: "https://www.rules.nz",
            linkgit: "https://github.com/ServiceInnovationLab/openfisca-aotearoa",
        },
        {
            img: "/static/icons/barcelona.svg",
            title: "Système : Barcelone",
            desc: "4 contributeurs au projet",
            linkgit: "https://github.com/lesmevesajudes/openfisca-barcelona",
        },
        {
            img: "/static/icons/tunisia.svg",
            title: "Système : Tunisie",
            desc: "8 contributeurs au projet",
            linkgit: "https://github.com/openfisca/openfisca-tunisia",
        },
        {
            img: "/static/icons/italy.svg",
            title: "Système : Italie",
            desc: "3 contributeurs au projet",
            linkgit: "https://github.com/openfisca/openfisca-italy",
        },
        {
            img: "/static/icons/senegal.svg",
            title: "Système : Sénégal",
            desc: "13 contributeurs au projet",
            linkgit: "https://github.com/openfisca/openfisca-senegal",
        },
        {
            img: "/static/icons/galle.svg",
            title: "Système : Nouvelle-Galle du sud",
            desc: "4 contributeurs au projet",
            linkgit: "https://github.com/openfisca/openfisca-italy",
        },
    ]

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <ul className="flex__container">
                    {resourceList.map(resource => (
                        <li className="flex__item" key={resource.title}>
                            <CardResource
                                img={resource.img}
                                title={resource.title}
                                desc={resource.desc}
                                linkexplorer={resource.linkexplorer}
                                linkgit={resource.linkgit}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>
                {`
                    .flex__container {
                        flex-wrap: wrap;
                    }

                    @media (min-width: 40rem) {
                        .flex__item:nth-child(3n + 1) {
                            padding-left: 0;
                        }
                    }
            `}
            </style>
        </Layout>
    )
}

export default Resources
