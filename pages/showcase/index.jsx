import Layout from "layouts/Layout"
import CardProject from "components/CardProject"

function Showcase() {
    const page = "showcase"
    const title = "Projets"

    const projectList = [
        {
            href: "mesAides",
            img: "/static/projects/mesaides.png",
            title: "MesAides",
            desc: "MesAides renseignent les citoyens français sur leur éligibilité à 32 prestations sociales.",
            attribute1: "France",
            attribute2: "API Web",
            attribute3: "Prestations sociales",
        },
        {
            href: "lexImpact",
            img: "/static/projects/leximpact.png",
            title: "LexImpact",
            desc: "Ce projet en cours vise à équiper les administrateurs de l’Assemblée Nationale avec un outil de simulation d’impact de réformes.",
            attribute1: "France",
            attribute2: "API Python",
            attribute3: "Simulation de réformes",
        },
        {
            href: "taxIpp",
            img: "/static/projects/taxipp.png",
            title: "Tax IPP",
            desc: "Ce modèle apparie données administratives et données d'enquête pour les injectées dans openfisca afin d'analyser les effets du système socio-fiscal sur les ménages.",
            attribute1: "France",
            attribute2: "API Python",
            attribute3: "Simulation de réformes",
        },
        {
            href: "ratesRebates",
            img: "/static/projects/ratesrebates.png",
            title: "Rates Rebates",
            desc: "Ce prototype réalisé par l’équipe d’innovation gouvernementale de Nouvelle-Zélande teste le versement automatique d’une prestation sociale.",
            attribute1: "Nouvelle-Zélande",
            attribute2: "API Web",
            attribute3: "Prestations sociales",
        },
        {
            href: "fastoche",
            img: "/static/projects/fastoche.png",
            title: "Fastoch€",
            desc: "Une application pour éviter les fins de mois difficiles. Suivez votre budget sans effort en connectant votre compte courant.",
            attribute1: "France",
            attribute2: "API Web",
            attribute3: "Prestations sociales",
        },
    ]

    return (
        <Layout page={page} title={title}>
            <div className="content">
                <ul className="flex__container">
                    {projectList.map(project => (
                        <li className="flex__item" key={project.title}>
                            <a href={project.href}>
                                <CardProject
                                    img={project.img}
                                    title={project.title}
                                    desc={project.desc}
                                    attribute1={project.attribute1}
                                    attribute2={project.attribute2}
                                    attribute3={project.attribute3}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>
                {`
                    li {
                        list-style: none;
                    }

                    .flex__container {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    @media (max-width: 720px) {
                        .content {
                            padding: 0 1em 1em 1em;
                        }
                    }
                `}
            </style>
        </Layout>
    )
}

export default Showcase
