import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const blogData = [
  {
    title: 'Moving beyond the predictable failure of Ed-Tech initiatives',
    author:
      'Juan M. Sanchez-Criado, Pablo Rivera-Vargas & Raquel Miño-Puigserver',
    date: 'September 19, 2024',
    image: '/blog-1.png', // Adjust the path to your asset location
    description:
      'This article builds on more than 20 years of research in the field of educational technology...',
    socialLinks: {
      twitter: 'https://twitter.com/share-link',
      linkedin: 'https://linkedin.com/share-link',
      facebook: 'https://facebook.com/share-link',
    },
    sections: [
      {
        content: `This article builds on more than 30 years of research in the field of educational technology. It stretches back to the early 1980s where one of us participated in the first governmental initiative to introduce computers in education in Spain (Bertrán and Sancho 1985; Sancho Gil 1995). This work was followed throughout the years by a suite of studies and investigations carried out by our research group ESBRINA (http://esbrina.eu). In particular, the implementation of a series of local, national, European and international projects (Bosco, Sánchez-Valero, and Sancho-Gil 2016; Domingo, Sánchez, and Sancho 2014; Hernández-Hernández and Sancho-Gil 2017; MiñoPuigcercós, Domingo-Coscollola, and Sancho-Gil 2019; Miño and Sancho 2015; Sancho Gil and Padilla Petry 2016; Sancho-Gil and Rivera-Vargas 2016) alongside the organisation of international conferences, gives us a basis from which to now reflect on the complexities and limitations of digital technology-based reforms in education.`,
      },
      {
        heading: 'Introduction',
        content: `We begin by questioning the dominant reductionist view of ‘technology’ underling the majority of Ed-Tech initiatives for improving education in different parts of the world. Most efforts to introduce digital technology into educational institutions tend to conflate the terms ‘digital technology’ and ‘technology’. This needs to be seen as problematic. On one hand, digital technology constitutes state-of-the-art devices and artefacts designed by men from the ‘developed world’ to satisfy their desire for wealth, power, domination and entertainment. ‘Digital technology’ immediately places women, children, young people and other disadvantaged groups in a position of subordination and inequality, and sits in stark contrast to the broader notion of technology as applied knowledge – i.e., as knowledge in action. Used in its proper sense, technology is a form of doing or interacting with the world that does not necessary involve the use or production of costly digital artefacts. This ahistorical and decontextualised approach of the past 30 years of inserting (digital) ‘technology’ into schools systematically disregards thousands of years’ history of humanity, civilisation and the continuous development of systematic techniques for making and doing things. As should be 2 J. M. SANCHO-GIL ET AL. well known, the term technology is the combination of the Greek technē, (‘art, craft’) with logos (‘word, speech, reflection, transmission’) from the classical discourse on the fine and applied arts (e.g., the art of sailing, the art of governing, the art of educating). This combination highlights the need for any ‘art’ to be supported by ‘tools’ (artefactual technology) as well as organisational methods (organisational technology), signs, symbols, rituals, representations (symbolic technology). It also highlights the imperative to maintain and improve the lives of all the inhabitants of the planet in order to maintain our survival (i.e., biotechnology) (Álvarez, Martínez, and Méndez 1993). However, the forms of Western science that rose to prominence through the First and Second World Wars promoted the idea of ‘technology’ as applied scientific knowledge, deeply linked to the production of artefacts and to the idea of innovation, consumerism and progress.
      This Western notion has taken hold in many parts of the world, with its culmination in the present seemingly ‘irresistible’ development of ‘digital technology’. Thus, most commentators in the field of educational technology systematically speak about ‘technology’ when referring to ‘digital technology’ (‘I do not use technology’, ‘schools should use technology’, and so on). This, we contend, is not an insignificant slip of the tongue. Instead, this framing leads to the disregarding of social, economic and political collateral damages and conflicts brought about any new technological development (c.f. Mumford 1938). In addition, as argued by Heidegger is the loss of the association between technology and humanity, and a sense of the significance of technology for most human beings.`,
      },
      {
        heading:
          'A predictable failure of Ed-Tech intervention in the digital society',
        content: `The trend throughout the 1990s and 2000s was for ambitious national Ed-Tech initiatives and programmes. These were almost always positioned within the concept of ‘Information and Knowledge Society’ (IKS) and the foregrounding of digital technology as a major driver of change in post-industrial society (Beck, Giddens, and Lash 1994; Castells 1996; UNESCO 2005; UNESCO 2011; Selwyn 2019). It is interesting to consider how this has shaped (and arguably restricted) what educational technology has come to be understood to be. Indeed, from an exhaustive analysis of the existing definitions of IKS from the academic, political and economic worlds, Cummings et al. (2018) identify two major discourses that can be argued in combination to typify dominant framings of Ed-Tech around the world. First, is a prevailing techno-scientific-economic discourse largely endorsed by governments of developed countries. `,
      },
      // Additional sections as needed
    ],
  },
];

const BlogContent = () => {
  const { id } = useParams();
  const blog = blogData[parseInt(id) - 1];
  return (
    <div className="mt-36 px-16 flex flex-col gap-16 w-full max-w-7xl">
      {/* Breadcrumb */}
      <h5 className="text-[14px]">
        <span className="text-[#28252480]">Blog &gt;</span> {blog.title}
      </h5>

      {/* Blog Header */}
      <div className="mx-auto flex flex-col px-12 gap-4">
        <h5 className="font-medium text-[50px]">{blog.title}</h5>
        <p>
          <span className="text-[#2D5283] text-[14px] italic">
            By {blog.author}
          </span>{' '}
          - {blog.date}
        </p>
        <p className="text-[#697D95]">Share this publication</p>
        <div className="flex gap-4 text-xl">
          <a href={blog.socialLinks.twitter} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href={blog.socialLinks.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href={blog.socialLinks.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <FaInstagram />
        </div>
      </div>
      <div>
        <img src={blog.image} alt="blog visual" className="w-full" />
      </div>
      {/* Blog Sections */}
      <div className="flex flex-col gap-24 px-12">
        {blog.sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="font-medium text-[16px]">{section.heading}</h3>
            <p className="text-[14px] leading-[24px] text-[#697D95]">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
