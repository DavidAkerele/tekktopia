import teamMember from '../assets/images/teamMember.png';
import Member from '../components/Member';

// TeamMembers component to display a grid of team members
export default function TeamMembers() {
  // Array of team member objects with their details
  const teamMembers = [
    {
      name: 'AKINOLA DANIEL OSHINUBI',
      imageUrl: '/daniel-oshinubi.png',
      role: 'Founder & MD/CEO',
      linkedIn: 'https://www.linkedin.com/in/akinolaoshinubi/',
    },
    {
      name: 'BOLUWATIFE ONI',
      imageUrl: '/tife-oni.png',
      role: 'Head, Sales & Business Devel...',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'OLUWADAMILARE ADEKOYA',
      imageUrl: '/dami-adekoya.png',
      role: 'Product Manager',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },

    {
      name: 'AKERELE DAVID',
      imageUrl: teamMember,
      role: 'Head. Software Development',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },

    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'SAMUEL OLAWUMI',
      imageUrl: '/samuel-olawumi.jpg',
      role: 'Software Engineer',
      linkedIn: 'https://www.linkedin.com/in/WumiCodes',
    },
    {
      name: 'JOLAOLUWA OLUSANYA',
      imageUrl: '/samuel-olawumi.jpg',
      role: 'Software Engineer',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'OREOLUWA LEO-DADA',
      imageUrl: '/ore-dada.png',
      role: 'Digital Marketing Executive',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
  ];

  return (
    // Grid container for displaying team members
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full lg:px-8 gap-8">
      {/* Map over the teamMembers array and render a Member component for each team member */}
      {teamMembers.map((member, index) => {
        return (
          // Render Member component with member details and unique key
          <Member member={member} key={index} />
        );
      })}
    </div>
  );
}
