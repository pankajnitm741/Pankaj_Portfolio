import { ScrollAnimationWrapper } from './ScrollAnimationWrapper'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I had the privilege of working with Pankaj on the Microsoft Loop project. His ability to optimize table performance was incredible - he really knows how to dive deep into complex problems and find elegant solutions. What impressed me most was how he always explained his approach clearly during code reviews.",
      name: "Priya Sharma",
      position: "Senior Software Engineer, Microsoft",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      quote: "Pankaj was instrumental in building our mobile app features at Doubtnut. He took ownership of the rewards system that now serves over 2 million users! His code was always clean, well-documented, and he never hesitated to help junior developers on the team. A true team player.",
      name: "Rahul Verma", 
      position: "Engineering Manager, Doubtnut",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      quote: "I've worked with Pankaj on multiple client projects and he always delivers quality work on time. His code reviews are thorough and constructive - he genuinely cares about helping the whole team improve. His expertise with both frontend and backend technologies makes him incredibly versatile.",
      name: "Kavya Reddy",
      position: "Project Manager, Digital Solutions Inc",
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      quote: "Working alongside Pankaj during his internship at AlphaGrep was amazing. He automated our file status checking process that used to take hours manually. His Python scripts were not just functional but beautifully written. He has this knack for understanding business requirements and translating them into code.",
      name: "Anjali Gupta",
      position: "AVP, AlphaGrep Securities", 
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      quote: "Pankaj and I collaborated on several React projects, and I was consistently impressed by his attention to detail. He doesn't just write code that works - he writes code that's maintainable, performant, and follows best practices. Plus, he's always eager to learn new technologies and share knowledge with the team.",
      name: "Sneha Patel",
      position: "Frontend Developer, Tech Innovators",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      quote: "What sets Pankaj apart is his problem-solving approach. During our hackathon project, when we hit a major roadblock with API integration, he stayed calm and methodically worked through the issue. His TypeScript skills and understanding of modern React patterns really saved our project. Great guy to have on your team!",
      name: "Arjun Singh",
      position: "Full Stack Developer, StartupTech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format"
    }
  ]

  return (
        <section id="testimonials" className="py-20 relative overflow-hidden" style={{backgroundColor: '#0f172a'}}>
      {/* Floating colorful cloud blobs */}
      <div className="absolute inset-0 opacity-50 sm:opacity-70">
        {/* Large gradient blob - bottom left */}
        <div 
          className="absolute bottom-1/5 left-1/6 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-lime-400 via-green-500 to-emerald-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-6000"
        ></div>
        
        {/* Medium gradient blob - top right */}
        <div 
          className="absolute top-1/6 right-1/5 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-2000"
        ></div>
        
        {/* Small gradient blob - center */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-blob animation-delay-4000"
        ></div>
        
        {/* Extra blob for depth - bottom right */}
        <div 
          className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 sm:opacity-15 animate-blob"
        ></div>
      </div>

      <div className="relative z-10">
        <ScrollAnimationWrapper animation="fade-up" threshold={0.2}>
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm bg-opacity-90 border border-white">
              What My Collaborators Say
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Testimonials
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fade-in" delay={400} threshold={0.1}>
          {/* Auto-scrolling testimonials container with full width and fade effects */}
          <div className="relative overflow-hidden w-full">
            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex gap-8 animate-scroll">
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-96 border border-gray-700/50 rounded-xl p-8 hover:border-teal-500 transition-all duration-300 relative" style={{backgroundColor: 'rgb(15 23 42 / 0.5)'}}>
                  {/* Quote SVG */}
                  <div className="absolute top-6 left-6 text-teal-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 text-teal-500/80">
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mt-8 mb-6">
                    <p className="text-gray-300 italic leading-relaxed text-base">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-teal-400 font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-base">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
