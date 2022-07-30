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

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {/* <p>Post: {shortUrl}</p> */}

      <p
        style={{
          fontWeight: 500,
          fontSize: "2rem",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundImage: "linear-gradient(toright, #6FD3BB, #CCF7A5)",
        }}
      >
        Get Ready to do <span style={{ fontWeight: 700 }}>YOGA...</span>
      </p>
    </div>
  );
};

export default Post;
