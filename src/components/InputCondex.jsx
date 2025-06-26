import React, { useState } from 'react';

const InputCondex = () => {

     const [links, setLinks] = useState([]);

  const handleShorten = (longUrl) => {
    
    const shortUrl = `https://rel.link/${Math.random().toString(36).substr(2, 6)}`;
    const newLink = { longUrl, shortUrl, copied: false };
    setLinks([newLink, ...links]);
  };

  const handleCopy = (index) => {
    navigator.clipboard.writeText(links[index].shortUrl);
    setLinks(links.map((link, i) => ({
      ...link,
      copied: i === index
    })));
  };

  return (
    <div className="app-container">
      <LinkInput onShorten={handleShorten} />
      <LinkList links={links} onCopy={handleCopy} />
    </div>
  );
};
  

export default InputCondex
const LinkInput = ({ onShorten }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) {
      setError(true);
      return;
    }
    setError(false);
    onShorten(input);
    setInput('');
  };

  return (
    <div className="link-input">
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={error ? 'error' : ''}
      />
      <button onClick={handleSubmit}>Shorten It!</button>
      {error && <p className="error-text">Please add a link</p>}
    </div>
  );
};

const LinkList = ({ links, onCopy }) => {
  return (
    <div className="link-list">
      {links.map((link, index) => (
        <LinkItem
          key={index}
          longUrl={link.longUrl}
          shortUrl={link.shortUrl}
          copied={link.copied}
          onCopy={() => onCopy(index)}
        />
      ))}
    </div>
  );
};

