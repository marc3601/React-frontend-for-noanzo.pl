// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "../../services/firebase";


const handler = async (req, res) => {

  let post = [];
  try {
    const querySnapshot = await db
      .collection("test")
      .get();

    querySnapshot.forEach((doc) => {
      post.push(doc.data());

    })
  } catch (error) {
    console.log(error);
  }


  res.status(200).json(post)
}


export default handler