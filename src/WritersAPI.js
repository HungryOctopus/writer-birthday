import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://openlibrary.org/search/authors.json?q=j%20k%20rowling';

export default function WritersApi() {
  const [post, setPost] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.docs}</h1>
    </div>
  );
}
