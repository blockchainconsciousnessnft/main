import React, { useState , useEffect} from "react";
import { styled } from "styled-components";
import comment from '../../assets/comment.png';
import like from '../../assets/like.png';
import cosign from '../../assets/cosign.png';
import { Card, Button } from "antd";
const { Meta } = Card;

const PostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  margin-bottom: 32px;
  border: 1px solid #6e6e6e;
  width: 80%;
`;

const Text1 = styled.p`
  height: 24px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
  margin-bottom: 16px;
`;

const Text2 = styled.p`
  height: 28px;
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6E6E6E;
  margin-bottom: 16px;
`;

const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
`;

const IconText = styled.p`
  color: black;
`;

const Encyclopedia = ({ postData }) => {

  const [seeLessClicked, setSeeLessClicked] = useState(false);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);

  useEffect(() => {
    setSeeLessClicked(seeLessClicked);
  },[seeLessClicked])

  useEffect(() => {
    setSeeMoreClicked(seeMoreClicked);
  },[seeMoreClicked])

  const renderMetaTitle = (post) => {
    return <div>
      <Text1>{post.title}</Text1>
      <Text2>Publisher: {post.publisher}</Text2>
      <IconsDiv>
        <Icon>
          <img src={comment} style={{ width: '20px' , height: '20px', marginTop: '3px', marginRight: '5px'}}/>
          <IconText>Comment</IconText>
        </Icon>
        <Icon>
          <img src={like} style={{ width: '22px' , height: '20px', marginTop: '3px', marginRight: '5px'}}/>
          <IconText>Like</IconText>
        </Icon>
        <Icon>
          <img src={cosign} style={{ width: '20px' , height: '20px', marginTop: '3px', marginRight: '5px'}}/>
          <IconText>Co-sign</IconText>
        </Icon>
      </IconsDiv>
    </div>
  }

  const renderMetaDesc = (post) => {
    return (
      <div>
        {post.subText.length > 100 ? (
          <div>
            <Text2>{post.subText.slice(0, 100) + "..."}</Text2>
            <Button onClick={() => setSeeMoreClicked(true)}>See more</Button>
          </div>
        ) : (
          <div>
            <Text2>{post.subText}</Text2>
            <Button onClick={() => setSeeLessClicked(true)}>See less</Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <PostsDiv>
      {postData?.map((post) => {
        return (
          <StyledCard hoverable cover={<img alt="example" src={post.image} style={{border: '1px solid #6e6e6e' }}/>}>
            <Meta title={renderMetaTitle(post)} description={renderMetaDesc(post)} />
          </StyledCard>
        );
      })}
    </PostsDiv>
  );
};

export default Encyclopedia;
