import { Post } from "@/app/components/Post"

export default function Home () {
  const posts = [
    {title: "My Post 1",
     author: "John Doe",
     content: "I am awesome!",
     following: false,
    },
    {title: "My Post 2",
      author: "John Doe",
      content: "I am awesome too!",
      following: false,
     },
     {title: "My Post 3",
      author: "John Doe",
      content: "True that!",
      following: false,
     },
     {title: "My Post 4",
      author: "John Doe",
      content: "I am #4",
      following: false,
     },
  ];
  
  return (
    <div>
      {posts.map((content, idx) => {
          return <Post {...content} key={idx}/>;
      })}
    </div>
  );
}