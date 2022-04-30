import { IAppConfig } from "../@types/IAppConfig"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"

export const appConfig: IAppConfig = {
    title: "Resume Parser",
    url: siteUrl,
    description: "Tool to see how well top companies such as Figma, Palantir, Netflix, Twitch, Yelp view your resume.",
    keywords: [
        "resume",
        "resume parser",
        "lever",
        "lever resume parser",
        "lever parser",
        "resume reader",
        "lever api",
        "lever resume api",
        "lever resume parser api"],
    previewImage: `${siteUrl}/preview.png`,
}
