import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Visualization Virtual Internship</h4>
                <h5>TATA</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Empowering Business With Effective Insights (Online Mode). Gained hands-on experience with data visualization tools and translating data into actionable business insights.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI For All Internship</h4>
                <h5>Infosys</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed internship on Generative AI. Also earned Google AI Essentials Course certificate and participated in a Live Masterclass on Microsoft Co Pilot.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education: B.Tech in CSE (AI & ML)</h4>
                <h5>Brainware University</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Pursuing B.Tech specializing in AI and Machine Learning. Higher Secondary from Ramakrishna Mission Vidyapith (91.20%). Secondary from Hetia High School (94.57%).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
