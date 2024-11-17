import { BestSection } from "../../components/BestSection/BestSection"
import { FameCount } from "../../components/FameCount/FameCount"
import { FeatureMarque } from "../../components/FeatureMarque/FeatureMarque"
import { Intro } from "../../components/Intro/Intro"
import { InviteMe } from "../../components/InviteMe/InviteMe"
import { JoinMail } from "../../components/JoinMail/JoinMail"
import { LatestReview } from "../../components/LatestReview/LatestReview"


export const Home = () => {
    return (
        <>
        <Intro />
        <FameCount />
        <FeatureMarque />
        <LatestReview />
        <BestSection />
        <JoinMail />
        <InviteMe />
        </>
    )
}
