import Card from "./Components/features";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const cards = [
    {
      imageUrl: "/financial.jpeg",
      title: "Enhanced Access to Financial Services",
      features: [" Enhanced access to financial services is pivotal in promoting financial inclusion and unlocking opportunities for socioeconomic advancement."],
    },
    {
      imageUrl: "outreach1.jpeg",
      title: "Outreach Programs",
      features: [" By promoting financial inclusion and unlocking opportunities for socioeconomic advancement, these programs empower individuals to access the resources and support they need to thrive in the economy."],
    },
    {
      imageUrl: "infrastructure.jpeg",
      title: "Mobile and Digital Platforms",
      features: ["Through their convenience and accessibility, they empower individuals to navigate the financial landscape effectively, driving economic development and prosperity."],
    },
    {
      imageUrl: "analytics.jpeg",
      title: "Access to Performance Analytics",
      features: [". Empowering individuals with such data enables informed decision-making, ultimately contributing to economic growth and prosperity in marginalized regions."],
    },
    
    {
      imageUrl: "Customer.jpeg",
      title: "Enhanced Customer Engagement",
      features: [" By fostering stronger connections and interactions, it unlocks opportunities for individuals to access essential financial services and participate actively in economic growth."],
    },
    {
      imageUrl: "productivity.jpeg",
      title: "Increased Efficiency and Productivity",
      features: [" By streamlining processes and maximizing output, they promote financial inclusion and open doors to socioeconomic advancement"],
    },
    
    
    
  ];


  return (
    <>
      <div id="main" className="relative min-h-screen min-w-screen overflow-hidden">
        <img src="/hehe.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='text-3xl sm:text-5xl text-white font-bold inline-flex items-center space-x-10 transform -translate-x-1/8 -translate-y-3/5'
          >
            <span>Geo</span>
            <span>Finance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className='text-lg sm:text-xl text-white mt-4'
          >
            A digital Financial Platform for rural Indians, particularly Farmers, to enhance their digital financial engagement by virtual data using Geographic Informative System (GIS). By leveraging making financial information more accessible.
          </motion.p>
        </div>

        <nav className='absolute top-0 left-0 right-0 flex justify-between items-center w-full p-4 bg-white bg-opacity-25 backdrop-blur-sm z-10'>
                  <div className="flex justify-start items-start">
          <img 
          className ="w-[180px] h-[90px]"src ="/grameen.png" />
        </div>
          <ul className='text-white flex text-center justify-center w-full'>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className='inline-block px-5'
            >
            <Link to="main" smooth={true} duration={500}>Home</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
              className='inline-block px-5'
            >
<Link to="what-we-do" smooth={true} duration={500}>About</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className='inline-block px-5'
            >
            <Link to="features" smooth={true} duration={500}>Features</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 1 }}
              className='inline-block px-5'
            >
            <Link to="footer" smooth={true} duration={500}>Contact</Link>
            </motion.li>
          </ul>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 1 }}
            className='bg-white px-4 py-2 rounded-md ml-auto'
            onClick={() => navigate("/users")}>
          
            Login
          </motion.button>
        </nav>
        <div className="absolute top-96 left-2 sm:gap-60 flex flex-row sm:flex-row justify-end items-center h-screen z-20 ">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-34 sm:mb-36 mr-48 text-white"
          >
            [ Organic Farming ]
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mb-4 sm:mb-36 mr-4 text-white"
          >
            [ Virtual Farming ]
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mb-4 sm:mb-36 mr-4 text-white"
          >
            [ Vertical Farming ]
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mb-4 sm:mb-36 text-white"
          >
            [ Farm Management ]
          </motion.h1>
        </div>
      </div>
      <div className="flex flex-col p-4 sm:flex-row sm:gap-60 left-2 items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex flex-col items-center mr-44"
        >
          <h1 className="text-2xl font-black text-black">40+</h1>
          <span className="text-md">Years of experience</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl font-extrabold text-black">190+</h1>
          <span className="text-md">Fields in Progress</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl font-extrabold text-black">126,000+</h1>
          <span className="text-md">Farmer Around World</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 1 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl font-extrabold text-black">$14 Billion</h1>
          <span className="text-md">Agriculture Product</span>
        </motion.div>
      </div>
      <div className="flex justify-between items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="flex items-center p-6"
        >
          <span className="mr-2 font-bold">About us</span>
          <span className="border border-gray-400 h-0 w-[650px] font-bold"></span>
          <span className="mx-2 text-green-600 font-bold">Geo finance</span>
          <span className="border border-gray-400 h-0 w-[650px]"></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 1 }}
          className="text-gray-500"
        >
          @2024
        </motion.div>
      </div>
      <section id="what-we-do" className="flex flex-row justify-between p-4">
        <div className="flex:1 text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4, duration: 1 }}
            className="font-bold text-5xl"
          >
            What we do
          </motion.h1>
        </div>
        <div className="flex-1 text-right text-lg mt-4">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.2, duration: 1 }}
            className="overflow-wrap-break-word text-justify"
          >
            We offer a comprehensive range of services to support farmers and agriculture enthusiasts in cultivating success sustainability.
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4, duration: 1 }}
            className="bg-green-500 p-4 rounded-md top-8"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
      <div className="w-full h-[500px] bg-black p-20">
        <div className="flex justify-start items-start">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.6, duration: 1 }}
            src="/tera.png"
            className="w-[400px]"
            alt="Grameen Foundation"
          />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4.8, duration: 1 }}
            className="text-white m-22 p-10 text-lg"
          >
            In 1998, Grameen Foundation began working in India, and in 2010, it established Grameen Foundation India. While continuing to innovate in the field of microfinance, Grameen Foundation also developed digital technologies to help rural and low-income communities access financial services, improve their livelihoods, and safeguard their health. The organization is constantly making breakthroughs, developing tailored poverty-alleviation solutions that leverage digital technology and trusted intermediaries to reach those in the "last mile."

            In 2012, Grameen Foundation for Social Impact (GFSI) was established, becoming a leading non-profit organization in India. Its mission is to enable the poor, especially women, to create a world without poverty and hunger.
          </motion.p>
        </div>
      </div>
      <div className="services text-4xl font-bold p-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          Highlights
        </motion.h1>
      </div>
      <div id="features" className="grid grid-cols-3 sm:gap-40">
        {cards.map((card, index) => (
          <Card
            key={index}
            {...card}
            
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5.2 + index * 0.2, duration: 1 }}
          />
        ))}
      </div>
      <br/>
      <div className="relative bg-black">
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Subscribe to our newsletter
          </h2>
          <p className="mb-6 text-base text-indigo-200 md:text-lg">
          Stay informed with the latest updates from Geofinance! Subscribe to our newsletter and be the first to know about new features, insights, and special offers.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required=""
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            <button
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-l sm:mx-auto md:mb-16">
            Feel free to contact us
          </p>
          <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">Home</a>
        <a class="hover:text-gray-900" href="#">About</a>
        <a class="hover:text-gray-900" href="#">Services</a>
        <a class="hover:text-gray-900" href="#">Media</a>
        <a class="hover:text-gray-900" href="#">Gallery</a>
        <a class="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div class="flex justify-center space-x-5">
        <a href="https://www.facebook.com/StopPovertyNow/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://www.linkedin.com/company/grameen-foundation-india/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://www.instagram.com/grameen_foundation/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://www.facebook.com/StopPovertyNow/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com/GrameenFdn" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p class="text-center text-white font-medium">&copy; 2024 Grameen Foundation Ltd. All rights reserved.
Grameen Foundation is a registered trademark.
|
Grameen Foundation is a 501(c) (3) non-profit organization.
.</p>
</footer>
          <a href="/" aria-label="Scroll down" className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;