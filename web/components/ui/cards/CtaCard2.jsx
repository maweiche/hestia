// import "@/styles/CtaCard2.scss";

const CTA2Card = () => {
    return (
        <div 
          className="flex flex-col items-center text-center text-white p-6 rounded-lg shadow-lg gap-6"
          style={{ width: '90vw', padding: '2rem', margin: '0 auto', backgroundColor: '#6442b4', opacity: '0.9' }}
        >
          <div className="flex flex-col gap-6">
            <h2 className="text-xl">Join our Waitlist</h2>
            <h3 className="text-lg">Stay up to date!</h3>
            <p className="text-sm pb-6">
              Get notified when we launch our new product and announce new features.
            </p>
          </div>
          <a href="https://tally.so/r/w8eYMr" target="_blank" className="btn uppercase">
            JOIN THE WAITLIST
          </a>
        </div>
      );
};

export default CTA2Card;
