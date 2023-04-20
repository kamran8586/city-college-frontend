import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const router = useRouter();

  const handleGoogleSuccess = (response: any) => {
    // Extract user information from response
    const { profileObj } = response;
    const { email, givenName, familyName } = profileObj;

    // Save user information to local storage or send to server
    localStorage.setItem(
      "user",
      JSON.stringify({ email, givenName, familyName })
    );

    // Redirect to student page
    router.push("/student");
  };

  const handleGoogleFailure = (response: any) => {
    console.log("Google login failed:", response);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate student ID
    if (!studentId) {
      alert("Please enter your student ID.");
      return;
    }

    // Save student ID to local storage or send to server
    localStorage.setItem("studentId", studentId);

    // Redirect to student page
    router.push("/");
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Student Login</h2>
      <GoogleLogin
        clientId="442499333230-pf79ddk824197lhrippcrnite1v56kkk.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-4"
      />
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-medium mb-2">
          Student ID
        </label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button type="submit" className="btn mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
