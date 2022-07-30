import { useRouter } from "next/router";
import { useEffect } from "react";

const Post = () => {
  const router = useRouter();
  const { shortUrl } = router.query;

  const callApi = async () => {
    if (shortUrl) {
      try {
        await fetch(`https://stage.api.habuild.in/${shortUrl}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ a: 1, b: "Textual content" }),
        });


        window.location.href = `https://stage.api.habuild.in/${shortUrl}`;

      } catch (error) {
        console.log("error aaya");
      }
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      callApi();
    }
  }, [shortUrl]);

  console.log(shortUrl);

  return <p>Post: {shortUrl}</p>;
};

export default Post;
