import { useState, useEffect } from "react";
import styled  from "styled-components";
import PostModal from "./PostModal";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { getArticlesAPI } from "../actions";

const Main = (props) => {
  const [showModel, setShowModel] = useState("close")

  useEffect(() => {
    props.getArticles()
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      return;
    }

    switch(showModel) {
      case "open":
        setShowModel("close");
        break;
      case "close": 
        setShowModel("open");
        break;
      default:
        setShowModel("close");
        break;
    }
  }
    return (
        <Container>
           <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt=""/>
              ) : (
                <img src="/images/user.svg" alt=""/>
              )}
              <button 
              onClick={handleClick}
              disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>

            <div>
              <button>
                <img src="/images/media-icon.svg" alt=""/>
                <span>Media</span>
              </button>

              <button>
                <img src="/images/event-icon.svg" alt=""/>
                <span>Event</span>
              </button>

              <button>
                <img src="/images/article-icon.svg" alt=""/>
                <span>Write article</span>
              </button>
            </div>
           </ShareBox>
           {props.articles.length === 0 ? (
              <p>There are no articles</p>
              ) : (
              <Content>
                {props.loading && <img src="/images/spin-loader.svg" alt=""/>}
                {props.articles.length > 0 && 
                  props.articles.map((article, key) => (
                  <Article key={key}>
                    <SharedActor>
                      <a>
                        <img src={article.actor.image} alt=""/>
                        <div>
                          <span>{article.actor.title}</span>
                          <span>{article.actor.description}</span>
                          <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                        </div>
                      </a>
                      <button>
                        <img src="/images/ellipsis.svg" alt=""/>
                      </button>
                    </SharedActor>
                    <Description>{article.description}</Description>
                    <SharedImg>
                      <a>
                        {
                          !article.sharedImg && article.video ? (
                            <ReactPlayer width={"100%"} url={article.video} />
                          ) : (
                            article.sharedImg && <img src={article.sharedImg} />
                          )
                        }
                      </a>
                    </SharedImg>
                    <SocialCounts>
                      <li>
                        <button>
                          <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt=""/>
                          <img src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt=""/>
                          <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt=""/>
                          <span>75</span>
                        </button>
                      </li>
                      <li>
                        <a>{article.comments} comments</a>
                      </li>
                    </SocialCounts>
                    <SocialActions>
                      <button>
                        <img src="/images/like-icon.svg" alt=""/>
                        <span>Like</span>
                      </button>
                      <button>
                        <img src="/images/comments-icon.svg" alt=""/>
                        <span>Comments</span>
                      </button>
                      <button>
                        <img src="/images/repost-icon.svg" alt=""/>
                        <span>Repost</span>
                      </button>
                      <button>
                        <img src="/images/send-icon.svg" alt=""/>
                        <span>Send</span>
                      </button>
                    </SocialActions>
                  </Article>
                  ))}
              </Content>
            )}
           <PostModal showModel={showModel} handleClick={handleClick} />
        </Container>
    )
}

const Container = styled.div`
 grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      border-radius: 3px;
      margin-top: 3px;
    }
    button:hover{
      background-color: rgba(0, 0, 0, 0.12);
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button{
        margin: 4px 0 0 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:first-child:hover{
      button{
        background-color: rgba(0, 0, 0, 0.12);
      }
    }
    &:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
       
      button{
        img{
          margin: 0 4px 0 -2px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n +1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    
    img{
      width: 20px;
      height: 20px;
      padding-bottom: 20px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;

  button {
    align-items: center;
    background-color: transparent;
    border: none;
  }

  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  
  button{
    display:inline-flex;
    align-items:center;
    padding: 8px;
    color: rgba(0, 0, 0, 0.6);
    background-color:transparent;
    border:none;
    
    img{
      width:24px;
      height:24px;
    }
    @media(min-width:768px){
      span{
        margin-left:8px;
      }
      a{
        margin-left:8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);