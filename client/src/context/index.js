import React, { useContext, createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import  { connectWithPremiumContract, connectWithContract } from "../constant";
import { useAddress } from "@thirdweb-dev/react";

const ConsciousContext = createContext();

export const ConciousProvider = ({ children }) => {
  const [allContent, setAllContent] = useState();
  const [typeOfUser, setTypeOfUser] = useState("regular")
  const address = useAddress()


  /**
   * conscious smart contract functions
   */
  const proposeContent = async (image, title, contentdescription, category) => {
    try {
      const contract = await connectWithContract();
      const content = await contract.proposeContent(
        image,
        title,
        contentdescription,
        category
      );
      console.log(content);
    } catch (error) {
      console.log(error)
    }
  };

  //check if content is approved
  const checkIfContentApproved = async () => {
    try {
      const contract = await connectWithContract();
      const ApprovedContent = await contract.checkIfApproved();
      console.log(ApprovedContent);
      setAllContent(ApprovedContent);
    } catch (error) {
      console.log(error);
    }
  };

  //function to call when try to vote a particular content
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
    const whitelist =  await contract.addAddressToWhitelist();
    console.log(whitelist)
      setTypeOfUser("premium")
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
    checkIfWhitelisted()
  }, [address])

  const setTokenUri = async (tokenURI) => {
    try {
      const contract = await connectWithPremiumContract();
      await contract.setBaseURI(tokenURI);
    } catch (error) {
      console.log(error)
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
        typeOfUser
      }}
    >
      {children}
    </ConsciousContext.Provider>
  );
};

export const useConsciousContext = () => useContext(ConsciousContext);
