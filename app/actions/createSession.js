"use server";

async function createSession(previousState, formData) {
  const email = formData.get("email");   /* This confirm to the name attributes in the email and password */
  const password = formData.get("password");

  if(!email | !password) {
    return {
      error: "Please fill out all fields",
    };
  }

  return {
    success: true,
  };
}

export default createSession;