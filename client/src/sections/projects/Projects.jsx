import './Projects.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle.jsx';
import WebsitePlaceholder from '../../assets/website-placeholder.png';
import { CustomButtonFill } from '../../components/customButtons/CustomButtons';

export default function Projects() {
    return (
        <section className="projects py-bottom-section w-100">
            <SectionTitle>My Work</SectionTitle>
            <div className="flex flex-column justify-center align-center gap-lg">
                <ProjectCard
                    imageURL={WebsitePlaceholder}
                    projectName='Battle Enthusiasts'
                    projectDescription='An e-commerce application dedicated to buying
                    anything combat sport related'
                />
                <ProjectCard
                    imageURL={WebsitePlaceholder}
                    projectName="Man's Best Friend"
                    projectDescription='A sleek glassmorphism themed application to
                        bring attention to the fact that most dogs today are homeless'
                    direction='row-reverse'
                />
            </div>
        </section>
    );
}

function ProjectCard(props) {
    return (
        <div className={`project-card w-100 flex justify-center align-start flex gap-lg ${props.direction}`}>
            <img src={props.imageURL} alt="" className='floating-img' />
            <div className="flex flex-column align-start gap-sm">
                <h3 className='font-1 text-bold text-md'>{props.projectName}</h3>
                <p className='font-2 text-sm'>{props.projectDescription}</p>
                <CustomButtonFill textSize='text-md'>case study</CustomButtonFill>
            </div>
        </div>
    );
}