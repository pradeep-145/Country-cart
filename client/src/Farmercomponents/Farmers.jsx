import React , {Fragment, useState} from "react";
import '../FarmerStyle/Farmers.css';
import {Link } from 'react-router-dom'
import axios from 'axios'
const Farmers = () => {

    const [Location,setLocation]=useState()
    const [name , setName]=useState()
    const [produtDesc,setDesc]=useState()
    const [produtPrice,setPrice]=useState()
    const [produtQuantity,setQuantity]=useState()
    const [productImage,setImage]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        
        
        axios.post('https://countrycart.onrender.com/farmers',{Location,name,produtDesc,produtPrice,produtQuantity,productImage}).then(result=>{console.log(result)
        alert("Product uploaded");
    })
        .catch(err=>console.log(err))
    }

    return(
        <>
        <div className="icon"><img src="Country_Cart_Logo.png" /></div>
        <div className="fcont1">
            <h2 className="title" ><b>POST</b></h2><br></br>
    <form onSubmit={handleSubmit}>
    <p className="attribute1">Product Details</p>
   <p className="attribute">Choose Vegetable : </p>
    <select name="image" id="image" className="img" onChange={(e)=>{setImage(e.target.value);
        setName(e.target.options[e.target.selectedIndex].text)
    }}>
    <option >SELECT vegetable</option>
    <option value="https://cdn-prod.medicalnewstoday.com/content/images/articles/277/277957/collard-greens-contain-many-nutrients.jpg">Greens</option>
    <option value="https://img1.exportersindia.com/product_images/bc-full/2020/5/6392633/fresh-drumsticks-1589454780-5430759.jpeg">Drumstick</option>
    <option value="https://rukminim2.flixcart.com/image/850/1000/k3orqfk0/plant-seed/z/g/h/10-garden-hybrid-f99-sem-phali-vegetable-see-rds-original-imafkgbwtbgsfmak.jpeg?q=90&crop=false">Broad Beans</option>
    <option value="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/02/20130540/shutterstock_1282068550-1-4.jpg">Beet root</option>
    <option value="https://www.naturebring.com/wp-content/uploads/2017/02/Bitter-gourd-nb-09988.jpg">Bitter gourd</option>
    <option value="https://assets-news.housing.com/news/wp-content/uploads/2022/10/18125758/Bottle-gourd-benefits-Tips-for-growing-plant-in-your-home-garden.jpg">Bottle gourd</option>
    <option value="https://seed2plant.in/cdn/shop/products/longbrinjalseeds.jpg?v=1603434934">Brinjal.</option>
    <option value="https://www.bhg.com/thmb/dKILaAA52xVQhfAM7QIvyEZR0nA=/1244x0/filters:no_upscale():strip_icc()/red-amaranthus-plant-97b9fa1b-53ff446802be4eef9440486b28413b5c.jpg">Amaranthus</option>
    <option value="https://cdn.mos.cms.futurecdn.net/wbUn4axYe2Qfy9dbnavy2g.jpg">Sweet Potato</option>
    <option value="https://www.netmeds.com/images/cms/wysiwyg/blog/2020/03/1584520205_AshGourd_big_6.jpg">Ash gourd</option>
    <option value="https://nurserylive.com/cdn/shop/products/nurserylive-seeds-bhindi-okra-f1-sujata-vegetable-seeds-16969055109260.jpg?v=1634202947">Bhendi</option>
    <option value="https://rukminim2.flixcart.com/image/850/1000/ky90scw0/plant-seed/v/i/c/51-axa-451-xolda-original-imagaj9qwtghus9q.jpeg?q=90&crop=false">Carrot</option>
    <option value="https://www.southernliving.com/thmb/8sJLpOMVrdM3RO6GeyuSVAJa9G8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1365178498-81dd069cd1514e288e68516bc96df8d4.jpg">Tomato.</option>
    <option value="https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-sapling/z/s/b/annual-yes-yes-spinach-1-pot-elitegreen-original-imagjpcsgfdjmd6d.jpeg?q=90&crop=false">Spinach</option>
    <option value="https://delivery.bunningscontenthub.bunnings.com.au/api/public/content/e172dc61270f409385bab78eaa6c67a3?v=e959625d">Pumpkin</option>
    <option value="https://i0.wp.com/plantcraft.in/wp-content/uploads/2020/12/Snake-gourd-plant.jpg?fit=500%2C430&ssl=1">Snake gourd</option>
    <option value="https://images.squarespace-cdn.com/content/v1/5bbfbb9e523958e4f1427d15/1682948357237-PGOVO1E45CYYLP0RPZ9X/Companion+Plants+for+Cauliflower+1">Cauliflowe</option>
    <option value="https://lh6.googleusercontent.com/proxy/TqPjXceN5_4zSa45PzWfgkr00XimToYC3wK-8uwRToeLdzlmX7bgBHTIFyC1wJZ5jLZbHihQS88RR7AqeVcEIvnU">Potato</option>
    <option value="https://rukminim2.flixcart.com/image/850/1000/l0tweq80/plant-seed/u/n/e/45-la1514-paudha-original-imae82satbbnzybm.jpeg?q=90&crop=false">Radish</option>
    <option value="https://www.thespruce.com/thmb/JII5FLZwRD2yX8dNe27UgttXDUg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/red-onions-7110784-hero-79e37549208f4b21a95481bcb7725cb1.jpg">Onion</option>
    <option value="https://nurserylive.com/cdn/shop/articles/9972fcbe3ad2f6b3b0a6ad37f723e969-520408.jpg?v=1679747925">Coriander</option>
    <option value="https://www.rootsplants.co.uk/cdn/shop/products/VEG0210-1.jpg?v=1676565455">Cucumber</option>
    <option value="https://www.goodwholefood.com/wp-content/uploads/2015/08/Turnips.jpg">Turnip</option>
    <option value="https://www.aces.edu/wp-content/uploads/2018/08/Conservation-Tillage-shutterstock_1106961482.jpg-By-Sopha-Changaroon.jpg">lettuce</option>
    <option value="https://www.netmeds.com/images/cms/wysiwyg/blog/2022/01/1643275328_Kanda_big_1.jpg">Elephant foot yam</option>
    <option value="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/03/banana-flower-1296x728-header.jpg?w=1155&h=1528">Banana flower</option>


  </select>
  
   
  <br></br>
    
    <p className="attribute">Description : </p><input className="ip" placeholder="Enter the Description"onChange={(e)=>setDesc(e.target.value)}/>
    <p className="attribute">Price :</p><input type="number" className="ip" placeholder ="Enter the Price " id="pr"onChange={(e)=>setPrice(e.target.value)} required></input>
    <p className="attribute">Quantity :</p><input type="number" className="ip" placeholder ="Enter the Quantity " id="qty"onChange={(e)=>setQuantity(e.target.value)} required></input>
    <p className="attribute">Location : </p><input type="text" className="ip" id="loc" onChange={(e)=>setLocation(e.target.value)}></input><br></br>
    <button className="attribute2" type="submit">Post</button>
    <h4><Link to='/'>Logout</Link></h4>
    </form>
        </div>
        </>
    );
}
export default Farmers;