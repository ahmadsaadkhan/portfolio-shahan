"use server"

import { sendMail } from "../../lib/mailService";
export async function emailHandler () {
  try {
    await sendMail(
      "Portfolio Email",
      "ahmad.saad.khn@gmail.com",
      "THI IS A TEST FOR MY MEDIUM USERS"
    );
  } catch (error) {
    console.log(error)
  }
  // try {
  //   const { method } = req;
  //   switch (method) {
  //     case "POST": {
  //       //Do some thing
  //       await sendMail(
  //         "TEST",
  //         "ahmad.saad.khn@gmail.com",
  //         "THI IS A TEST FOR MY MEDIUM USERS"
  //       );
  //       res.status(200).send("Success");
  //       break;
  //     }
  //     case "GET": {
  //       //Do some thing
  //       res.status(200).send(req.auth_data);
  //       break;
  //     }
  //     default:
  //       res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
  //       res.status(405).end(`Method ${method} Not Allowed`);
  //       break;
  //   }
  // } catch (err) {
  //   res.status(400).json({
  //     error_code: "api_one",
  //     message: err.message,
  //   });
  // }
};