import React, { useContext, createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import connectWithContract from "..";

const ConsciousContext = createContext();

export const ConciousProvider = ({ children }) => {
  const [allContent, setAllContent] = useState();
  const [isListed, setIsListed] = useState("regular")


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
    } catch (error) {}
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
      const contract = await connectWithContract();
      await contract.addAddressToWhitelist();
      setIsListed("nft")
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWhitelisted = async () => {
    try {
      const contract = await connectWithContract();
      const result = await contract.isAddressWhitelisted();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const setTokenUri = async (tokenURI) => {
    try {
      const contract = await connectWithContract();
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
        setTokenUri
      }}
    >
      {children}
    </ConsciousContext.Provider>
  );
};

export const useErrandContext = () => useContext(ConsciousContext);
