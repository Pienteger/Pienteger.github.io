import dotnet_bot from "./assets/dotnet-bot.svg"

function App() {


  return (
    <>
      <div className='flex flex-col px-5 md:px-20 py-5 md:py-10'>
        <p className=' text-blue-950 text-4xl md:text-9xl self-start'>
          Your Trusted
          <br />
          ASP.NET <strong>Experts</strong>
        </p>
        <p className=' text-blue-900 text-3xl md:text-8xl text-right self-end'>
          Let's Build Your
          <br />
          Next Big Project!
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <img src={dotnet_bot} className="md:h-48"></img>
        <a href="mailto:pienteger@gmail.com"
          className="px-2 py-1 md:py-2 md:px-3 w-fit self-center bg-blue-600 rounded-lg md:text-4xl text-xl font-bold text-white">
          🚀 Hire Us 🚀
        </a>
      </div>
    </>
  )
}

export default App
