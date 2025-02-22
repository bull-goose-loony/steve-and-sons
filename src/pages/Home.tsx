// Home.tsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Card from '../components/Card/Card';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { Element } from 'react-scroll';
import './Home.css';


const HomePage: React.FC = () => {

// React Read More/Read Less Function with TypeScript
const toggleText = (e: React.MouseEvent<HTMLButtonElement>) => {
  const fullText = e.currentTarget.previousElementSibling as HTMLElement | null; // Ensure correct type
  if (fullText) {
    if (fullText.style.display === 'none' || fullText.style.display === '') {
      fullText.style.display = 'inline';
      e.currentTarget.textContent = 'Read Less';
    } else {
      fullText.style.display = 'none';
      e.currentTarget.textContent = 'Read More';
    }
  }
};



  // Sample data for cards, you can replace this with actual data
  const cardsData = [
    {
      id: 1,
      image: 'images/card1.jpg',
      title: 'Residential',
      description: (
        <ul>
          <li>
            <strong>Lighting installation:</strong> Our lighting installation service transforms your living spaces by blending advanced technology with creative design... 
            <span className="full-text">
            From selecting energy-efficient fixtures to designing custom lighting layouts, we ensure that every installation enhances the aesthetics and utility of your space. Whether it’s accent lighting for architectural features or outdoor lighting for safety and style, My Sons and I implement solutions that not only reduce energy consumption but also create a warm, inviting environment tailored to your lifestyle.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>

          </li>
          <li>
            <strong>Wiring & rewiring:</strong> Our wiring and rewiring services cover every facet of your home’s electrical infrastructure Our team meticulously plans and installs new...
            <span className="full-text">
        wiring systems or upgrades existing ones, ensuring that every cable is correctly routed, securely connected, and compliant with the latest electrical codes. We take pride in using high-quality materials and advanced techniques, offering you a system that’s built to last and designed for safety and optimal performance.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Troubleshooting & repairs:</strong> Our troubleshooting and repair service is designed to delve deep into your home’s electrical issues. We use advanced diagnostic tools to perform a detailed...
            <span className="full-text">
             assessment, accurately pinpointing the source of any problem. Once identified, our experienced technicians develop a targeted repair plan that addresses both immediate faults and any underlying issues that might cause recurring problems, keeping your home running smoothly.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Generac dealer:</strong> As an authorized Generac dealer, we offer an extensive selection of high-quality Generac generators and related electrical equipment designed specifically for...
            <span className="full-text">
             residential applications. Our service includes a thorough consultation to assess your home’s power needs and recommend the ideal generator model. We handle the entire process—from detailed site evaluations and precise installation planning to the expert setup and integration of the generator with your existing electrical system. Our commitment to quality and reliability ensures that you have a dependable power source during outages or emergencies, providing you with enhanced security and uninterrupted comfort.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Panel upgrades:</strong> Upgrading your electrical panel is crucial for maintaining a safe and efficient power ditribution. We start with a thorough analysis...
            <span className="full-text">
              of your current panel to determine its capacity. Our experts then design a custom upgrade plan that includes replacing obsolete parts and installing modern circuit breakers. We manage every step with precision, ensuring minimal disruption and a long-lasting improvement to your electrical system.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>EV charger installation:</strong> We specialize in the complete installation of electric vehicle charging stations. We handle everything from securing necessary permits to installing...
            <span className="full-text">
             and integrating the charger with your existing system, ensuring adherence to the highest safety standards. This service is designed to provide you with a seamless, reliable charging experience, backed by expert advice on maintenance and usage. Our approach guarantees that your EV charger is both efficient and future-proof, accommodating new technologies as they emerge.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      image: 'images/card1.jpg',
      title: 'Commercial',
      description: (
        <ul>
          <li>
            <strong>Tenant build-outs:</strong> Our tenant build-out services are designed to deliver a fully integrated electrical system that meets the specific needs of new or renovated commercial spaces... 
            <span className="full-text">
            We start by conducting a comprehensive assessment of your premises to understand the layout and operational demands. We then execute the installation ensuring that all components meet industry standards and local regulations. Our holistic approach guarantees that your commercial space is not only fully functional but also scalable for future growth.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Lighting design & installation:</strong> Our lighting design and installation service for commercial spaces combines creative vision with technical expertise to transform your environment...
            <span className="full-text">
             We work closely with you to capture the essence of your brand and operational needs, crafting lighting solutions that enhance both the aesthetic appeal and functional performance of your facility. From initial concept development to the final installation, every detail is carefully managed to ensure a system that is both visually striking and cost-effective over the long term.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Power distribution:</strong> Our power distribution services for commercial settings ensure that your facility receives a balanced and reliable electrical supply. We perform... 
            <span className="full-text">
            a meticulous evaluation of your current and projected power requirements, designing a system that optimally distributes electricity throughout your space. With advanced monitoring tools integrated into the system, we provide real-time insights and ongoing support to prevent outages and maximize efficiency. This robust infrastructure is essential for maintaining continuous operations in any commercial environment.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Equipment wiring:</strong> For commercial equipment wiring, our service is engineered to meet the rigorous demands of industrial and office machinery. We begin by assessing...
            <span className="full-text">
             the specific power requirements and operational parameters of your equipment. Our team then devises a customized wiring plan that emphasizes both safety and efficiency. Our focus on precision and quality guarantees that your equipment runs smoothly, minimizing downtime and supporting your business’s productivity.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
          <li>
            <strong>Emergency repairs:</strong> When unexpected electrical issues disrupt your business, our emergency repair service is ready to respond quickly and effectively. We understand...
            <span className="full-text">
             the high cost of downtime, which is why our experienced technicians are available around the clock to diagnose and address electrical failures. Our service includes a detailed post-repair analysis and preventive recommendations to avoid future emergencies. With our prompt response and expert handling, you can minimize operational disruptions and safeguard your business continuity.
            </span>
            <button className="read-more-btn" onClick={(e) => toggleText(e)}>Read More</button>
          </li>
        </ul>
      ),
    }
  ];   // Add more cards as needed...

  return (
    <div className = "main-content">
    <Element name="about" className="section about-section">
        <About />
     </Element>
     <Element name="services" className="section services-section">
      <div className="cards-container">
        {cardsData.map(card => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
     </Element>
     <Element name="contact" className="section contact-section">
        <Contact />
     </Element>

    </div>
  );
};

export default HomePage;
