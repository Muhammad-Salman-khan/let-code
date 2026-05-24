"use server";

import getCurrentUserRole from "../User-related-query";

const CreateProblem = async () => {
  const res = await getCurrentUserRole();
  console.log(res);
  // accepting data
  // validating data
  // running loop foreach language
  //  get judge0 language id
  // pepare judge0 submission for all testcases
  // submit all the testcases in one batch
  // extract tokken from response
};
export default CreateProblem;
