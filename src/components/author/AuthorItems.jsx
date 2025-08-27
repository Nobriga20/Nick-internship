
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios"
import Skeleton from "../UI/Skeleton";

const AuthorItems = (prop) => {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);
   
  

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const { data } = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author73855012`
        );
        setAuthor(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, []);

   if (loading) {
     return <Skeleton />;
   }


  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
         {author.map((item, index)  => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link to= {`author/${item.authorId}`}>
                    <img className="lazy" src={item.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to={`/item-details/${item.id}`}>
                    <img
                      src={item.nftImage} alt={item.title}
                      className="lazy nft__item_preview"
                    
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${item.nftCollection}`}>
                    <h4>{item.authorName}</h4>
                  </Link>
                  <div className="nft__item_price">{item.price}</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
