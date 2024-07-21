export default function AboutPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-12 pt-10 pb-12">
        <img src="/people/matt_weichel.png" alt="matt weichel" style={{width: '20vw'}} />
        <div className= "flex flex-col items-center gap-6" style={{ width: "80vw"}}>
            <p className="text-4xl text-center">
                CEO - Matt Weichel
            </p>
            {/* make a bulletized list to highlight skills, each list item should have a bullet point next to it */}
            <ul className="list-disc text-lg text-left flex flex-col items-center">
                <li>Full Stack Developer - Building on Solana since 2021</li>
                <li>Over a decade experience in Quick-Service Food Industry from ground-level to overseeing all operations</li>
                <li>Built and Deployed Token-2022 NFT Mint Factory Program on Mainnet for Playground.Ink</li>
                <li>Lead Solana Pay + cNFT workshop on Solana Ecosystem day in Zurich, Switzerland</li>
                <li>Former Teaching Assistant for Buildspace Web3 program</li>
            </ul>
        </div>
        <div className= "flex flex-col items-center gap-6" style={{ width: "60vw"}}>
            <p className="text-lg text-center">
                Transitioning from a Director of Operations in 2020 to a Full Stack Developer in 2021, Matt Weichel has found a love and passion for building on Solana.
            </p>
            <p className="text-lg text-center">
                With a background in the Quick-Service Food Industry, Matt has a unique perspective on how to integrate Solana into the restaurant industry that extends beyond just using
                Solana as a payment rail. From the placing orders and inventory on-chain to the UI needed for the POS system and Back-of-House display, Matt has a vision for how Solana can be
                used to effectively replace the current 3rd party vendors that cost the SMB market billions of dollars a year.
            </p>
            <p className="text-lg text-center">
                Matt's vision for Hestia is to provide the tools and infrastructure needed for SMB restaurants to compete with the big chains in the industry by utilizing the Solana blockchain at the
                same speed but fraction of the cost.
            </p>
        </div>
      </div>
    );
  }