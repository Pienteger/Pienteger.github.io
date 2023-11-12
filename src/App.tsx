function App() {


  return (
    <>
      <div className='flex flex-col items-center justify-center mt-10'>
        <p className='text-xl'>Boycotting 
          <span className='text-red-700 font-bold italic'> CocaCola</span> is not enough.
          Let's build an alternative tech stack. How about building a social media from scratch?</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-5 text-xl">
        <p>If you are a <span className="font-bold">true Muslim</span>, and one of these -</p>
        <ul className="list-disc">
          <li>Architect</li>
          <li>.NET Engineer</li>
          <li>Mobile Developer</li>
          <li>Frontend Engineer</li>
          <li>UI/UX designer</li>
          <li>Tech consultant</li>
          <li>Potential valuable asset<br /> in this journey</li>
        </ul>
        <p className="text-3xl">We are looking for you.</p>
        <button className='px-3 py-2 bg-blue-500 text-white rounded mt-5'>
          <a href='mailto:pienteger@gmail.com' target='_blank' rel='noreferrer'>
            Contact us
          </a>
        </button>
        <p>This is a sadaqah e jariyah project and we encourage you to apply only if you are job holder or financially stable and want to invest your free time in a cause of Allah.</p>
        <p>Running a project specially tech product requires money to run. For example hosting charges. If you want to invest money in this project, you can join us too.</p>
      </div>
      <div className="pt-5 pb-2 flex flex-col items-center justify-center">
        <p>Build with ❤️ in Bangladesh</p>
        <p>🇧🇩 🤝🏻 🇵🇸</p>
      </div>
    </>
  )
}

export default App
