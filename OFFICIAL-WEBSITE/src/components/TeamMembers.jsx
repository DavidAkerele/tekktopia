import teamMember from '../assets/images/teamMember.png';
import Member from '../components/Member';

export default function TeamMembers() {
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
      ]
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2  w-full lg:px-8 gap-8'>
        {teamMembers.map((member, index) => {
            return(
                <Member member={member}/>
            )
        })}
    </div> 
  )
}
