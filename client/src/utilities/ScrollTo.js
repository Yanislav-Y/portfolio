export default function scrollTo(target) {
    const contactSection = document.getElementById(target);
    contactSection.scrollIntoView({ behavior: 'smooth' });
}