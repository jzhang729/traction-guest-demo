import React from "react";
import useFetchApi from "../hooks/useFetchApi";
import { Heading, Pane, Paragraph } from "evergreen-ui";
import { PageWrapper } from "../styles/global";

const Product = props => {
  const {
    data: { products },
    isLoading,
    isError
  } = useFetchApi(
    `https://api.bestbuy.com/v1/products(sku=${props.location.state.sku})?apiKey=${
      process.env.REACT_APP_API_KEY
    }&show=name,sku,image,regularPrice,salePrice,description,shortDescription,features&sort=name.asc&format=json`,
    "singleProduct"
  );

  return (
    <PageWrapper>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pane>
          <Heading size={600} marginTop="default">
            {products[0].name}
          </Heading>
          <Pane>
            <img src={products[0].image} alt={products[0].name} />
            <Paragraph>
              Barkadeer parrel holystone draught crack Jennys tea cup rum wench nipper rope's // end
              take a caulk.Loot avast walk the plank Buccaneer yardarm barkadeer yawl // keelhaul
              boatswain nipperkin.Smartly jib jack brig reef reef sails bounty // rigging splice the
              main brace Admiral of the Black.Dead men tell no tales wench // chase guns sutler Sail
              ho fire ship gun case shot Barbary Coast coffer. // Pressgang lanyard heave to
              gunwalls galleon jolly boat crimp Blimey lad mizzen. // Me jib square - rigged trysail
              lugger keelhaul boatswain Barbary Coast piracy Sail // ho.No prey, no pay jury mast
              reef sails spyglass quarterdeck rutters Chain Shot // heave down fire ship
              broadside.Sail ho main sheet stern chase bring a spring // upon her cable interloper
              bounty black spot sloop driver.Yawl grog rutters Cat // o'nine tails gangway pillage
              crimp black jack squiffy Chain Shot.
            </Paragraph>
          </Pane>
        </Pane>
      )}
    </PageWrapper>
  );
};

export default Product;
