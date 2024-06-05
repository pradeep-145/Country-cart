import React , {Fragment} from "react";
import '../Style/HomePage.css';
import Navigation from "./Navigation";
const HomePage = () =>
{
    return(
        <>
        <div className="nav">
            <Navigation />
        </div>
        <div className="logo"><img src="Country_Cart_Logo.png" className="logoicon"></img></div>
        <div className="pc1">
        <div className="para1">
        Country Cart is a groundbreaking mobile application that revolutionizes the agricultural industry by connecting farmers directly with consumers. By eliminating intermediaries, the platform empowers farmers to showcase their produce directly to consumers, ensuring fair compensation for their labor and dedication. This direct-to-consumer model not only benefits farmers financially but also enables consumers to access fresh, locally sourced goods at competitive prices.
        </div>
        </div>
        <div className="pc2">
        <div className="para2">
        The strength of Country Cart lies in its extensive range of products, spanning from seasonal fruits and vegetables to dairy products, grains, and more. Each item available on the platform is sourced directly from local farms, guaranteeing freshness and quality. This commitment to providing a diverse selection of agricultural goods contributes to a more sustainable food system and encourages consumers to support local farmers.
        </div>
        </div>
        <div className="pc3">
        <div className="para3">
        Transparency is a core value upheld by Country Cart. The app provides detailed information about the farmers behind each product, including their farming practices and the origin of the produce. This transparency fosters trust and confidence among consumers, who can make informed decisions about the products they purchase. By knowing the story behind their food, consumers feel a stronger connection to the farmers and the land from which their produce originates.
        </div>
        </div>
        <div className="pc4">
        <div className="para4">
        In addition to transparency, Country Cart prioritizes convenience and accessibility for users. With a user-friendly interface, consumers can easily browse, select, and purchase their desired products with minimal effort. The app also offers features such as customizable preferences and order tracking, enhancing the overall shopping experience. By combining convenience with transparency and a commitment to supporting local farmers, Country Cart  reshaping the way we buy food.
        </div>
        </div>
        <div id="footer">
                        <li>Country Cart<br></br><br></br>
                        Email Us : countrycart24@gmail.com<br></br><br></br>
                        Address :<br></br>40,Cornelia Street,<br></br>Pondicherry.<br></br>
                        Tel no :044 4561 6780</li>
        </div>
        </>
    );
}
export default HomePage;