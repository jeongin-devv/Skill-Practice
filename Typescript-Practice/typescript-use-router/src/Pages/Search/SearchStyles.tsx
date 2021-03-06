import styled, { keyframes } from 'styled-components';

export const SearchRecommended = styled.div`
  text-align: left;
  margin: 25px 0px;
  padding: 25px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SearchRecommendedTitle = styled.h6`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SearchRecommendedContents = styled.span`
  margin: 100px 0;
  display: block;
  text-align: center;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`;

export const SearchOpenChat = styled.div`
  
`;

export const SearchOpenChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  margin-bottom: 25px;

  & span {
    opacity: 0.6;
  }
`;

export const SearchOpenPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchOpenPostColumn = styled.div`
  display:block;
`;

export const SearchOpenPostTitle = styled.h5`
  font-weight: 600;
  margin-bottom: 7px;
  text-align:left;
`;

export const SearchOpenPostHashtags = styled.h6`
  text-transform: uppercase;
  opacity: 0.6;
  text-align:left;
`;

export const SearchOpenPostMembers = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;

  & img {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const SearchOpenPostMembersCount = styled.span`
  opacity: 0.5;
  font-size: 14px;
`;

export const SearchOpenPostMembersDivider = styled.div`
  width: 2px;
  height: 15px;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SearchOpenPostMembersStatus = styled.span`
  color: #ffb0e0;
`;

export const SearchOpenPostPhoto = styled.div`
  position: relative;

  & img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
`;

const heartBeat = keyframes`
  0% {
    color: white;
    transform: none;
  }
  50% {
    color: tomato;
    transform: scale(1.5);
  }
  100% {
    color: white;
    transform: none;
  }
`;

export const SearchOpenPostLike = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;

  & span {
    margin-left: 3px;
  }

  &:hover i {
    will-change: transform;
    animation: ${heartBeat} 1s linear infinite;
  }
`;
