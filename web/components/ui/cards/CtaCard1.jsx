// import "@/styles/CtaCard1.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CTA1Card = () => {
  const router = useRouter();
    return (
        <div 
          className="flex flex-col items-center text-center text-white p-6 rounded-lg shadow-lg cta-card-a"
          style={{ width: '90vw', padding: '2rem', margin: '0 auto', opacity: '0.9' }}
        >
          {/* <Image
            src={Illustration}
            alt="black background with diamonds on it"
            className="cta1-card__illustration"
          /> */}
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h3 className="text-xl">
                Take a look at the Custom Interfaces built to interact with our on-chain program.
              </h3>
              <p className="text-xs ">
                Currently in development.
              </p>
            </div>
            <div className="cta1-card__sub">
              <button onClick={()=> router.push('/interfaces')} className="btn-primary uppercase">
                {/* <Image src={Icon4} alt="" className="mail icon" /> */}
                View Wireframes
              </button>
            </div>
          </div>
        </div>
      );
};

export default CTA1Card;