import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import { LOGO } from "../../utils/constants";

const MovieHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleHomePageButton = () => {
    navigate("/browse");
  };

  return (
    <div className="absolute bg-[#181818] w-[100%] px-8 flex flex-row justify-between z-10">
      <img className="w-32 mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          <button className="px-4 mx-4 my-2 py-2 bg-red-600 text-white rounded-lg hover:scale-105 duration-200" onClick={handleHomePageButton}>
            Homepage
          </button>
          <img className="w-12 h-12" src={user.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className="font-bold text-white ml-2">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieHeader;
