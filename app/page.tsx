import getMe from "./modules/home/api/get/get-me";

export default async function Home() {
  const me = getMe();
  console.log("me", me);


  return (<>
  </>
  );
}
