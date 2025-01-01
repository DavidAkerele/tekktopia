import { useParams } from 'react-router-dom';
import Hero from '../components/services/categoryPages/Hero';
import Features from '../components/services/categoryPages/Features';
import Testimonials from '../components/services/categoryPages/Testimonials';
import Reviews from '../components/services/categoryPages/Reviews';

// Define service categories
const ServiceCategories = {
  'cloud-computing': {
    titleTop: 'Cloud',
    titleBottom: 'Computing Services',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      {
        title: 'Cloud Strategy and Consulting',
        description:
          'Collaborate with Tekktopia to create a cloud adoption roadmap tailored to your business goals.Assess your current IT infrastructure and identify workloads ideal for migration.',
        image: '/cloud-f1.png',
      },
      {
        title: 'Cloud Migration Services',
        description:
          'Seamlessly migrate workloads, applications, and data to the cloud with minimal downtime.Employ phased migration strategies to reduce risks and ensure continuity.',
        image: '/cloud-f2.png',
      },
      {
        title: ' SaaS, PaaS, and IaaS Solutions',
        description:
          'SaaS:  Enable your business with ready-to-use software applications accessible from anywhere. PaaS: Accelerate development cycles with pre configured platforms and tools for app development. IaaS: Gain access to on demand computing power.',
        image: '/cloud-f3.png',
      },
    ],
    testimonials: '/cloud-computing-att.png',
    image: '/cloud-computing.png',
    reviews: {
      image: '/review-guy.png',
      name: 'Tunde A.',
      comment:
        'Tekktopia didn’t just provide us with solutions, they empowered our team to harness the full potential of technology. We’re truly grateful for their expertise and dedication.',
    },
  },
  'mobile-web-dev': {
    titleTop: 'Mobile &',
    titleBottom: 'Web Development',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      {
        title: 'Custom Application Development',
        description:
          'Build applications tailored to your business goals and user needs. Feature-rich, interactive designs optimized for superior user experience (UX).',
        image: '/cloud-f1.png',
      },
      {
        title: 'Cross Platform Development',
        description:
          'Develop apps that work seamlessly across multiple platforms (iOS, Android, and web). Ensure consistent branding and performance across devices.',
        image: '/coding-guy.png',
      },
      {
        title: 'User-Centered Design (UI/UX)',
        description:
          'Prioritize user experience with intuitive interfaces and seamless navigation. Conduct user research, prototyping, and testing to ensure designs meet user expectations.',
        image: '/coding-guy2.png',
      },
    ],
    testimonials: '/mobile-web-att.png',
    image: '/mobile-web-dev-bg.png',
    reviews: {
      image: '/review-guy.png',
      name: 'Tunde A.',
      comment:
        'Tekktopia didn’t just provide us with solutions, they empowered our team to harness the full potential of technology. We’re truly grateful for their expertise and dedication.',
    },
  },
  'product-design': {
    titleTop: 'Product Design and',
    titleBottom: 'Envisioning',
    subtitle: 'Brand Identity and Digital Marketing',
    features: [
      {
        title: 'Product Envisioning',
        description:
          'Transform your vision into a tangible, actionable product concept. Utilize storytelling and visualization tools to communicate the product’s potential impact.',
        image: '/pd-1.png',
      },
      {
        title: 'Visual Design and Branding',
        description:
          'Align product aesthetics with your brand’s identity and values. Design appealing, cohesive visuals to establish a strong brand presence.',
        image: '/pd-2.png',
      },
      {
        title: 'User Experience Design (UX)',
        description:
          'Align product aesthetics with your brand’s identity and values. Design appealing, cohesive visuals to establish a strong brand presence.',
        image: '/pd-3.png',
      },
    ],
    testimonials: '/product-design-att.png',
    image: '/product-design.png',
    reviews: {
      image: '/review-lady.png',
      name: 'Sophia R.',
      comment:
        'When we partnered with Tekktopia, we knew we needed a tech overhaul, but we didn’t expect the transformation to be this seamless.  They truly understand what businesses need to thrive in today’s market.',
    },
  },
  'data-analytics': {
    titleTop: 'Data Analytics and',
    titleBottom: 'Business Intelligence',
    subtitle: 'Artificial Intelligence and Machine Learning',
    features: [
      {
        title: 'Data Integration and Warehousing',
        description:
          'Design and deploy data warehouses using platforms like Snowflake, Amazon Redshift, and Google BigQuery. Enable real-time data integration for faster decision-making and reporting.',
        image: '/da-1.png',
      },
      {
        title: 'Advanced Analytics and Predictive Modeling ',
        description:
          'Utilize machine learning and AI techniques to predict trends and optimize business processes. Apply advanced statistical methods to uncover hidden patterns and correlations.',
        image: '/da-2.png',
      },
      {
        title: 'Real-Time Analytics',
        description:
          'Deploy real-time analytics systems for instant insights and faster decision-making. Monitor live data streams for immediate action in dynamic business environments.',
        image: '/da-3.png',
      },
    ],
    testimonials: '/data-analytics-att.png',
    image: '/data-analytics-bg.png',
    reviews: {
      image: '/review-guy.png',
      name: 'Tunde A.',
      comment:
        'Tekktopia didn’t just provide us with solutions, they empowered our team to harness the full potential of technology. We’re truly grateful for their expertise and dedication.',
    },
  },
  'it-consulting': {
    titleTop: 'IT Consulting',
    titleBottom: ' ',
    subtitle: 'IT Support, Hardware, ERP etc',
    features: [
      {
        title: 'Enterprise Architecture Design',
        description:
          'Build a robust IT architecture to support business growth. Utilize frameworks like TOGAF to align IT strategies with organizational goals',
        image: '/ic-1.png',
      },
      {
        title: 'IT Governance and Compliance',
        description:
          'Establish policies and frameworks to manage IT resources effectively. Ensure compliance with regulations like GDPR, HIPAA, and ISO standards. Minimize risks with proactive audit and monitoring strategies',
        image: '/ic-2.png',
      },
      {
        title: 'IT Cost Optimization',
        description:
          'Analyze IT expenditure to identify cost-saving opportunities. Leverage Tekktopia’s expertise to implement pay-as-you-go models for cloud services.',
        image: '/ic-3.png',
      },
    ],
    testimonials: '/it-consulting-att.png',
    image: '/it-consulting-bg.png',
    reviews: {
      image: '/review-lady.png',
      name: 'Sophia R.',
      comment:
        'When we partnered with Tekktopia, we knew we needed a tech overhaul, but we didn’t expect the transformation to be this seamless.  They truly understand what businesses need to thrive in today’s market.',
    },
  },
  'cyber-security': {
    titleTop: 'Cybersecurity',
    titleBottom: 'Solutions',
    subtitle: 'Seamless Mobile & Web Platforms Tailored to Your Needs',
    features: [
      {
        title: 'Data Protection and Privacy',
        description:
          'Safeguard your data with advanced encryption technologies: . - Symmetric Encryption: High speed encryption for large data volumes (e.g., AES). - Asymmetric Encryption: Secure data sharing with public/private key pairs (e.g., RSA)',
        image: '/cs-1.png',
      },
      {
        title: 'Risk Assessment and Management',
        description:
          'Identify vulnerabilities with comprehensive risk assessments. Implement risk mitigation strategies to proactively address potential threats',
        image: '/cs-2.png',
      },
      {
        title: 'Business Continuity and Disaster Recovery',
        description:
          'Develop robust plans to ensure operational resilience. Restore critical systems quickly with Tekktopia’s disaster recovery services, leveraging both on-premises and cloud resources.',
        image: '/cs-3.png',
      },
    ],
    testimonials: '/cybersecurity-att.png',
    image: '/cybersecurity-bg.png',
    reviews: {
      image: '/review-lady.png',
      name: 'Sophia R.',
      comment:
        'When we partnered with Tekktopia, we knew we needed a tech overhaul, but we didn’t expect the transformation to be this seamless.  They truly understand what businesses need to thrive in today’s market.',
    },
  },
};

const ServicePage = () => {
  const { name } = useParams(); // Get the service name from the URL
  const service = ServiceCategories[name]; // Look up the service in the dictionary

  // Handle case where the service is not found
  if (!service) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Service Not Found. Please check the URL.
        </h1>
      </div>
    );
  }

  // Destructure service properties
  const {
    titleTop,
    titleBottom,
    subtitle,
    features,
    testimonials,
    image,
    reviews,
  } = service;

  return (
    <div className="bg-[#081527] text-white w-full items-center flex flex-col justify-center  mx-auto">
      <div className="container">
        <Hero
          imageUrl={image}
          topText={titleTop}
          bottomText={titleBottom}
          subtitle={subtitle}
        />

        <Features features={features} />

        <Testimonials testimonials={testimonials} />

        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default ServicePage;
