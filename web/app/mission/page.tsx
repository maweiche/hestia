// generate a basic page component that displays our mission statement
// it should display a heroImage of the company, a title, and a paragraph of text

export default function MissionPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-12 pb-6">
            <img src="/graphics/about_hestia2.png" style={{width: '40vw', paddingTop: '2rem'}}/>
          <div className= "flex flex-col items-center gap-6" style={{ width: "80vw"}}>
              <p className="text-2xl text-center">
                  Hestia is a Greek goddess who can be difficult to distinguish from other goddesses, <br />
                  especially as she does not carry an easily identifiable object associated with her.
              </p>
              <p className="text-lg text-center">
                  With Hestia Restaurant I.T. Infrastructure, we aim to provide a comprehensive solution for restaurant owners to manage their POS, inventory, employees, customers, orders, rewards, and payments all in one program, all on Solana.
                  From the moment a restaurant creates an account on our program, they will instantly have mobile order access along with on-chain rewards and memberships for customers. 
                  <br />
                  These features are just the cusp of what Hestia has to offer.
              </p>
          </div>
          <div className= "flex flex-col items-center gap-6" style={{ width: "60vw"}}>
              <p className="text-lg text-center">
                  Other attempts to integrate Solana into restaurants failed because they aimed to disrupt.<br />
                  With Hestia, the goal is to integrate Solana with the sense of nothing changed except for added features. 
              </p>
              <p className="text-lg text-center">
                  Your customer will still pay with their credit card or crypto on Solana. Your employees will still use the same POS system. Your inventory will still be managed the same way.
              </p>
              <p className="text-lg text-center">
                  The only difference is that everything is now on Solana.
              </p>
          </div>
        </div>
    );
}