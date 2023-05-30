import React, { useContext, createContext, useState, useEffect } from "react";
import { connectWithPremiumContract, connectWithContract } from "../constant";
import { useAddress } from "@thirdweb-dev/react";

const ConsciousContext = createContext();

export const ConciousProvider = ({ children }) => {
  const [allContent, setAllContent] = useState();
  const [typeOfUser, setTypeOfUser] = useState("regular");
  const address = useAddress();

  /**
   * conscious smart contract functions
   */
  const proposeContent = async (
    image,
    title,
    contentdescription,
    category,
    facebook,
    instagram,
    telegram,
    twitter
  ) => {
    try {
      const contract = await connectWithContract();
      const content = await contract.proposeContent(
        image,
        title,
        contentdescription,
        category,
        facebook,
        instagram,
        telegram,
        twitter
      );
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    const getContent = async () => {
      try {
        const contract = await connectWithContract();
        const ApprovedContent = await contract.getAllContent();
        console.log(ApprovedContent);
        setAllContent(ApprovedContent);
      } catch (error) {
        console.log(error);
      }
    };
    getContent()
  }, [address])

  // check if content is approved
  const checkIfContentApproved = async () => {
    try {
      const contract = await connectWithContract();
      const ApprovedContent = await contract.checkIfApproved();
    } catch (error) {
      console.log(error);
    }
  };

  // function to call when trying to vote for a particular content
  const voteContentApproval = async ({ owner, id }) => {
    try {
      const contract = await connectWithContract();
      await contract.voteContent(owner, id);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * premium contract function calls
   */
  const addToWhiteList = async () => {
    try {
      const contract = await connectWithPremiumContract();
      const whitelist = await contract.addAddressToWhitelist();
      console.log(whitelist);
      setTypeOfUser("premium");
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkIfWhitelisted = async () => {
    try {
      const contract = await connectWithPremiumContract();
      const result = await contract.isAddressWhitelisted(address);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserType = async () => {
      const isWhitelisted = await checkIfWhitelisted();
      if (isWhitelisted) {
        setTypeOfUser("premium");
      } else {
        setTypeOfUser("regular");
      }
    };

    fetchUserType();
  }, [address]);

  const setTokenUri = async (tokenURI) => {
    try {
      const contract = await connectWithPremiumContract();
      await contract.setBaseURI(tokenURI);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConsciousContext.Provider
      value={{
        proposeContent,
        checkIfContentApproved,
        voteContentApproval,
        addToWhiteList,
        checkIfWhitelisted,
        setTokenUri,
        typeOfUser,
      }}
    >
      {children}
    </ConsciousContext.Provider>
  );
};

export const useConsciousContext = () => useContext(ConsciousContext);
