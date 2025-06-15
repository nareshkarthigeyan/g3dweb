'use client'

import { useEffect } from 'react';
import Link from 'next/link';

export default function Newsletter() {
  useEffect(() => {
    // Add 3D rotation effect to the newsletter preview card
    const previewCard = document.querySelector('.newsletter-preview');
    if (previewCard) {
      const handleMouseMove = (e) => {
        const { left, top, width, height } = previewCard.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        previewCard.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.02, 1.02, 1.02)`;
        previewCard.style.boxShadow = `${x * 10}px ${y * 10}px 30px rgba(255, 0, 0, 0.1)`;
      };
      
      previewCard.addEventListener('mousemove', handleMouseMove);
      previewCard.addEventListener('mouseleave', () => {
        previewCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
        previewCard.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.2)';
      });
      
      return () => {
        previewCard.removeEventListener('mousemove', handleMouseMove);
        previewCard.removeEventListener('mouseleave', () => {});
      };
    }
    
    // Add hover effect to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
      });
    });
    
    return () => {
      benefitCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Newsletter Header with animated elements */}
      <div className="container mx-auto px-6 mb-16 relative">
        <div className="inline-block mb-4">
          <div className="flex items-center space-x-2 bg-dark-200 rounded-full py-1 px-3 mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium">Stay Connected</span>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 relative">
          <span className="bg-clip-text text-transparent bg-gradient-metal">Galactic 3D</span> 
          <span className="bg-clip-text text-transparent bg-gradient-red ml-3">Newsletter</span>
          <div className="absolute -bottom-3 left-0 w-20 h-1 bg-primary"></div>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">Stay updated with the latest trends, innovations, and insights in additive manufacturing. Join our community of forward-thinking professionals.</p>
      </div>

      {/* Main Subscription Section with enhanced styling */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-dark-400 rounded-xl overflow-hidden border border-dark-100 shadow-lg shadow-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Subscribe to Our Newsletter</h2>
              <p className="text-gray-400 mb-8">Join our community of innovators and stay informed about:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 group-hover:animate-pulse-glow transition-all duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="group-hover:text-primary transition-all duration-300">Latest advancements in 3D printing technologies</span>
                </li>
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 group-hover:animate-pulse-glow transition-all duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="group-hover:text-primary transition-all duration-300">Industry case studies and success stories</span>
                </li>
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 group-hover:animate-pulse-glow transition-all duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="group-hover:text-primary transition-all duration-300">Exclusive tips and best practices from our experts</span>
                </li>
                <li className="flex items-start group">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 group-hover:animate-pulse-glow transition-all duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="group-hover:text-primary transition-all duration-300">Early access to our webinars and events</span>
                </li>
              </ul>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      className="w-full bg-dark-300 border border-dark-100 text-white px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      className="w-full bg-dark-300 border border-dark-100 text-white px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark-300 border border-dark-100 text-white px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">Company (Optional)</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-dark-300 border border-dark-100 text-white px-4 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-3">Interests</label>
                  <div className="space-y-2">
                    <div className="flex items-center group">
                      <input type="checkbox" id="interest-1" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-dark-100 rounded transition-all duration-300" />
                      <label htmlFor="interest-1" className="text-gray-300 group-hover:text-primary transition-all duration-300">Industrial 3D Printing</label>
                    </div>
                    <div className="flex items-center group">
                      <input type="checkbox" id="interest-2" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-dark-100 rounded transition-all duration-300" />
                      <label htmlFor="interest-2" className="text-gray-300 group-hover:text-primary transition-all duration-300">Rapid Prototyping</label>
                    </div>
                    <div className="flex items-center group">
                      <input type="checkbox" id="interest-3" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-dark-100 rounded transition-all duration-300" />
                      <label htmlFor="interest-3" className="text-gray-300 group-hover:text-primary transition-all duration-300">Design for Additive Manufacturing</label>
                    </div>
                    <div className="flex items-center group">
                      <input type="checkbox" id="interest-4" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-dark-100 rounded transition-all duration-300" />
                      <label htmlFor="interest-4" className="text-gray-300 group-hover:text-primary transition-all duration-300">Industry News and Trends</label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <input type="checkbox" id="terms" className="mr-3 h-4 w-4 text-primary focus:ring-primary border-dark-100 rounded transition-all duration-300" />
                  <label htmlFor="terms" className="text-gray-300 text-sm group-hover:text-gray-200 transition-all duration-300">I agree to receive emails from Galactic 3D. You can unsubscribe at any time.</label>
                </div>
                
                <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition-all duration-300 w-full md:w-auto relative overflow-hidden group">
                  <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center">
                    Subscribe Now
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="3D Printing Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 z-20 bg-dark-400/80 backdrop-blur-sm p-4 rounded-lg border border-dark-100 max-w-xs">
                <h3 className="text-lg font-bold text-white mb-2">Metal 3D Printing</h3>
                <p className="text-sm text-gray-300">Our newsletter covers the latest advancements in metal, alloy, and polymer 3D printing technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Benefits with enhanced cards */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-red">Why</span> 
            <span className="text-white">Subscribe?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Our newsletter delivers valuable insights and practical knowledge directly to your inbox.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="benefit-card bg-dark-300 p-8 rounded-lg border border-dark-100 hover:border-primary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-all duration-300">Industry Insights</h3>
            <p className="text-gray-400">Get exclusive analysis and commentary on the latest developments in additive manufacturing from our team of experts.</p>
          </div>
          
          {/* Benefit 2 */}
          <div className="benefit-card bg-dark-300 p-8 rounded-lg border border-dark-100 hover:border-primary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-all duration-300">Technical Knowledge</h3>
            <p className="text-gray-400">Learn about new techniques, materials, and best practices that can help you optimize your additive manufacturing processes.</p>
          </div>
          
          {/* Benefit 3 */}
          <div className="benefit-card bg-dark-300 p-8 rounded-lg border border-dark-100 hover:border-primary transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10 group">
            <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-all duration-300">Case Studies</h3>
            <p className="text-gray-400">Discover how other companies are leveraging 3D printing to solve complex problems and drive innovation in their industries.</p>
          </div>
        </div>
      </div>

      {/* Sample Newsletter Preview with 3D effect */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">Preview Our</span> 
            <span className="bg-clip-text text-transparent bg-gradient-red ml-2">Newsletter</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Here's a sample of what you can expect in your inbox.</p>
        </div>
        
        <div className="newsletter-preview bg-dark-300 rounded-lg overflow-hidden border border-dark-100 shadow-lg transition-all duration-300" style={{transformStyle: 'preserve-3d', transform: 'perspective(1000px)'}}>
          <div className="p-6 border-b border-dark-100">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Galactic 3D Monthly Insights</h3>
                <p className="text-gray-400">June 2023 Edition</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <h4 className="text-lg font-bold mb-4 text-primary">Featured Article: The Future of Metal 3D Printing</h4>
            <p className="text-gray-400 mb-4">Metal 3D printing is revolutionizing manufacturing across industries. In this month's feature, we explore the latest advancements in metal additive manufacturing technologies and how they're enabling new possibilities in aerospace, automotive, and medical applications.</p>
            <div className="mb-6 rounded-lg overflow-hidden border border-dark-100">
              <img src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Metal 3D Printing" className="w-full h-48 object-cover transition-all duration-500 hover:scale-105" />
            </div>
            
            <h4 className="text-lg font-bold mb-4 text-primary">Industry News Roundup</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>New polymer composite shows 40% higher strength in recent tests</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Major aerospace manufacturer adopts large-scale 3D printing for production parts</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                <span>Researchers develop breakthrough in bio-printing technology</span>
              </li>
            </ul>
            
            <h4 className="text-lg font-bold mb-4 text-primary">Upcoming Events</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start group">
                <div className="bg-primary/20 text-primary px-3 py-2 rounded text-center mr-4 min-w-[60px]">
                  <div className="text-sm">JUL</div>
                  <div className="text-xl font-bold">15</div>
                </div>
                <div>
                  <h5 className="font-bold group-hover:text-primary transition-all duration-300">Additive Manufacturing Summit 2023</h5>
                  <p className="text-gray-400">Virtual Event • 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-primary/20 text-primary px-3 py-2 rounded text-center mr-4 min-w-[60px]">
                  <div className="text-sm">AUG</div>
                  <div className="text-xl font-bold">22</div>
                </div>
                <div>
                  <h5 className="font-bold group-hover:text-primary transition-all duration-300">Design for Additive Manufacturing Workshop</h5>
                  <p className="text-gray-400">Chicago, IL • 9:00 AM - 5:00 PM CST</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition-all duration-300 group relative overflow-hidden">
                <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative">Read Full Newsletter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section with enhanced styling */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-metal">Frequently Asked</span> 
            <span className="bg-clip-text text-transparent bg-gradient-red ml-2">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Have questions about our newsletter? Find answers below.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-dark-300 p-6 rounded-lg border border-dark-100 hover:border-primary transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">How often will I receive the newsletter?</h3>
            <p className="text-gray-400">Our newsletter is sent out monthly, typically on the first Tuesday of each month. Occasionally, we may send special editions for major industry announcements or events.</p>
          </div>
          
          <div className="bg-dark-300 p-6 rounded-lg border border-dark-100 hover:border-primary transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">Is the newsletter free?</h3>
            <p className="text-gray-400">Yes, our newsletter is completely free. We believe in sharing knowledge and insights with the additive manufacturing community.</p>
          </div>
          
          <div className="bg-dark-300 p-6 rounded-lg border border-dark-100 hover:border-primary transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">Can I customize the content I receive?</h3>
            <p className="text-gray-400">Yes, when you sign up, you can select your areas of interest. We'll tailor the content to focus more on the topics that matter most to you.</p>
          </div>
          
          <div className="bg-dark-300 p-6 rounded-lg border border-dark-100 hover:border-primary transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">How do I unsubscribe if I no longer want to receive the newsletter?</h3>
            <p className="text-gray-400">Every newsletter includes an unsubscribe link at the bottom. Simply click this link, and you'll be removed from our mailing list immediately.</p>
          </div>
        </div>
      </div>

      {/* CTA Section with animated background */}
      <div className="bg-primary py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 rounded-full bg-secondary/30 -top-10 -left-10 animate-spin-slow"></div>
          <div className="absolute w-60 h-60 rounded-full bg-secondary/20 -bottom-20 -right-20 animate-spin-slow"></div>
          <div className="absolute w-20 h-20 rounded-full bg-white/10 top-1/4 right-1/4 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Stay Informed?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join our community of innovators and never miss an update on the latest in additive manufacturing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#" className="bg-white text-primary hover:bg-gray-200 font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-gray-300 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Subscribe Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-md transition-all duration-300 text-lg inline-block group relative overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center">
                Contact Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}