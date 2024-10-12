import teamMember from '../assets/images/teamMember.png';
import Member from '../components/Member';

// TeamMembers component to display a grid of team members
export default function TeamMembers() {
  // Array of team member objects with their details
  const teamMembers = [
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
      linkedIn: 'https://www.linkedin.com/in/ireoluwa-adesanya-8b5b9b1b4/',
    },
    {
      name: 'IREOLUWA ADEOLUWA',
      imageUrl: teamMember,
      role: 'CTO',
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
