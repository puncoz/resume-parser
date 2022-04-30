import {
    Head,
    Html,
    Main,
    NextScript,
}                    from "next/document"
import { appConfig } from "../config/app.config"

const MainDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="title" content={appConfig.title}/>

                <meta name="description" content={appConfig.description}/>
                <meta name="keywords" content={appConfig.keywords.join(",")}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={appConfig.url}/>
                <meta property="og:title" content={appConfig.title}/>
                <meta property="og:description" content={appConfig.description}/>
                <meta property="og:image" content={appConfig.previewImage}/>

                <meta property="twitter:card" content={appConfig.previewImage}/>
                <meta property="twitter:url" content={appConfig.url}/>
                <meta property="twitter:title" content={appConfig.title}/>
                <meta property="twitter:description" content={appConfig.description}/>
                <meta property="twitter:image" content={appConfig.previewImage}/>
            </Head>

            <body className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

export default MainDocument
