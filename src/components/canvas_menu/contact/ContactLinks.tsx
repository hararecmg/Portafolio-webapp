import { AcademicLink } from "./AcademicLink"
import { GithubLink } from "./GithubLink"
import { LinkedinLink } from "./LinkedinLink"

export const ContactLinks = () => {

    //code

    return (
        <nav className='off-canvas__contact'>
            <ul className='off-canvas__list'>
                <LinkedinLink />
                <GithubLink />
                <AcademicLink />
            </ul>
        </nav>
    )
}