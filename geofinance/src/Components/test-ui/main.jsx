import Card from "./features";
import { motion } from "framer-motion";

const Main = () => {
  const cards = [
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 1",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 2",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      imageUrl: "https://via.placeholder.com/300x200",
      title: "Card 3",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <>
      <div className="relative min-h-screen min-w-screen overflow-hidden">
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
          <ul className='text-white flex text-center justify-center w-full'>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className='inline-block px-5'
            >
              <a href="https://public.tableau.com/app/profile/kaviya.k1125/viz/gisreport/Dashboard2?publish=yes">Home</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 1 }}
              className='inline-block px-5'
            >
              <a href="#">About</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              className='inline-block px-5'
            >
              <a href="#">Features</a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 1 }}
              className='inline-block px-5'
            >
              <a href="#">Contact</a>
            </motion.li>
          </ul>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 1 }}
            className='bg-white px-4 py-2 rounded-md ml-auto'
          >
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
      <section className="flex flex-row justify-between p-4">
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
          Our Services
        </motion.h1>
      </div>
      <div className="flex justify-center sm:gap-40">
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
      <div className="footer bottom-0">
        <footer className="bg-black p-14 " aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8">
                <motion.img
                  className="h-20"
                  src="/aii.png"
                  alt="Company name"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 5.5, duration: 1 }}
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.7, duration: 1 }}
                  className="text-sm leading-6 text-white"
                >
                  Making this website look better to the world and a more respectful generation.
                </motion.p>
                <div className="flex space-x-6">
                  <a href="#" className="text-white hover:text-gray-500">
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-yellow-500 hover:text-gray-500">
                    <span className="sr-only">the team is on fire</span>
                  </a>
                  <a href="#" className="text-white hover:text-blue-400">
                    <span className="sr-only">X</span>
                  </a>
                  <a href="#" className="text-white hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="#" className="text-white hover:text-gray-500">
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Marketing</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Analytics</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Commerce</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Insights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Pricing</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Documentation</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Guides</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">API Status</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">About</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Blog</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Jobs</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Press</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Partners</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Claim</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Privacy</a>
                      </li>
                      <li>
                        <a href="#" className="text-sm leading-6 text-white hover:text-gray-900">Terms</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
              <p className="text-xs leading-5 text-white">&copy; 2020 EDU AI, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
