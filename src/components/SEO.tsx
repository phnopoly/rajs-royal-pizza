import React from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

interface SEOProps {
	description?: string
	lang?: string
	meta?: React.ComponentProps<typeof Helmet>["meta"]
	title: string | undefined
}

const SEO: React.FC<SEOProps> = ({ description = "", lang = "en", meta = [], title }: SEOProps) => {
	const site = {
		siteMetadata: {
			title: "Raj's Royal Pizza",
			description: "An application to create and order awesome pizzas!",
			author: "Phong Vo"
		}
	}

	const metaDescription = description || site.siteMetadata.description

	const metaDefaults: React.ComponentProps<typeof Helmet>["meta"] = [
		{
			name: `description`,
			content: metaDescription
		},
		{
			property: `og:title`,
			content: title
		},
		{
			property: `og:description`,
			content: metaDescription
		},
		{
			property: `og:type`,
			content: `website`
		},
		{
			name: `twitter:card`,
			content: `summary`
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata.author
		},
		{
			name: `twitter:title`,
			content: title
		},
		{
			name: `twitter:description`,
			content: metaDescription
		}
	]

	return (
		<HelmetProvider>
			<Helmet
				htmlAttributes={{
					lang
				}}
				meta={metaDefaults.concat(meta)}
				title={title}
			/>
		</HelmetProvider>
	)
}

export default SEO
