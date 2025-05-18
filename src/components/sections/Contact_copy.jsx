export const Contact = () => {

     const iconStyle = {
    width: '50px',
    height: '50px',
    margin: '0 15px',
    transition: 'transform 0.3s',
    cursor: 'pointer'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px'
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:paboda9@gmail.com';
  };


    return (<section id="contact"
    className="min-h-screen flex items-center justify-center py-20">


        <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Get In Touch</h2>
            
            

            <div style={containerStyle}>
      <a href="hwww.linkedin.com/in/paboda-ratnayake" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/145/145807.png

"
          alt="LinkedIn"
          style={iconStyle}
        />
      </a>

      <a href="https://github.com/pabodaR" target="_blank" rel="noopener noreferrer" title="GitHub">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          alt="GitHub"
          style={iconStyle}
        />
      </a>

      <a href="https://medium.com/@paboda-ratnayake" target="_blank" rel="noopener noreferrer" title="Medium">
        <img
          src="https://www.liblogo.com/img-logo/sml/me2070b6b1-medium-logo-blog-medium-medium-logo-icon-free-download-on-iconfinder.webp"
          alt="Medium"
          style={{ ...iconStyle, borderRadius: '8px' }}
        />
      </a>

      <div onClick={handleEmailClick} title="Email">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          style={iconStyle}
        />
      </div>
    </div>
    </div>
    </section>
    );
}