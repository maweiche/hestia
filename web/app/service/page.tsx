// generate a basic page component that displays our mission statement
// it should display a heroImage of the company, a title, and a paragraph of text

export default function ServicePage() {
    return (
        // display as a 2 x 3 grid
        <div className="flex flex-col items-center justify-center items center min-h-screen py-6">
            <p className="text-4xl text-center">
                What's on the menu? Everything -- and it's on-chain.
            </p>
            <div className="grid grid-cols-2 gap-6 items-center justify-center min-h-screen">
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Inventory
                    </p>
                    <p className="text-lg text-center">
                        Restaurants have the ability to create and manage their inventory on-chain. This allows for real-time updates and tracking of inventory levels every time
                        an order is placed.
                    </p>
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Orders
                    </p>
                    <p className="text-lg text-center">
                        By having Orders on-chain, Restaurants instantly unlock mobile ordering for customers. With the UI's we provide a customer can place an order and have it
                        ready when they arrive at the restaurant.
                    </p>
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Employees & Customers
                    </p>
                    <p className="text-lg text-center">
                        Each employee and customer gets a Token-2022 NFT that contains the details of their membership. This allows for easy tracking of rewards and allows the restaurant
                        to burn the NFT when the membership is over.
                    </p>
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                       Menu
                    </p>
                    <p className="text-lg text-center">
                        Restaurants can create and manage their menu on-chain. If an item is out of stock, hide it. If a new item is added, show it. All in real-time.
                    </p>
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Rewards
                    </p>
                    <p className="text-lg text-center">
                        Reward points are set at 10 points per dollar spent. Add rewards to your Restaurant so customers can redeem them as Token-2022 NFT and burn them when they are used.
                    </p>
                </div>
                <div className= "flex flex-col items-center gap-6">
                    <p className="text-2xl text-center">
                        Payments
                    </p>
                    <p className="text-lg text-center">
                        Customers can still pay with their credit card thanks to Stripe pay integration and still have all the on-chain features execute. Or even better, customers
                        can pay with crypto. Restaurants can set the stores currency at the store level!
                    </p>
                </div>
            </div>
        </div>
    );
}