'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useEffect, useState } from "react";
  
export  default  function Cards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        // Handle the error appropriately
      }
    };

    fetchPosts();
  }, []);

    return (
      <Card className ="flex items-center justify-center flex-col">
        <CardHeader>
          <img
            src="https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png"
            alt="Card Image"
            className="w-28"
          />
        </CardHeader>
        <CardContent className= "flex flex-col justify-center  items-center">
            <CardTitle>
                Corona Virus Outbreak
            </CardTitle>
            <CardDescription className="flex flex-col items-center">
                Total Case is increasing daily by 50%.
            <CardFooter>
                21/1/2024 10:00 PM IST
            </CardFooter>
            </CardDescription>
        </CardContent>
      </Card>
    )
  }

  