import './Projects.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle.jsx';
import GhostwriterMockup from '../../assets/twitter-ghostwriter-mockup.webp';
import CombatShopMockup from '../../assets/mma-shop-mockup.webp';
import { CustomButtonFill } from '../../components/customButtons/CustomButtons';

export default function Projects() {
    return (
        <section id='projects' className="projects py-bottom-section w-100">
            <SectionTitle>My Work</SectionTitle>
            <div className="flex flex-column justify-center align-center gap-lg">
                <ProjectCard
                    imageURL={GhostwriterMockup}
                    projectName='Word Smithery'
                    projectDescription="Landing page for a Twitter ghostwriter
                    with a unique, data-driven approach to writing. The page's main color
                    is a salmon shade of pink which captures the writer's compassionate
                    and nurturing personality. It is reflected in their personal life
                    and business relations."
                />
                <ProjectCard
                    imageURL={CombatShopMockup}
                    projectName='Battle Enthusiasts'
                    projectDescription='An e-commerce application dedicated to buying
                    anything combat sport related'
                    direction='row-reverse'
                />
            </div>
        </section>
    );
}

function ProjectCard(props) {
    return (
        <div className={`project-card w-100 flex justify-center align-start flex gap-lg ${props.direction} media-md-flex-column`}>
            <img src={props.imageURL} alt="" className='floating-img' />
            <div className="flex flex-column align-start gap-sm">
                <h3 className='font-1 text-bold text-md'>{props.projectName}</h3>
                <p className='font-2 text-sm'>{props.projectDescription}</p>
                {/* <CustomButtonFill textSize='text-md'>case study</CustomButtonFill> */}
            </div>
        </div>
    );
}