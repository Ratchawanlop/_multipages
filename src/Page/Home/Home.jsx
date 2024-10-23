import './Home.css'
function Home() {
  return (
    <div className='font'>
      <div className='home-container'>
        <h1>INTRODUCE MYSELF </h1>
        <div className='introduce-container'>
          <div className='img-container'>
            <iframe
              width='150'
              height='150'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
          </div>

          <div className='text-container'>
            <h2>
              <u>Hi I'm Aomsin</u>
            </h2>

            <p className='text'>
              I'm a 19-year-old Computer Science student passionate about web
              development. I have a solid foundation in front-end technologies
              like HTML, CSS, and JavaScript, and I’m familiar with building
              dynamic and interactive web applications using React.js. I'm
              constantly learning and eager to explore new technologies to
              enhance my skills further. My goal is to create user-friendly and
              efficient web applications, and I'm excited to grow as a
              developer. Looking forward to connecting and learning more about
              the world of tech!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
