import Link from 'next/link'

const Header = () => (
    <header className="main-header">
		<div className='hero'>
			<ul>
				<li><a href="#trio-outils">Outils</a></li>
				<li><a><img src="/static/images/GitHub-Mark-Light-64px.png" alt=""/>Code source</a></li>
				<li><a href="http://openfisca.org/doc/">Documentation</a></li>
			</ul>

			<div id='logo-large'>
				<img src='https://fr.openfisca.org/hotlinks/logo-openfisca.svg' />
			</div>

			<div id='pitch'>
				<h1>OpenFisca modélise le système socio-fiscal Français en code informatique.</h1>
				<p>Son moteur de microsimulation aide à comprendre les lois, analyser leurs changements et simuler des situations.</p>
				<p>Entièrement libre et gratuit, modulable et réutilisable, OpenFisca transforme la legislation en logiciel.</p>

				<a id='cta'>DECOUVREZ COMMENT</a>
			</div>
		</div>

		<style jsx>{`
			header {
				margin-bottom: 3em;
				background: #1d3242;
				padding: 0 1em;
				color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
			}

			header > ul {
				display: flex;
				padding: 1em 0;
				min-height: 3em;
				list-style-type: none;
				margin: 0;
				align-self: flex-end;
				font-size: 80%;
				align-items: center;
			}

			header > ul > li + li {
				margin-left: 1em;
			}

			header li {
				display: inline;
				list-style: none;
				margin: 7em;
			}

			li img {
				max-width: 1em;
				margin-right: 5px;
			}

			header > ul > li a {
				border-radius: .2em;
				text-decoration: none;
				padding: 5px 10px;
				
			}

			#logo-large {
				float: left;
				margin-right: 6em;
				margin-bottom: 2em;
			}

			#logo-large img{
				width: 20em;
			}

			#pitch {
				margin:1em;
				font-size: 1.2em;
			}

			#cta {
				margin-top: 2em;
				margin-bottom: 3em;
			}

			a {
				color: #ffffff;
				background-color: #2b6a8d;
				border-color: #2b6a8d;
				border: 1px solid transparent;
				border-radius: 4px;
				display: inline-block;
				padding: 6px 12px;
				margin-bottom: 0;
				font-size: 1em;
				font-weight: 400;
				line-height: 1.5;
				text-align: center;
				white-space: nowrap;
				vertical-align: middle;
			}


			header .hero {
				text-align: center;
				padding: 2.5em 0 4.5em;
				font-family: "Arial";
			}

			header:not(.main-header) {
				padding: 0 1em;
				display: flex;
				align-items: center;
				background: #1d3242;
				justify-content: space-between;
				flex-direction: row;
			}
			
			header:not(.main-header) > ul {
				align-self: center;
			}

			@media (max-width: 720px) {
				header > ul {
				align-self: center;
				}
			
				header > ul > li {
					display: flex;
				}
			
				header:not(.main-header) {
					flex-wrap: wrap;
				}
			
				header:not(.main-header) .intro {
					margin-top: 1em;
				}
		`}</style>
	</header>
	)

export default Header