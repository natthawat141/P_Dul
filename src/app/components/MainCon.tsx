// components/MainCon.tsx
const MainCon = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background overlays - ปรับ gradient ให้เห็นข้อความชัดขึ้น */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/30 to-blue-600/80 z-10"></div>
      <div className="absolute inset-0 bg-black/10 z-10"></div> {/* เพิ่ม overlay สีดำบางๆ เพื่อเพิ่ม contrast */}

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/img/459182882_2841014886046133_7651787350991536939_n.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content with enhanced contrast */}
          <div className="text-gray-900 space-y-8">
            <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-800">
                Welcome to Me Skills
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-800 mt-4">
                Empower your learning journey with cutting-edge courses and career-boosting skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl">
                  Explore Courses
                </button>
              </div>
            </div>
          </div>

          {/* Right column - Stats/Features with enhanced styling */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {[
              { number: '100+', text: 'Online Courses' },
              { number: '50k+', text: 'Active Students' },
              { number: '95%', text: 'Success Rate' },
              { number: '24/7', text: 'Expert Support' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium mt-2">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce bg-white/50 p-3 rounded-full backdrop-blur-md shadow-lg">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainCon;