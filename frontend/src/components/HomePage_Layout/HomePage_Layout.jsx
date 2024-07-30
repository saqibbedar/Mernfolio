import './HomePage_Layout.css'
import Awards from './Awards/Awards'
import CertificatesSection from './Certificates/CertificatesSection'
import FeaturedBlogPosts from './FeaturedBlogPosts/FeaturedBlogPosts'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import LandingPage from './LandingPage/LandingPage'
import Skills from './Skills/MySkills'
import Testimonials from './Testimonials/Testimonials'
import FAQS from './FAQS/FAQS'

const HomePage_Layout = () => {
  return (
    <div className='HomePage_Layout-main-wrapper'>
      <LandingPage/>
      <Skills/>
      <FeaturedBlogPosts/>
      <FeaturedProjects/>
      <CertificatesSection/>
      {/* <Awards/> */}
      <Testimonials/>
      <FAQS/>
    </div>
  )
}

export default HomePage_Layout
