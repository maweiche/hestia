// import "@/styles/CtaCard2.scss";

const CTA2Card = () => {
    return (
        <div 
          className="cta-card"
          style={{ width: '90vw', padding: '2rem 0rem 2rem 4rem', margin: '0 auto', opacity: '0.9', boxShadow: '0 0 10px #8C52FF', transition: 'all 0.3s ease-in-out', }}
        >
          <div className="flex flex-col space-y-6" style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <h2 className="text-4xl text-white">Transition to Solana with 0 friction.</h2>
            <a href="https://tally.so/r/w8eYMr" target="_blank" className="btn uppercase" style={{ width: 'fit-content' }}>
              JOIN THE WAITLIST
            </a>
          </div>
          <div className="hestia-about" style={{ borderRadius: '7px' }}/>
            {/* <img src="/logos/white_text_logo.svg" alt="black background with diamonds on it" style={{ height:'280px' }} /> */}
        </div>
      );
};

export default CTA2Card;
