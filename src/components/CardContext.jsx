import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BgShortDesktop from "../assets/bg-shorten-desktop.png";


const sampleUrls = [
  "https://reactjs.org", "https://github.com", "https://firebase.google.com",
  "https://vitejs.dev", "https://developer.mozilla.org", "https://www.npmjs.com",
  "https://nextjs.org", "https://vercel.com", "https://tailwindcss.com",
  "https://codepen.io", "https://stackoverflow.com", "https://freecodecamp.org",
  "https://css-tricks.com", "https://nodejs.org", "https://expressjs.com",
  "https://redux.js.org", "https://axios-http.com", "https://fonts.google.com",
  "https://www.youtube.com", "https://twitter.com", "https://linkedin.com",
  "https://facebook.com", "https://instagram.com", "https://openai.com",
  "https://chat.openai.com", "https://web.dev", "https://www.w3schools.com",
  "https://codesandbox.io", "https://replit.com", "https://medium.com"
];

const CardContext = () => {
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShortenAll = async () => {
    setLoading(true);
    const result = [];

    for (const url of sampleUrls) {
      try {
        const res = await axios.post(
          "https://cleanuri.com/api/v1/shorten",
          new URLSearchParams({ url }).toString(),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        result.push({ long: url, short: res.data.result_url, copied: false });
      } catch {
        result.push({ long: url, short: "Error", copied: false });
      }
    }

    setLinks(result);
    setLoading(false);
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(links[index].short);
    const updated = links.map((link, i) =>
      i === index ? { ...link, copied: true } : { ...link, copied: false }
    );
    setLinks(updated);
  };

  const filteredLinks = search.trim()
    ? links.filter((link) =>
        link.long.toLowerCase().includes(search.toLowerCase())
      )
    : links;

  return (
    <>
      <Container>
        <SearchBar
          type="text"
          placeholder="Search links (e.g. github)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ShortenBtn onClick={handleShortenAll} disabled={loading}>
          {loading ? "Shortening..." : "Shorten All"}
        </ShortenBtn>
      </Container>

      <ResultWrapper>
        {links.length === 0 ? (
          <NoResult>Click "Shorten All" to load URLs</NoResult>
        ) : filteredLinks.length === 0 ? (
          <NoResult>No matching links found.</NoResult>
        ) : (
          filteredLinks.map((link, index) => (
            <ResultCard key={index}>
              <LongLink>{link.long}</LongLink>
              <RightSide>
                <ShortLink href={link.short} target="_blank" rel="noreferrer">
                  {link.short}
                </ShortLink>
                <CopyBtn copied={link.copied} onClick={() => handleCopy(index)}>
                  {link.copied ? "Copied!" : "Copy"}
                </CopyBtn>
              </RightSide>
            </ResultCard>
          ))
        )}
      </ResultWrapper>
    </>
  );
};

export default CardContext;
const Container = styled.div`
  padding: 40px 20px 40px 20px;
  
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  gap: 20px;
  align-items: center;
  background-image: url(${BgShortDesktop});
  background-color: #3b3054;
  background-size: cover;
  border-radius: 10px;

  @media (min-width: 768px) {
    
    
    justify-content: center;
    background-image: url(${BgShortDesktop});
  }
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #333;
  font-weight: 500;

  &::placeholder {
    color: #aaa;
  }
`;

const ShortenBtn = styled.button`
  background-color: #2acfcf;
  color: white;
  border: none;
  padding: 14px 24px;
  font-size: .8rem;
  border-radius: 6px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #9be3e2;
    color: black;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ResultWrapper = styled.div`
  padding: 20px;
  height: 35vh;
  overflow-y: scroll;
`;

const ResultCard = styled.div`
  background: white;
  margin: 10px 0;
  padding: 15px 20px;
  
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
`;

const LongLink = styled.p`
  flex: 1;
  word-break: break-word;
`;

const RightSide = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ShortLink = styled.a`
  color: #2acfcf;
  font-weight: bold;
  text-decoration: none;
`;

const CopyBtn = styled.button`
  background-color: ${(props) => (props.copied ? "#3b3054" : "#2acfcf")};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const NoResult = styled.div`
  text-align: center;
  padding: 30px;
  font-size: 1rem;
  color: gray;
`;
