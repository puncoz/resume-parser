import type { NextPage } from "next"
import Introduction      from "../components/Introduction"
import ResumeParser      from "../components/ResumeParser"

const Home: NextPage = () => {
    return (
        <div className="bg-white h-screen pb-8 sm:pb-12 lg:pb-12">
            <div className="md:container md:mx-auto px-4">
                <div className="flex justify-between">
                    <Introduction/>

                    <ResumeParser/>
                </div>
            </div>
        </div>
    )
}

export default Home
